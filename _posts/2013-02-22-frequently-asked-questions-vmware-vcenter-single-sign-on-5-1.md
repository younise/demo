---
layout:     post
title:      "Frequently Asked Questions: VMware vCenter Single Sign On 5.1"
subtitle:   ""
date:       2013-02-22 12:00:00
author:     "Ryan Johnson"
header-img: "img/post-bg-06.jpg"
---

I've been working with a number of customers that have been planning their upgrades to VMware vSphere 5.1. Along they way many of them have had questions regarding vCenter Single Sign On.

Below are some of the frequently asked questions that I have received. Perhaps these will help you along your path to 5.1.

Q: Is vCenter Single Sign On a requirement in VMware vSphere 5.1?
A: Yes, vCenter Server, vCenter Inventory Service, vCenter Orchestrator, vCloud Director and vSphere Data Protection and the vSphere Web Client all use vCenter Single Sign On (SSO.)

Q:  What Active Directory rights are needed for SSO?
A: The Local System account that runs the auto discover and LocalMachine account need read only access and ability to review user accounts and their properties (default domain member privileges) in Active Directory.

Q: What are the options to view all vCenter Servers in a single view?
A: Linked Mode or shared central SSO but not recommended for remote vCenter Servers.

Q: What does the reference “Small Deployments” mean?
A: There is no definitive; however, but it is typically less than 25 hosts/250 VMs.

Q: Can VMware vCenter Server, Single Sign On and Inventory Service be deployed on a virtual machine to manage up to 1,000 Hosts/10,000 VMs or is a physical servers recommended?
A: Yes, installation on virtual machines is recommended. In fact, this is the preferred practice.

Q: What is the Maximum ESXi/VM supported configuration with vCenter Server components – SSO, Inventory and vCenter services – on a single physical server?
A: With relevant Memory/CPU sizing, 1000 Hosts/ 10,000 VM’s.

Q: While researching the requirements for the SSO service I’ve read that it will run on a single processor VM. This would allow me to use FT. Is this best practice or are there any caveats in doing this?
A: If a single standalone SSO instance is required then yes, the SSO requirements could be reduced to 1vCPU and 2GB RAM with FT enabled. This is supported but would not be a best practice configuration.

Q: Can the SSO service run on a Windows 2008 R2 domain controller?
A: Yes, but it is inadvisable.

Q: How many vCenter Servers can be utilize a single SSO instance?
A: 10 were tested but with additional compute resources the number can be greater.

Q: Is there a way to reconfigure an existing wildcard certificate (DN or something else) using OpenSSL so that it can be used for multiple services on the same vCenter Server?
A: No.

Q: If I have to re-install SSO what happens to my linkage with vCenter Server instance? Do I have to re-install vCenter Server to for it to link up with new SSO??
A: <a href="http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&amp;cmd=displayKC&amp;externalId=2033620">Repointing and re-registering VMware vCenter Server 5.1.x and components</a>.

Q: What information is stored in the SSO database?
A: Identity source configuration, users and group membership, password policies for SSO users.

Q: If an SSO server was located in the US, could overseas users authenticate to it without performance issues?
A: Remote SSO instances are not recommended as the dependency is on the WAN link that could prevent management of remote vCenter Server and components.

Q: How many base-level databases are needed with VMware vSphere 5.1 and major components?
A: 3: SSO, vCenter and Update Manager.

Q: What are the options for ODBC connection to server?
A: TCP or JDBC.

Q: Has the ODBC connection to SQL Server changed with SSO?
A: No, ODBC is still required.

Q: What is the Inventory Server db format?
A: It is an xDB (XML file based) database.

Q: Is it a best practice to run both SSO and vCenter Server databases on the same SQL server?
A: The SSO database is very lightweight and running within the same database server is recommended. Note that the SSO database is a separate database from the vCenter Server database.

Q: Perhaps I missed it, but in the most common environments, is best practice to keep SSO database and vCenter database as the same database?
A: Not the same database, they are separate databases, but they can reside on the same server.

Q: Explain the RSA_DATA and RSA_INDEX table space and the things needed to be done?
A: These are the two DB tables within the database that are setup with scripts. Prior to installing SSO, you need to create an SSO database. There’s a tablespace sql setup script that sets up the database with the index and the data part of the main database, and there’s another one that sets up the users as well. Note that the names RSA_DATA and RSA_INDEX cannot change.

Q: What is the role of the admin@system‐domain?
A: The admin@system‐domain is kind of the forced SSO admin that the installation creates for you. After that, you can create or add other Active Directory or SSO users as the SSO administrator but this is kind of bootstrapping the SSO process. 

