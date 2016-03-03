---
layout:         post
title:          "Introducing the Platform Services Controller Interface in vCenter Server 6.0 Update 1"
subtitle:       ""
date:           2015-09-21 10:30:00
author:         "Ryan Johnson"
published:      true
categories:     [vSphere, vCenter, Platform Services Controller]
tags:           [vSphere, vCenter, Platform Services Controller]
---

Back in March, we introduced vSphere 6.0 and the new architecture for vCenter Server. With this new architecture you learned about the Platform Services Controller, a new functional component of vCenter that moves beyond just Single-Sign On to include additional platform services such as:

<ul>
	<li class="p1">Licensing Service</li>
	<li class="p1">Certificate Authority (VMCA)</li>
	<li class="p1">Certificate Store (VECS)</li>
	<li class="p1">Lookup Service for Component Registrations</li>
</ul>

In the 6.0 release, administration and configuration of the Platform Service Controller was primarily performed by an SSH session, the vSphere Web Client and selecting the node in System Configuration, or through the Direct Console User Interface of the appliance.

In vCenter Server 6.0 Update 1, we're excited to introduce the next stage of the administration with the <strong>Platform Services Controller Interface</strong>, a fully HTML5-based interface to administer and configure many of the services that run on the PSC.

Using the Platform Services Controller Interface you can perform tasks, such as:

<ul>
	<li class="p1">Adding and Editing Users and Groups for Single Sign-On</li>
	<li class="p1">Adding Single Sign-On Identity Sources</li>
	<li class="p1">Configuring Single Sign-On Policies <i>(e.g Password Policies)</i></li>
	<li class="p1">Adding Certificate Stores</li>
	<li class="p1">Adding and Revoking Certificates</li>
</ul>

<p class="p1">Here is a quick overview of the Platform Services Controller User Interface available in vCenter Server 6.0 Update 1.</p>

