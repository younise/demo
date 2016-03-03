---
layout:         post
title:          "Reconfiguring and Repointing Deployment Models in vCenter Server 6.0 Update 1"
subtitle:       ""
date:           2015-10-01 10:30:00
author:         "Ryan Johnson"
published:      true
categories:     [vSphere, vCenter, Platform Services Controller]
tags:           [vSphere, vCenter, Platform Services Controller]
---

In my last blog post, we discussed some of the new features and capabilities found in vCenter Server 6.0 such as how you can quickly and easily <a href="https://blogs.vmware.com/vsphere/2015/09/updating-vcenter-server-appliance-6-0-to-update-1.html" >update the vCenter Server Appliance 6.0 to Update 1</a>.

Now, it’s time to focus our attention on a two key enhancements found in vCenter Server 6.0 Update 1 - both the appliance and Windows-based form factors:
<ul>
	<li><strong>Reconfigure</strong> – You can now reconfigure an embedded deployment node to an external deployment model, also known as M<em>x</em>N<em><em><em><em><em>.</em></em></em></em></em><a href="http://blogs.vmware.com/vsphere/files/2015/09/reconfigure.png"><img class="alignnone size-full wp-image-18248" src="http://blogs.vmware.com/vsphere/files/2015/09/reconfigure.png" alt="reconfigure" width="746" height="418" /></a></li>
	<li><strong>Repoint </strong>– Simplified repointing of a management node in an external deployment model from one external Platform Services Controller to another external Platform Services Controller.</li>
	<li><a href="http://blogs.vmware.com/vsphere/files/2015/09/repoint.png"><img class="alignnone size-full wp-image-18249" src="http://blogs.vmware.com/vsphere/files/2015/09/repoint.png" alt="repoint" width="746" height="418" /></a></li>
</ul>
<em>Why is this important?</em>

The reconfiguration enhancement enables you to take an existing embedded deployment and transition it to a more optimal external deployment model – M<em>x</em>N.  There is also the simplified ability to repoint a management node to another Platform Services Controller which enables you to quickly recover from an external Platform Services Controller failure and to distribute load to alternate nodes that are in the same SSO domain.

Before moving forward with either the reconfigure or repoint operations, there is a key set of requirements that you need to meet.
<p style="padding-left: 30px;"><strong>Reconfiguration Requirements
</strong></p>

<ul>
	<li>The vCenter Server instance must be an <span style="font-style: normal !msorm;"><em>embedded </em></span>deployment model.</li>
	<li>The target Platform Services Controller must be a replication partner of the existing embedded Platform Services Controller in the <em>same SSO Domain.</em></li>
</ul>
<p style="padding-left: 30px;"><strong>Note</strong>: In vCenter Server 6.0 Update 1, we only support a single transition from embedded deployment to a external deployment (MxN) model for per SSO domain. See the Known Issues section of the <a href="http://pubs.vmware.com/Release_Notes/en/vsphere/60/vsphere-vcenter-server-60u1-release-notes.html#knownissues">Release Notes</a> for additional details.</p>
<p style="padding-left: 30px;"><strong>Repointing Requirements
</strong></p>

<ul>
	<li>The vCenter Server instance must be an <span style="font-style: normal !msorm;"><em>external</em></span> deployment model.</li>
	<li>The target Platform Services Controller must be a replication partner of the existing external Platform Services Controller <em>in the s</em><em>ame SSO Domain.</em></li>
</ul>
We’ve introduced an update to cmsso-util in vCenter Server 6.0 Update 1. This utility can be found in:
<ul>
	<li><strong>VCSA:</strong> /bin/cmsso-util</li>
	<li><strong>Windows</strong>: &lt;Drive&gt;:\Program Files\VMware\vCenter Server\bin\cmsso-util</li>
</ul>
This utility automates the entire process by passing the new required namespace <em>(</em>either <em>reconfigure </em>or<em> repoint) </em>and its arguments.  For example, with the VCSA, the namespaces would be:
<ul>
	<li><strong>VCSA:</strong> /bin/cmsso-util reconfigure</li>
	<li><strong>VCSA:</strong> /bin/cmsso-util repoint</li>
</ul>
Okay, so, how do we do it? Well, let’s see both namespace options in action in the vCenter Server Appliance (VCSA). Note that the cmsso-util namespaces and arguments are the same for a vCenter Server 6.0 Update 1 instance installed on Windows.

<!--more-->

<strong>Reconfigure an Embedded Deployment to an External Deployment</strong>