Q: I have forgotten the admin@System-Domain password, and the command line didn’t help. I decided to re-install SSO. How do I re-link SSO with already installed Windows-based vCenter Server instance. I have seen that Linux vCenter Server Appliance has an option re-link to SSO.
A: Repointing and re-registering VMware vCenter Server 5.1.x and components.

Q: Is there a way to reset the admin@system-Domain password without re-install of SSO?
A: Yes, but only if the current password is known.

Q: SSO passwords expire after 1 year without notice. What does this effectively mean? If there is only one SSO admin user, does this mean you will be locked out after 1 year without further notice in the default setup?

"The default Single Sign On password policy specifies that passwords expire after one year. The vSphere Web Client does not provide a warning when a password is about to expire. If the administrator password for the Single Sign On system expires and you are unable to log in to the vSphere Web Client, a user with Single Sign On administrator privileges must reset it."

A: Yes, please refer to KB 2035864. An administrator can still change password with the provided tool in the documentation but still there isn't a notification in advance.

Q: What features are lost if SSO goes down?
A: There will be no access to either the vCenter Server via the vSphere Web Client or vSphere Client. All ESXi hosts are unaffected, as they do not integrate with SSO.

Q: Are VMs affected if SSO service goes down?
A: No, ESXi is unaffected, as ESXi hosts do not integrate with SSO.

Q: What are the recovery options with physical server running vCenter Server components – SSO, Inventory and vCenter services?
A: Use VMware vCenter Server Heartbeat for physical server recovery.

Q: If SSO is in a multi-site configuration is there a single point of failure per-site and if so, how can it be alleviated?
A: Yes, there is still a single point of failure. This can be addressed by using HA, Heartbeat or a load balancer. When in multi-site configuration SSO doesn’t provide a failover scenario and therefore you will need to decide the high availability requirements per-site. 

Q: If vCenter Heartbeat is used for HA of SSO, is SSO required to be on the same server as vCenter Server?
A: Not required, but recommended.

Q: For the "one pane of glass", is both multi-site and linked mode required, or just linked mode?
A: Both. For example, vCenter1 needs to talk to vCenter2, and therefore need to be in the same security domain for linked mode to work.

Q: I am setting up 2 SSO nodes in HA mode with a load balancer. The Administration function of SSO is only available when I log in to the Primary node. Is this expected behavior? If it is expected, should I expect the Administration function to failover to the Secondary node if the primary goes down?
A: SSO Administration isn’t an everyday task and by design will be unavailable. It is possible to promote a HA backup node to a primary re‐enabling the administration service.

Q: When behind a load balancer, are both SSO servers functional - load‐balanced and highly available?
A: No, the load balancer for SSO is purely a failover aspect. They do share the same DB, which is external to the SSO nodes, but it’s a failover configuration of the load balancer. 

Q: If I have already installed Site A in multi‐site mode SSO, and I don't want the "one pane of glass", could I install site B in "simple install" mode?
A: Yes, as long as you don't need multi-mode. 

Q: Is there a procedure upgrade to update from a standalone SSO Mode to Cluster mode?
A: When you deploy a simple install or go through the main installs, the options you get is a basic configuration, which is basically a standalone, which supports local users. But there is no way to merge or migrate this to SSO HA as the environment grows or requirements change, or you decide to add a multi‐site configuration. You should always install the first SSO as a Primary, you can then leave it as a single node configuration. You will have the option at a later date to add a single HA backup node to that primary node for putting behind a load-‐balancer and providing failover. There is an option where you could, if you deployed the wrong version of SSO and set up the environment, or you inherited an environment, you could actually deploy a fresh SSO instance and then repoint all of the services (Inventory service, vCenter, Web client, etc.) and all the applications that use SSO, if any, to the newly installed SSO instance. 

Q: Is there a way to replicate data between multi-site SSO instances?
A: Yes, refer to SSO replication documentation.

Q: Does API interaction change with SSO?
A: No, API functionality remains the same. 

Q: Do 3rd party applications offer SSO functionality today?
A: No, 3rd party applications do not use SSO but web server plugins, when available, will offer central management to 3rd party solutions.

Additional Resources

Access Additional VMware vCenter Single Sign On Resources
<a href="http://blogs.vmware.com/kb/tag/sso">blogs.vmware.com/kb/tag/sso</a>

Implementing CA signed SSL certificates with VMware vSphere 5.1
<a href="http://kb.vmware.com/kb/2034833">kb.vmware.com/kb/2034833</a>

Troubleshooting VMware vCenter Single Sign On Issues
<a href="http://kb.vmware.com/kb/2033137">kb.vmware.com/kb/2033137</a>

Repointing/Re-registering VMware vCenter Server 5.1 Components
<a href="http://kb.vmware.com/kb/2033620">kb.vmware.com/kb/2033620</a>