<p class="p1"><b>Login</b></p>
<p class="p1">Connect to <b>https://&lt;fqdn-or-ip&gt;/psc/</b> and login to the HTML5-based Platform Services Controller Interface with a Single-Sign On administrative user <em>(e.g. a</em><i>dministrator@vsphere.local.)</i></p>
<p class="p1">Once you've logged into the the Platform Services Controller Interface, you'll be directed to the <strong>Home</strong> section.</p>
<p class="p1"><img class="alignnone wp-image-18140 size-large" src="http://blogs.vmware.com/vsphere/files/2015/09/2015-09-19_22-18-17-1024x576.png" alt="" width="625" height="352" /></p>
<p class="p1">Here you are presented with sections for Single Sign-On, Certificates and Appliance Settings.</p>
<p class="p1">Let's take a look at each of these below.</p>
<p class="p1"><strong>Single Sign-On</strong></p>
<p class="p1">Recall that beginning with vSphere 6.0, vCenter Single Sign-On is part of the Platform Services Controller. The Platform Services Controller contains the shared services that support vCenter Server and vCenter Server components. vCenter Single Sign-On is essentially an authentication broker and security token exchange infrastructure. When a user or a solution user authenticates successfully to vCenter Single Sign-On, that user receives SAML token. Thereafter, the user can use the SAML token to authenticate to vCenter services and perform any actions that user has privileges.</p>
<p class="p1">In vSphere 6.0, the vCenter Server management group of services needed to be deployed in order to administer and configure Single Sign-On through the vSphere Web Client. In vCenter Server 6.0 Update 1 the Platform Services Controller Interface provides you direct access to the configuration. This can be useful during initial deployment configuration or even troubleshooting exercises.</p>
<p class="p1"><b>Single Sign-On &gt; </b>Users &amp; Groups</p>
<p class="p1">Manage users, groups and registered solution users in the Single Sign-On domain <em>(e.g. vsphere.local)</em> by directly connecting to the Platform Services Controller.</p>
<p class="p1"><a href="http://blogs.vmware.com/vsphere/files/2015/09/2-PSCUI-SSO-UG.png"><img class="alignnone size-large wp-image-18128" src="http://blogs.vmware.com/vsphere/files/2015/09/2-PSCUI-SSO-UG-1024x576.png" alt="2-PSCUI-SSO-UG" width="625" height="352" /></a></p>
<p class="p1"><b>Single Sign-On &gt; </b>Configuration</p>
<p class="p1">Manage policies, such as, rules and restrictions for passwords (complexity requirements and lockout) plus the Secure Token Service clock tolerance, renewal, and re-authentication, etc.</p>
<p class="p1"><a href="http://blogs.vmware.com/vsphere/files/2015/09/3-PSCUI-SSO-Config-Policies.png"><img class="alignnone size-large wp-image-18129" src="http://blogs.vmware.com/vsphere/files/2015/09/3-PSCUI-SSO-Config-Policies-1024x576.png" alt="3-PSCUI-SSO-Config-Policies" width="625" height="352" /></a></p>
<p class="p1">Add an identity sources for user authentication -- these sources can be a native Active Directory (Integrated Windows Authentication) domain or an OpenLDAP directory service.</p>
<p class="p1"><a href="http://blogs.vmware.com/vsphere/files/2015/09/4-PSCUI-SSO-Config-Identity.png"><img class="alignnone size-large wp-image-18130" src="http://blogs.vmware.com/vsphere/files/2015/09/4-PSCUI-SSO-Config-Identity-1024x576.png" alt="4-PSCUI-SSO-Config-Identity" width="625" height="352" /></a></p>
<p class="p1">Manage the certificates for Identity Sources as well as the Secure Token Service Signing certificates.</p>
<p class="p1"><a href="http://blogs.vmware.com/vsphere/files/2015/09/5-PSCUI-SSO-Config-Certs.png"><img class="alignnone size-large wp-image-18131" src="http://blogs.vmware.com/vsphere/files/2015/09/5-PSCUI-SSO-Config-Certs-1024x576.png" alt="5-PSCUI-SSO-Config-Certs" width="625" height="352" /></a></p>
<p class="p1"><b>Certificates &gt; </b>Certificate Store</p>
<p class="p1">Add, delete and show details for certificates in VECS (vSphere Endpoint Certificate Store) Certificate Stores.</p>
<p class="p1"><a href="http://blogs.vmware.com/vsphere/files/2015/09/6-PSCUI-Certificate-Store.png"><img class="alignnone size-large wp-image-18133" src="http://blogs.vmware.com/vsphere/files/2015/09/6-PSCUI-Certificate-Store-1024x576.png" alt="6-PSCUI-Certificate-Store" width="625" height="352" /></a></p>
<p class="p1"><b>Certificates &gt; </b>Certificate Authority</p>
<p class="p3"><span class="s1">In vCenter Server 6.0, the VMware Certificate Authority (VMCA) provides </span>each vCenter Server, Solution User and ESXi hosts with certificates that are signed by VMCA. These certificates can be trusted through to a VMCA signed root certificate (default mode) or through to an Enterprise / Commercial CA (subordinate mode). Management was performed using the Certificate Manager python program or using the vecs-cli.</p>
<p class="p3">Now, in vCenter Server 6.0 Update 1 you have the option to manage portions of the VMware Certificate Authority using the Platform Services Controller Interface, such as, viewing active, revoked and expired certificates as well as replacing the root signing certificate for the VMCA (equivalent to Option 2 in the Certificate Manager) .</p>
<p class="p3"><a href="http://blogs.vmware.com/vsphere/files/2015/09/7-PSCUI-Certificate-Authority.png"><img class="alignnone size-large wp-image-18134" src="http://blogs.vmware.com/vsphere/files/2015/09/7-PSCUI-Certificate-Authority-1024x576.png" alt="7-PSCUI-Certificate-Authority" width="625" height="352" /></a></p>
<p class="p3"><a href="http://blogs.vmware.com/vsphere/files/2015/09/8-PSCUI-Certificate-Authority-Root-Replace.png"><img class="alignnone size-large wp-image-18135" src="http://blogs.vmware.com/vsphere/files/2015/09/8-PSCUI-Certificate-Authority-Root-Replace-1024x576.png" alt="8-PSCUI-Certificate-Authority-Root-Replace" width="625" height="352" /></a></p>
<p class="p1"><b>Certificates &gt; </b>Certificate Management</p>
<p class="p1">You can also renew and replace both Machine SSL Certificates and Solution User Certificates in from within the Platform Services Controller Interface (<span class="s2">equivalent to the options to replace Machine SSL Certificates and Solution User Certificates in Certificate Manager)</span>.</p>
<p class="p1"><a href="http://blogs.vmware.com/vsphere/files/2015/09/9-PSCUI-Certificate-Management-Solution-Users.png"><img class="alignnone size-large wp-image-18136" src="http://blogs.vmware.com/vsphere/files/2015/09/9-PSCUI-Certificate-Management-Solution-Users-1024x576.png" alt="9-PSCUI-Certificate-Management-Solution-Users" width="625" height="352" /></a></p>
<p class="p1"><a href="http://blogs.vmware.com/vsphere/files/2015/09/10-PSCUI-Certificate-Management-Solution-Users-Replace.png"><img class="alignnone size-large wp-image-18137" src="http://blogs.vmware.com/vsphere/files/2015/09/10-PSCUI-Certificate-Management-Solution-Users-Replace-1024x576.png" alt="10-PSCUI-Certificate-Management-Solution-Users-Replace" width="625" height="352" /></a></p>
<p class="p1"><b>Appliance Settings </b>&gt; Appliance Settings</p>
<p class="p1">If you're running the vCenter Server Appliance you can manage its settings, such as, access, networking, time synchronization, updates, plus the root account password and expiration from the Appliance Management User Interface that returned (previously, called the VAMI) in vCenter Server 6.0 Update 1.</p>
<p class="p1"><a href="http://blogs.vmware.com/vsphere/files/2015/09/11-PSCUI-Appliance-Settings.png"><img class="alignnone size-large wp-image-18138" src="http://blogs.vmware.com/vsphere/files/2015/09/11-PSCUI-Appliance-Settings-1024x576.png" alt="11-PSCUI-Appliance-Settings" width="625" height="352" /></a></p>
<p class="p1">Learn more about this return of the Appliance Management UI in vCenter Server 6.0 Update 1 from <a href="https://blogs.vmware.com/vsphere/2015/09/web-based-management-for-the-vcsa-is-back.html" target="_blank">Matt Meyer's blog post</a>.</p>
<p class="p1"><b>Appliance Settings </b>&gt; Manage</p>
<p class="p1">In this section you can join the Platform Services Controller to your Active Directory domain, similar to how you can do so in the vSphere Web Client's System Configuration &gt; Node option. This is just way simpler.</p>
<p class="p1"><a href="http://blogs.vmware.com/vsphere/files/2015/09/12-PSCUI-Appliance-Settings-Manage.png"><img class="alignnone size-large wp-image-18139" src="http://blogs.vmware.com/vsphere/files/2015/09/12-PSCUI-Appliance-Settings-Manage-1024x576.png" alt="12-PSCUI-Appliance-Settings-Manage" width="625" height="352" /></a></p>
<p class="p1">And there you have it. The all new Platform Services Controller Interface in vCenter Server 6.0 Update 1. A slick new, HTML5-driven inteface tto administer and configure many of the services that run on the PSC with ease.</p>
<p class="p1">You can download vSphere 6.0 Update 1 from the <a href="https://my.vmware.com/web/vmware/login" target="_blank">Product Download Center</a>.</p>