Recall that before you can reconfigure an embedded deployment to an external deployment you must first deploy an external Platform Services Controller that is a replication partner to the embedded Platform Services Controller. Thus, these instances belong to the same SSO Domain (<em>e.g. vsphere.local</em>).

In this example, I have an existing vCenter Server Appliance 6.0 Update 1 embedded deployment on the system <em>mgmt01vc01.demo.vmware.com.</em> Note that when logging into the SSH session the type is also indicated as <em>“vCenter Server with an embedded Platform Services Controller”.</em>

<a href="http://blogs.vmware.com/vsphere/files/2015/09/1-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18236" src="http://blogs.vmware.com/vsphere/files/2015/09/1-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="1-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

In order to reconfigure the deployment model on the appliance, we must first enable BASH and launch the shell in the appliance by running:
<p style="padding-left: 30px;">Command&gt; shell.set --enabled True</p>
<p style="padding-left: 30px;">Command&gt; shell</p>
<a href="http://blogs.vmware.com/vsphere/files/2015/09/2-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18237" src="http://blogs.vmware.com/vsphere/files/2015/09/2-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="2-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

Now we’re ready to reconfigure the appliance using the cmsso-util by passing the <em>reconfigure</em> namespace and its required arguments.
<p style="padding-left: 30px;">cmsso-util reconfigure --repoint-psc &lt;FQDN-of-External-PSC&gt; --username &lt;SSO-DomainAdmin&gt; --domain-name &lt;SSO-Domain&gt; --passwd &lt;SSO-DomainAdmin-Password&gt;</p>
If the external Platform Services Controller is not using the default HTTPs port (443) we’d specify the custom HTTPs port as an argument as follows.
<p style="padding-left: 30px;">cmsso-util reconfigure --repoint-psc &lt;FQDN-of-External-PSC&gt; --dc-port &lt;Port&gt; --username &lt;SSO-DomainAdmin&gt; --domain-name &lt;SSO-Domain&gt; --passwd &lt;SSO-DomainAdmin-Password&gt;</p>
<strong>Note:</strong> All required parameters must be provided as command line arguments.
<p style="padding-left: 30px;"> -h, --help: Help and Exit</p>
<p style="padding-left: 30px;">--repoint-psc : Fully Qualified Domain Name of Platform Services Controller</p>
<p style="padding-left: 30px;">--username : SSO Domain Administrator. Required for Reconfiguring an Embedded Deployment to External Deployment</p>
<p style="padding-left: 30px;">--passwd : SSO Domain Administrator Password. Required for Reconfiguring an Embedded Deployment to External Deployment.</p>
<p style="padding-left: 30px;">--domain-name : Required for Reconfiguring an Embedded Deployment to External Deployment.</p>
<p style="padding-left: 30px;">--dc-port: HTTPs Port of External Platform Services Controller - If Not Set, Defaults to 443</p>
Now, we’ll initialize the cmsso-util with the <em>reconfigure </em>namespace and arguments to repoint the system to our externally replicated Platform Services Controller – <em>mgmt01psc01.demo.vmware.com</em>. Then we’ll demote the embedded deployment to a management node.
<p style="padding-left: 30px;">cmsso-util reconfigure --repoint-psc "mgmt01psc01.demo.vmware.com" --username "Administrator" --domain-name "vsphere.local" --passwd "VMware1!"</p>
When the <em>reconfigure </em>namespace is used it automates the following tasks to transition an embedded deployment to an external deployment topology.
<ol>
	<li>Stops all non-core services</li>
	<li>Sets the dc-name option as the external Platform Services Controller</li>
	<li>Sets the dc-port if HTTPs is running on a custom port</li>
	<li>Changes the Deployment Type in the registry: <em>embedded to external</em></li>
	<li>Removes the local Platform Services Controller from federated SSO domain.</li>
	<li>Stop all services</li>
	<li>Changes the Deployment Node Type to start only services for a Management Node</li>
	<li>Update the service dependencies</li>
	<li>Starts the vmafdd required to join the external Platform Services Controller</li>
	<li>Disables services and registration for the embedded Platform Services Controller (Appliance)
Runs MSI uninstall scripts to remove and unregister services for the embedded Platform Services Controller (Windows)</li>
	<li>Restarts all services</li>
</ol>
Here we see the execution of the reconfiguration option followed by status messages for each stage of the automation process. Once completed, the instance is reconfigured and repointed to the external Platform Services Controller that we specified in the arguments – <em>mgmt01psc01.demo.vmware.com.</em>

