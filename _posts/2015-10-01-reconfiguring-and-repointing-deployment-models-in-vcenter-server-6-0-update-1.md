---
layout:         post
title:          "Reconfiguring and Repointing Deployment Models in vCenter Server 6.0 Update 1"
subtitle:       ""
date:           2015-10-01 10:30:00
author:         "Ryan Johnson"
tags:           [vSphere, vCenter, Platform Services Controller]
published:		true
---

Originally posted on the [VMware vSphere Blog](http://blogs.vmware.com/vsphere/).
{: .notice}

In my last blog post, we discussed some of the new features and capabilities found in vCenter Server 6.0 such as how you can quickly and easily update the vCenter Server Appliance 6.0 to Update 1.

Now, it’s time to focus our attention on a two key enhancements found in vCenter Server 6.0 Update 1 - both the appliance and Windows-based form factors:

* **Reconfigure** – You can now reconfigure an embedded deployment node to an external deployment model, also known as MxN.

<a href="http://blogs.vmware.com/vsphere/files/2015/09/reconfigure.png"><img class="alignnone size-full wp-image-18248" src="http://blogs.vmware.com/vsphere/files/2015/09/reconfigure.png" alt="reconfigure" width="746" height="418" /></a>

* **Repoint** – Simplified repointing of a management node in an external deployment model from one external Platform Services Controller to another external Platform Services Controller.

<a href="http://blogs.vmware.com/vsphere/files/2015/09/repoint.png"><img class="alignnone size-full wp-image-18249" src="http://blogs.vmware.com/vsphere/files/2015/09/repoint.png" alt="repoint" width="746" height="418" /></a>

***Why is this important?***

The reconfiguration enhancement enables you to take an existing embedded deployment and transition it to a more optimal external deployment model – MxN.  There is also the simplified ability to repoint a management node to another Platform Services Controller which enables you to quickly recover from an external Platform Services Controller failure and to distribute load to alternate nodes that are in the same SSO domain.

Before moving forward with either the reconfigure or repoint operations, there is a key set of requirements that you need to meet.

### Reconfiguration Requirements

* The vCenter Server instance must be an embedded deployment model.
* The target Platform Services Controller must be a replication partner of the existing embedded Platform Services Controller in the same SSO Domain.

**Note**: In vCenter Server 6.0 Update 1, we only support a single transition from embedded deployment to a external deployment (MxN) model for per SSO domain. See the Known Issues section of the <a href="http://pubs.vmware.com/Release_Notes/en/vsphere/60/vsphere-vcenter-server-60u1-release-notes.html#knownissues">Release Notes</a> for additional details.

## Repointing Requirements

* The vCenter Server instance must be an <span style="font-style: normal !msorm;">external</span> deployment model.
* The target Platform Services Controller must be a replication partner of the existing external Platform Services Controller in the same SSO Domain.
* We’ve introduced an update to cmsso-util in vCenter Server 6.0 Update 1. This utility can be found in:

	* **VCSA**: /bin/cmsso-util
	* **Windows**: <Drive>:\Program Files\VMware\vCenter Server\bin\cmsso-util
* This utility automates the entire process by passing the new required namespace (either reconfigure or repoint) and its arguments.  For example, with the VCSA, the namespaces would be:

	* **VCSA**: /bin/cmsso-util reconfigure
	* **VCSA**: /bin/cmsso-util repoint

Okay, so, how do we do it? Well, let’s see both namespace options in action in the vCenter Server Appliance (VCSA). Note that the cmsso-util namespaces and arguments are the same for a vCenter Server 6.0 Update 1 instance installed on Windows.

#### Reconfigure an Embedded Deployment to an External Deployment

Recall that before you can reconfigure an embedded deployment to an external deployment you must first deploy an external Platform Services Controller that is a replication partner to the embedded Platform Services Controller. Thus, these instances belong to the same SSO Domain (e.g. vsphere.local).

In this example, I have an existing vCenter Server Appliance 6.0 Update 1 embedded deployment on the system mgmt01vc01.demo.vmware.com. Note that when logging into the SSH session the type is also indicated as “vCenter Server with an embedded Platform Services Controller”.

<a href="http://blogs.vmware.com/vsphere/files/2015/09/1-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18236" src="http://blogs.vmware.com/vsphere/files/2015/09/1-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="1-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

In order to reconfigure the deployment model on the appliance, we must first enable BASH and launch the shell in the appliance by running:

	Command> shell.set --enabled True
	Command> shell

<a href="http://blogs.vmware.com/vsphere/files/2015/09/2-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18237" src="http://blogs.vmware.com/vsphere/files/2015/09/2-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="2-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

Now we’re ready to reconfigure the appliance using the cmsso-util by passing the reconfigure namespace and its required arguments.

	cmsso-util reconfigure --repoint-psc <FQDN-of-External-PSC> --username <SSO-DomainAdmin> --domain-name <SSO-Domain> --passwd <SSO-DomainAdmin-Password>

If the external Platform Services Controller is not using the default HTTPs port (443) we’d specify the custom HTTPs port as an argument as follows.

	cmsso-util reconfigure --repoint-psc <FQDN-of-External-PSC> --dc-port <Port> --username <SSO-DomainAdmin> --domain-name <SSO-Domain> --passwd <SSO-DomainAdmin-Password>

**Note:** All required parameters must be provided as command line arguments.

	-h, --help: Help and Exit
	--repoint-psc : Fully Qualified Domain Name of Platform Services Controller
	--username : SSO Domain Administrator. Required for Reconfiguring an Embedded Deployment to External Deployment
	--passwd : SSO Domain Administrator Password. Required for Reconfiguring an Embedded Deployment to External Deployment.
	--domain-name : Required for Reconfiguring an Embedded Deployment to External Deployment.
	--dc-port: HTTPs Port of External Platform Services Controller - If Not Set, Defaults to 443

Now, we’ll initialize the cmsso-util with the reconfigure namespace and arguments to repoint the system to our externally replicated Platform Services Controller – mgmt01psc01.demo.vmware.com. Then we’ll demote the embedded deployment to a management node.

	cmsso-util reconfigure --repoint-psc "mgmt01psc01.demo.vmware.com" --username "Administrator" --domain-name "vsphere.local" --passwd "VMware1!"
	
When the reconfigure namespace is used it automates the following tasks to transition an embedded deployment to an external deployment topology.

1. Stops all non-core services
2. Sets the dc-name option as the external Platform Services Controller
3. Sets the dc-port if HTTPs is running on a custom port
4. Changes the Deployment Type in the registry: embedded to external
5. Removes the local Platform Services Controller from federated SSO domain
6. Stop all services
7. Changes the Deployment Node Type to start only services for a Management Node
8. Update the service dependencies
9. Starts the vmafdd required to join the external Platform Services Controller
10. Disables services and registration for the embedded Platform Services Controller (Appliance)
11. Runs MSI uninstall scripts to remove and unregister services for the embedded Platform Services Controller (Windows)
12. Restarts all services

Here we see the execution of the reconfiguration option followed by status messages for each stage of the automation process. Once completed, the instance is reconfigured and repointed to the external Platform Services Controller that we specified in the arguments – mgmt01psc01.demo.vmware.com.

<a href="http://blogs.vmware.com/vsphere/files/2015/09/3-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18238" src="http://blogs.vmware.com/vsphere/files/2015/09/3-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="3-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

Let’s take a moment to validate the reconfiguration from here within the SSH session by running:

	/usr/lib/vmware-vmafd/bin/vmafd-cli get-ls-location –server-name localhost

<a href="http://blogs.vmware.com/vsphere/files/2015/09/4-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18239" src="http://blogs.vmware.com/vsphere/files/2015/09/4-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="4-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

The results indicate that this vCenter Server management node has been repointed to our specified external Platform Services Controller. Alternatively, you can open the vSphere Web Client and search for the **config.vpxd.sso.admin.uri** in the Advanced Settings of the vCenter Server instance. Here we can see the same information that we returned in the **vmafd-cli** command.

<a href="http://blogs.vmware.com/vsphere/files/2015/09/5-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-large wp-image-18240" src="http://blogs.vmware.com/vsphere/files/2015/09/5-Reconfiguring-Repointing-Deployment-Models-6U1-1024x305.png" alt="5-Reconfiguring-Repointing-Deployment-Models-6U1" width="625" height="186" /></a>

Recall that during the automation process, cmsso-util changes the deployment type from embedded to external, removed the local Platform Services Controller from the federated SSO domain, and then changes the deployment node type to only start the services for the management node. We can quickly verify that this change is completed by logging into another SSH session to our VCSA – mgmt01vc01.sddc.local. Here we see that the Type is now shown as “vCenter Server with an external Platform Services Controller.”

<a href="http://blogs.vmware.com/vsphere/files/2015/09/6-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18241" src="http://blogs.vmware.com/vsphere/files/2015/09/6-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="6-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

Success! We’ve successfully reconfigured a vCenter Server 6.0 Update 1 deployment model with an embedded Platform Services Controller to an external deployment model.

#### Repoint an External Deployment to an Alternate Platform Services Controller in the Same Site (Intra-Site)

Now, what if we wanted to repoint this vCenter Server instance to use an alternate external Platform Services Controller in the **same site**? For example, to quickly recover from an external platform services controller failure and/or distribute load to alternate nodes that are in the same SSO domain.

While we could do this in vCenter Server 6.0 following [KB 2113917](http://kb.vmware.com/2113917), we’ve made it easier in 6.0 Update 1 with a bit of automation. The repoint namespace just wraps the service-control and vmafd-cli command into a nice little package with some validation logic – so again, it is what we are already doing in KB 2113917, but automated for you.

Let’s return to the BASH shell in the appliance first and see how it’s done.

Simply repoint the appliance to an alternate Platform Services Controller in the same SSO domain using the cmsso-util and passing the repoint namespace with its required arguments.

	cmsso-util repoint --repoint-psc <FQDN-of-External-PSC>

If the external Platform Services Controller is not using the default HTTPs port (443) then specify the custom port HTTPs port:
cmsso-util repoint --repoint-psc <FQDN-of-External-PSC> --dc-port <Port>
**Note:** All required parameters must provide as command line arguments.

	-h, --help : Help and Exit
	--repoint-psc : Fully Qualified Domain Name of Platform Services Controller
	--dc-port : HTTPs Port of External Platform Services Controller - If Not Set, Defaults to 443

Here we’ll initialize the cmsso-util with the repoint namespace and arguments to repoint the system to an alternate Platform Services Controller – mgmt01psc02.demo.vmware.com – which is an existing replication partner with our existing Platform Services Controller – mgmt01psc01.demo.vmware.com – in the vsphere.local SSO domain.

	cmsso-util repoint --repoint-psc "mgmt01psc02.demo.vmware.com”

<a href="http://blogs.vmware.com/vsphere/files/2015/09/7-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18242" src="http://blogs.vmware.com/vsphere/files/2015/09/7-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="7-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

When the repoint namespace is used it automates the following tasks to repoint an external deployment to another external platform services controller that is a replication partner.

1. Sets the dc-name as the new external Platform Services Controller
2. Sets the dc-port if HTTPs is running on a custom port
3. Stops all services
4. Starts all services

Below we see the execution of the repoint operation followed by status messages for each stage of the process. Once it’s completed, the instance is repointed to an alternate external Platform Services Controller that we specified in the arguments – mgmt01psc02.demo.vmware.com.

<a href="http://blogs.vmware.com/vsphere/files/2015/09/8-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18243" src="http://blogs.vmware.com/vsphere/files/2015/09/8-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="8-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

Once again, let’s validate the reconfiguration from here within the SSH session by running:

	/usr/lib/vmware-vmafd/bin/vmafd-cli get-ls-location –server-name localhost

<a href="http://blogs.vmware.com/vsphere/files/2015/09/9-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18244" src="http://blogs.vmware.com/vsphere/files/2015/09/9-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="9-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

The results **vmafd-cli** command indicate that this vCenter Server has been repointed to the alternate external Platform Services Controller.

#### Repoint an External Deployment to an Alternate Platform Services Controller in Another Site (Inter-Site)

The process I showed above was for repointing a vCenter Server to an an alternate external Platform Services Controller in the same same (aka. intra-site) but you can also move vCenter Server <strong>between SSO domain sites</strong> (aka. inter-site) in vCenter Server 6.0 Update 1.

When the vCenter Server is installed, it creates services registrations that it issues to start the vCenter Server services. These service registrations are written to a specific site of the Platform Services Controller that was used during install time. So. when you attempt to move the vCenter Server's affinity to a new Platform Services Controller in a new site, the vCenter Server will fail to start its services due to not having the proper service registrations in the new site.

Refer to [KB 2131191](http://kb.vmware.com/2131191) and download the <strong>cmsso-util</strong> in this article to facilitate the movement of the services registrations.

For example, if mgmt01psc02.demo.vmware.com was in a different site from my original Platform Services Controller, mgmt01psc01.demo.vmware.com, I would run the following commands on the vCenter Server to move to an alternate Platform Services Controller in a new site AND move its service registrations.

	cmsso-util repoint --repoint-psc "mgmt01psc02.demo.vmware.com”
	cmsso-util move-services (Prompted Option)

If using the prompts, simply provide the following to the utility when it asks:

	Domain:
	Username:
	Password:
	PSC Node:
	Old Site Name:
	New Site Name:

For example:

	Domain: vsphere.local
	Username: Administrator
	Password: VMware1!
	PSC Node: mgmt01psc02.demo.vmware.com
	Old Site Name: PaloAlto-CA
	New Site Name: LasVegas-NV
	
Of course, you can also pass the arguments to the move-services namespace:

	cmsso-util move-services --psc-node <FQDN-of-PSC-in-New-Site> --domain-name <SSO-DomainName> --username <SSO-Administrator> --passwd<SSO-Administrator-Password> --oldsite-name <Original-SSO-Site-Name> --newsite-name<New-SSO-Site-Name>

For example:

	cmsso-util move-services --psc-node mgmt01psc02.demo.vmware.com --domain-name vsphere.local --username Administrator --passwd VMware1! --oldsite-name PaloAlto-CA --newsite-name LasVega-NV

And there you have it. These new enhancements in vCenter Server 6.0 Update 1 now empower you to reconfigure an existing embedded deployment and transition it to an external deployment model. By using a simplified method when repointing a management node to another Platform Services Controller you are enabled to transition a deployment model architecture to an external deployment model and quickly recover from an external Platform Services Controller failure and/or distribute load to alternate nodes that are in the same SSO domain, both in the same site or across sites.
