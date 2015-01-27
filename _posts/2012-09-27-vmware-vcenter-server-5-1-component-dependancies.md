---
layout:     post
title:      "VMware vCenter Server 5.1 Component Dependancies"
subtitle:   ""
date:       2012-09-27 12:00:00
author:     "Ryan Johnson"
header-img: "img/post-bg-06.jpg"
---

A customer had a question earlier this week regarding the dependancies of all VMware vCenter components in a VMware vSphere 5.1 lab environment. Specifically, this customer had installed all of the components separately on individuals virtual machines and wanter to know the proper start-up order. Before I answer that's let's take a step back.

With the release of VMware vSphere 5.1 additional components were added for to the overall deployment of VMware vCenter Server 5.1. These are the vCenter Single Sign On, Inventory Service, and vCenter Server.

In fact, the <a href="http://pubs.vmware.com/vsphere-51/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-51-installation-setup-guide.pdf" target="_blank">VMware vSphere 5.1 Installation and Setup Guide</a> states that you must install these components in the order of.
<ol>
	<li>vCenter Single Sign On</li>
	<li>vCenter Inventory Service</li>
	<li>vCenter Server</li>
</ol>
However, the documentation does not explicitly state is the proper start-up order for each of the components. The simple answer is that the start-up order is the same as the installation order shown above. vCenter Single Sign On should be started first as it provides authentication. Even if you authentication using a local account the authentication process still goes through the SSO. Next, the vCenter Inventory Service should be started followed by the vCenter Server.

If you deploy all three (3) on Microsoft Windows Server 2008, the installation sets the VMware vCenter and WebAccess services as a delayed start and they will not attempt to start for a few minutes to give other services a chance to start. No service start-up dependancies are present - only the delay. This is likely based on the capability to bounce services independent of one another.

Now, back to that customer lab environment where they have deployed each service on individual virtual machines. For this senario recommend that this is done in a<strong> vApp</strong>.
<ul>
	<li>From the VMware vSphere Web Client: create a new vApp and allocate associated resources.
<ul>
	<li>Right-click any inventory object that is a valid parent of a vApp and select <strong>Inventory</strong> &gt; <strong>New vApp</strong>.</li>
	<li>Valid parents of a vApp include clusters, resource pools, hosts, or other vApps.</li>
	<li>In the vApp Name text box, type a name for the vApp.</li>
	<li>Select the datacenter or folder in which to deploy the vApp.</li>
	<li>Click <strong>Next</strong>.</li>
</ul>
</li>
</ul>
<ul>
	<li>Populate the vApp with the appropriate virtual machine objects - SSO, IS and VC instances.
<ul>
	<li>Display the object in the inventory.</li>
	<li>Click and drag the virtual machine objects for SSO, IS and VC to the target object.</li>
</ul>
</li>
</ul>
<ul>
	<li>Configure the vApp Startup and Shutdown options.
<ul>
	<li>Right-click the vApp in the inventory and select <strong>Configuration</strong> &gt; <strong>Edit Settings</strong>.</li>
	<li>Click the <strong>Start Order</strong> triangle to expand the start order options - SSO, then IS, then VC.</li>
	<li>Select a virtual machine and click the up or down arrow to move the virtual machine in the startup order. The reverse order will be used for shutdown.</li>
	<li>For each virtual machine, select the startup action for the virtual machine.</li>
	<li>Set the delay for the startup action of each virtual machine so that each starts after the previous.
<ul>
	<li>Enter a time delay in seconds for the startup action. (eg. 120)</li>
	<li>Select <strong>VMware Tools are ready to perform the startup action when VMware Tools has started</strong>.</li>
</ul>
</li>
	<li>For each virtual machine, select the shutdown action for the virtual machine.</li>
	<li>Enter a time delay in seconds for the shutdown action. (eg. 120)</li>
	<li>Click <strong>OK</strong>.</li>
</ul>
</li>
</ul>
If using a standalone host, perhaps in your home lab, you can get the same results by setting in Virtual Machine Startup/Shutdown options in the vSphere Client.
<ul>
	<li>In the vSphere Client inventory, select the host where the virtual machine is located and click the <strong>Configuration</strong> tab.</li>
	<li>Under <strong>Software</strong>, click <strong>Virtual Machine Startup/Shutdown</strong> and click <strong>Properties</strong>.</li>
	<li>The Virtual Machine Startup and Shutdown dialog box opens.</li>
	<li>Select <strong>Allow virtual machines to start and stop automatically with the system</strong>.</li>
	<li>Configure the startup and shutdown behavior.
<ul>
	<li>Click the <strong>Start Order</strong> triangle to expand the start order options - SSO, then IS, then VC.</li>
	<li>Select a virtual machine and click the up or down arrow to move the virtual machine in the startup order. The reverse order will be used for shutdown.</li>
	<li>For each virtual machine, select the startup action for the virtual machine.</li>
	<li>Set the delay for the startup action of each virtual machine so that each starts after the previous.
<ul>
	<li>Enter a time delay in seconds for the startup action. (eg. 120)</li>
	<li>Select <strong>VMware Tools are ready to perform the startup action when VMware Tools has started</strong>.</li>
</ul>
</li>
	<li>For each virtual machine, select the shutdown action for the virtual machine.</li>
	<li>Enter a time delay in seconds for the shutdown action. (eg. 120)</li>
	<li>Click <strong>OK</strong>.</li>
</ul>
</li>
</ul>