<a href="http://blogs.vmware.com/vsphere/files/2015/09/3-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18238" src="http://blogs.vmware.com/vsphere/files/2015/09/3-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="3-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

Let’s take a moment to validate the reconfiguration from here within the SSH session by running:
<p style="padding-left: 30px;">/usr/lib/vmware-vmafd/bin/vmafd-cli get-ls-location –server-name localhost</p>
<a href="http://blogs.vmware.com/vsphere/files/2015/09/4-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18239" src="http://blogs.vmware.com/vsphere/files/2015/09/4-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="4-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

The results indicate that this vCenter Server management node has been repointed to our specified external Platform Services Controller. Alternatively, you can open the vSphere Web Client and search for the <strong>config.vpxd.sso.admin.uri</strong> in the Advanced Settings of the vCenter Server instance. Here we can see the same information that we returned in the <strong>vmafd-cli</strong> command.

<a href="http://blogs.vmware.com/vsphere/files/2015/09/5-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-large wp-image-18240" src="http://blogs.vmware.com/vsphere/files/2015/09/5-Reconfiguring-Repointing-Deployment-Models-6U1-1024x305.png" alt="5-Reconfiguring-Repointing-Deployment-Models-6U1" width="625" height="186" /></a>

Recall that during the automation process, cmsso-util changes the deployment type from embedded to external, removed the local Platform Services Controller from the federated SSO domain, and then changes the deployment node type to only start the services for the management node. We can quickly verify that this change is completed by logging into another SSH session to our VCSA – <em>mgmt01vc01.sddc.local. </em>Here we see that the Type is now shown as<em> “vCenter Server with an external Platform Services Controller.”</em>

<a href="http://blogs.vmware.com/vsphere/files/2015/09/6-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18241" src="http://blogs.vmware.com/vsphere/files/2015/09/6-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="6-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

Success! We’ve successfully reconfigured a vCenter Server 6.0 Update 1 deployment model with an embedded Platform Services Controller to an external deployment model.

<strong>Repoint an External Deployment to an Alternate Platform Services Controller in the Same Site (Intra-Site)</strong>

Now, what if we wanted to repoint this vCenter Server instance to use an alternate external Platform Services Controller in the <strong><em>same site</em></strong>? For example, to quickly recover from an external platform services controller failure and/or distribute load to alternate nodes that are in the same SSO domain.

While we could do this in vCenter Server 6.0 following <a href="http://kb.vmware.com/2113917" >KB 2113917</a>, we’ve made it easier in 6.0 Update 1 with a bit of automation. The repoint namespace just wraps the service-control and vmafd-cli command into a nice little package with some validation logic – so again, it is what we are already doing in KB 2113917, but automated for you.

Let’s return to the BASH shell in the appliance first and see how it’s done.

Simply repoint the appliance to an alternate Platform Services Controller in the same SSO domain using the cmsso-util and passing the <em>repoint </em>namespace with its required arguments.
<p style="padding-left: 30px;">cmsso-util repoint --repoint-psc &lt;FQDN-of-External-PSC&gt;</p>
If the external Platform Services Controller is not using the default HTTPs port (443) then specify the custom port HTTPs port:
<p style="padding-left: 30px;">cmsso-util repoint --repoint-psc &lt;FQDN-of-External-PSC&gt; --dc-port &lt;Port&gt;</p>
<strong>Note:</strong> All required parameters must provide as command line arguments.
<p style="padding-left: 30px;">-h, --help : Help and Exit</p>
<p style="padding-left: 30px;">--repoint-psc : Fully Qualified Domain Name of Platform Services Controller</p>
<p style="padding-left: 30px;">--dc-port : HTTPs Port of External Platform Services Controller - If Not Set, Defaults to 443</p>
Here we’ll initialize the cmsso-util with the <em>repoint </em>namespace and arguments to repoint the system to an alternate Platform Services Controller – <em>mgmt01psc02.demo.vmware.com – </em>which is an existing replication partner with our existing Platform Services Controller – <em>mgmt01psc01.demo.vmware.com</em> – in the <em>vsphere.local</em> SSO domain.
<p style="padding-left: 30px;">cmsso-util repoint --repoint-psc "mgmt01psc02.demo.vmware.com”</p>
<a href="http://blogs.vmware.com/vsphere/files/2015/09/7-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18242" src="http://blogs.vmware.com/vsphere/files/2015/09/7-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="7-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

When the <em>repoint </em>namespace is used it automates the following tasks to repoint an external deployment to another external platform services controller that is a replication partner.
<ol>
	<li>Sets the dc-name as the new external Platform Services Controller</li>
	<li>Sets the dc-port if HTTPs is running on a custom port</li>
	<li>Stops all services</li>
	<li>Starts all services</li>
</ol>
Below we see the execution of the repoint operation followed by status messages for each stage of the process. Once it’s completed, the instance is repointed to an alternate external Platform Services Controller that we specified in the arguments – <em>mgmt01psc02.demo.vmware.com.</em>

<a href="http://blogs.vmware.com/vsphere/files/2015/09/8-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18243" src="http://blogs.vmware.com/vsphere/files/2015/09/8-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="8-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

Once again, let’s validate the reconfiguration from here within the SSH session by running:
<p style="padding-left: 30px;">/usr/lib/vmware-vmafd/bin/vmafd-cli get-ls-location –server-name localhost</p>
<a href="http://blogs.vmware.com/vsphere/files/2015/09/9-Reconfiguring-Repointing-Deployment-Models-6U1.png"><img class="alignnone size-full wp-image-18244" src="http://blogs.vmware.com/vsphere/files/2015/09/9-Reconfiguring-Repointing-Deployment-Models-6U1.png" alt="9-Reconfiguring-Repointing-Deployment-Models-6U1" width="857" height="520" /></a>

The results <strong>vmafd-cli</strong> command indicate that this vCenter Server has been repointed to the alternate external Platform Services Controller.

<strong>Repoint an External Deployment to an Alternate Platform Services Controller in Another Site (Inter-Site)</strong>

The process I showed above was for repointing a vCenter Server to an an alternate external Platform Services Controller in the same same (aka. intra-site) but you can also move vCenter Server <strong><em>between SSO domain sites</em></strong> (aka. inter-site) in vCenter Server 6.0 Update 1.

When the vCenter Server is installed, it creates services registrations that it issues to start the vCenter Server services. These service registrations are written to a specific site of the Platform Services Controller that was used during install time. So. when you attempt to move the vCenter Server's affinity to a new Platform Services Controller in a new site, the vCenter Server will fail to start its services due to not having the proper service registrations in the new site.

Refer to <a href="http://kb.vmware.com/2131191" >KB 2131191</a> and download the <strong>cmsso-util</strong> in this article to facilitate the movement of the services registrations.

For example, if <em>mgmt01psc02.demo.vmware.com</em> was in a different site from my original Platform Services Controller, mgmt01psc01.demo.vmware.com, I would run the following commands on the vCenter Server to move to an alternate Platform Services Controller in a new site AND move its service registrations.
<p style="padding-left: 30px;">cmsso-util repoint --repoint-psc "mgmt01psc02.demo.vmware.com”</p>
<p style="padding-left: 30px;">cmsso-util move-services (Prompted Option)</p>
If using the prompts, simply provide the following to the utility when it asks:
<p style="padding-left: 30px;">Domain:
Username:
Password:
PSC Node:
Old Site Name:
New Site Name:</p>
For example:
<p style="padding-left: 30px;">Domain: vsphere.local
Username: Administrator
Password: VMware1!
PSC Node: mgmt01psc02.demo.vmware.com
Old Site Name: PaloAlto-CA
New Site Name: LasVegas-NV</p>
Of course, you can also pass the arguments to the move-services namespace:
<p style="padding-left: 30px;">cmsso-util move-services --psc-node &lt;FQDN-of-PSC-in-New-Site&gt; --domain-name &lt;SSO-DomainName&gt; --username &lt;SSO-Administrator&gt; --passwd&lt;SSO-Administrator-Password&gt; --oldsite-name &lt;Original-SSO-Site-Name&gt; --newsite-name&lt;New-SSO-Site-Name&gt;</p>
For example:
<p style="padding-left: 30px;">cmsso-util move-services --psc-node mgmt01psc02.demo.vmware.com --domain-name vsphere.local --username Administrator --passwd VMware1! --oldsite-name PaloAlto-CA --newsite-name LasVega-NV</p>
And there you have it. These new enhancements in vCenter Server 6.0 Update 1 now empower you to reconfigure an existing embedded deployment and transition it to an external deployment model. By using a simplified method when repointing a management node to another Platform Services Controller you are enabled to transition a deployment model architecture to an external deployment model and quickly recover from an external Platform Services Controller failure and/or distribute load to alternate nodes that are in the same SSO domain, both in the same site or across sites.

&nbsp;
