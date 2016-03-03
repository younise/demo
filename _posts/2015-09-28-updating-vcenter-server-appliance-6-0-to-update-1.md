---
layout:         post
title:          "Updating vCenter Server Appliance 6.0 to Update 1"
subtitle:       ""
date:           2015-10-28 10:30:00
author:         "Ryan Johnson"
published:      true
categories:     [vSphere, vCenter, Platform Services Controller]
tags:           [vSphere, vCenter, Platform Services Controller]
---

Earlier this month, we released vSphere 6.0 Update 1. In this update we introduced some awesome new features for vCenter Server.

Let’s take a look at some of these just below:

<ul>
	<li><strong>Installation and Upgrade using HTML 5 Installer for VCSA</strong>: The following installation and upgrade scenarios are now supported for vCenter Server Appliance using its HTML 5 installer:
<ol>
	<li>An installation using HTML 5 installer with a vCenter Server target is supported.</li>
	<li>An upgrade using HTML 5 installer with a vCenter Server target <span style="text-decoration: underline;">is not</span> supported.</li>
	<li>An upgrade using command line with a vCenter Server target is supported.</li>
</ol>
</li>
</ul>
<ul>
	<li><strong>Backup and Restore with External Platform Services Controller</strong>: vCenter Server deployments with an external PSC (also called MxN) have support for backup and restoration.</li>
</ul>
<ul>
	<li><strong>Appliance Management User Interface</strong>: An all new HTML5-based management interface for the appliance at <em><em>https://&lt;FQDN-or-IP&gt;:5480. </em></em></li>
</ul>
<ul>
	<li><span style="line-height: 1.71429; font-size: 1rem;"><span style="line-height: 1.71429; font-size: 1rem;"><strong>Platform Services Controller Interface</strong>: An all new HTML5-based management interface for the Platform Services Controller at <em>https://&lt;FQDN-or-IP&gt;/psc/.  
	</li>
</ul>
<ul>
	<li><strong>Interoperability</strong>: Virtual SAN and SMP-FT are interoperable.</li>
</ul>
<ul>
	<li><strong>Hybrid Cloud Manager</strong>: Hybrid Cloud Manager has been updated for vSphere, and can be accessed directly from the vSphere Web Client.</li>
</ul>
<ul>
	<li><strong>VCSA Authentication for Active Directory</strong>: VMware vCenter Server Virtual Appliance has been modified to only support AES256-CTS/AES128-CTS/RC4-HMAC encryption for Kerberos authentication between VCSA and Active Directory.</li>
</ul>
<ul>
	<li><strong>Support for SSLv3</strong>: Support for SSLv3 has been disabled by default.</li>
</ul>
<ul>
	<li><strong>Customer Experience Improvement Program</strong>: The <span style="text-decoration: underline;"><em>opt-in</em></span> Customer Experience Improvement Program (CEIP) provides VMware with information that enables VMware to improve the VMware products and services and to fix problems. When you choose to participate in CEIP, VMware will collect technical information listed below about your use of the VMware products and services in CEIP reports on a regular basis. This information does not personally identify you.</li>
</ul>
One additional feature that we introduced in vCenter Server 6.0 Update 1 is an in-place process for Updates in a major release (<em>e.g.</em> vCenter Server 6.0 to vCenter Server 6.0 Update 1) instead of the migration-based approach that was required in prior VCSA updates (<em>e.g.</em> vCenter Server 5.5 to vCenter Server 5.5 Update 1).

With these new capabilities -- and, of course, <a href="http://pubs.vmware.com/Release_Notes/en/vsphere/60/vsphere-vcenter-server-60u1-release-notes.html#resolvedissues">resolved issues</a> -- there's been a ton of interest in how to update the VCSA to 6.0 Update 1. So, let's get started and look at the process...

Before you begin the upgrade process, ensure you have a validated backup and snapshot of your VCSA 6.0 system.

Note that if you're using an external deployment model (MxN), that is, you deployed an external Platform Services Controller node separately from your vCenter Server (VCSA) node and wish to update to 6.0 Update 1, the process is <em><strong>exactly the same for both the PSC and the VCSA</strong></em>. Simply update the Platform Services Controller to 6.0 Update 1 <em><strong>first</strong></em> since it provides authentication services to the vCenter Server. Once the PSC is updated and back online you can move onto your VCSA and update it to 6.0 Update 1.
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/09/0-PSC-FIRST.png"><img class="alignnone size-full wp-image-18191" src="http://blogs.vmware.com/vsphere/files/2015/09/0-PSC-FIRST.png" alt="If Applicable, Start with External Platform Services Controller" width="857" height="542" /></a></p>
<p style="padding-left: 30px;"><em>​Review <a href="http://kb.vmware.com/kb/2109760" >KB 2109760 </a>for proper update and upgrade sequencing.</em></p>
Now, let's step through the process to update the VCSA 6.0 (or an external PSC 6.0) to Update 1.

<strong>Step 1</strong> - Visit the <a href="https://my.vmware.com/group/vmware/patch" >VMware Product Patches</a> section on My VMware and download the VCSA 6.0 Update 1 Full Patch<em> (VC-6.0.0U1-Appliance &gt;<b> </b>VMware-vCenter-Server-Appliance-6.0.0.10000-3018521-patch-FP.iso)​</em>.
<p style="padding-left: 30px;"><img class="alignnone size-full wp-image-18193" src="http://blogs.vmware.com/vsphere/files/2015/09/1-Download-VCSA-6-U1-FP.png" alt="Download vCenter Server Appliance 6.0 Update 1 Full Patch" width="997" height="485" /></p>
<strong>Step 2</strong> - Mount the VCSA 6.0 Update 1 Patch ISO to your VCSA 6.0 appliance using the vSphere Web Client or even the <a href="https://labs.vmware.com/flings/esxi-embedded-host-client" >ESXi Embedded Host Client</a> fling. Or if you rather, simply execute a quick PowerCLI script to mount the ISO
<p style="padding-left: 30px;">PowerCLI Example:</p>
<p style="padding-left: 30px;">$iso = “[mgt-ds-nfs] iso/VMware-vCenter-Server-Appliance-6.0.0.10000-3018521-patch-FP.iso”</p>
<p style="padding-left: 30px;">Get-CDDrive –vm “mgmt01vc01” | Set-CDDrive -IsoPath $iso –Connected $true</p>
<strong>Step 3</strong> - SSH into your VCSA 6.0 appliance to launch the default appliancesh interface.

<em>Note</em>: If you have disabled the appliancesh or are connected to the appliance DCUI, simply type "appliancesh" and login with the root credentials.
<p style="padding-left: 30px;"><img class="alignnone size-full wp-image-18183" src="http://blogs.vmware.com/vsphere/files/2015/09/00-Appliance-Shell.png" alt="SSH into VCSA and Launch Default Appliance Shell" width="857" height="542" /></p>
<strong>Step 4</strong> -

<em>Option A</em>: Run the following command to stage and install the patches from the attached VCSA 6.0 Update 1 Patch ISO immediately.
<p style="padding-left: 30px;">software-packages install --iso --acceptEulas</p>
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/09/3-Install-ISO-Accept.png"><img class="alignnone size-full wp-image-18185" src="http://blogs.vmware.com/vsphere/files/2015/09/3-Install-ISO-Accept.png" alt="Install 6.0 Update 1 Packages from ISO" width="857" height="543" /></a></p>
<em>Option B</em>: If you prefer to stage the update packages before performing the installation, run the following commands in succession:
<p style="padding-left: 30px;"><strong>Stage the Package from ISO</strong>: software-packages stage --iso  --acceptEulas</p>
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/09/4-Stage-ISO-Accept.png"><img class="alignnone size-full wp-image-18189" src="http://blogs.vmware.com/vsphere/files/2015/09/4-Stage-ISO-Accept.png" alt="Stage vCenter Server Appliance 6.0 Update 1 Packages from ISO" width="857" height="542" /></a></p>
<p style="padding-left: 30px;"><strong>Review the Staged Packages</strong>: software-packages list --staged</p>
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/09/5-List-Staged.png"><img class="alignnone size-full wp-image-18188" src="http://blogs.vmware.com/vsphere/files/2015/09/5-List-Staged.png" alt="List vCenter Server 6.0 Update 1 Staged Packages" width="857" height="542" /></a></p>
<p style="padding-left: 30px;"><strong>Install the Staged Packages</strong>: software-packages install --staged</p>
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/09/6-Install-Staged.png"><img class="alignnone size-full wp-image-18187" src="http://blogs.vmware.com/vsphere/files/2015/09/6-Install-Staged.png" alt="INstall vCenter Server Appliance 6.0 Update 1 Stages Packages" width="857" height="543" /></a></p>
If errors occur during the staging or installation of the patches, enable and launch the bash shell and review the /var/log/vmware/applmgmt/software-packages.log file for additional information.
<p style="padding-left: 30px;">shell.set --enabled True
shell
cd /var/log/vmware/applmgmt/
tail software-packaged.log –n 25</p>
<strong>Step 5</strong> - When the installation has completed, un-mount the VCSA 6.0 Update 1 Patch ISO from your VCSA 6.0 appliance using either the vSphere Web Client or PowerCLI.
<p style="padding-left: 30px;">PowerCLI Example:</p>
<p style="padding-left: 30px;">Get-CDDrive –vm “mgmt01vc01” | Set-CDDrive -NoMedia</p>
<strong>Step 6</strong> - Next, simply reboot your VCSA by running the following command:
<p style="padding-left: 30px;">​shutdown reboot -r "Updated to vCenter Server 6.0 Update 1"</p>
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/09/7-Reboot-Reason.png"><img class="alignnone size-full wp-image-18186" src="http://blogs.vmware.com/vsphere/files/2015/09/7-Reboot-Reason.png" alt="Post-Update Reboot" width="857" height="543" /></a></p>
<strong>Step 7</strong> - Provide some time for the VCSA to reboot and start its services. You can verify that the upgrade to vCenter Server Update 1 was successful by opening a browser and connecting to the new HTML5-based Appliance Management UI (Appliance MUI) at https://&lt;FQDN-or-IP&gt;:5480.
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/09/9-AMUI.png"><img class="alignnone size-large wp-image-18182" src="http://blogs.vmware.com/vsphere/files/2015/09/9-AMUI-1024x576.png" alt="vCenter Server 6.0 Update 1 Appliance Management User Interface" width="625" height="352" /></a></p>
<p style="padding-left: 30px;"><em>Check out <a href="https://blogs.vmware.com/vsphere/2015/09/web-based-management-for-the-vcsa-is-back.html" >Matthew Meyer's post on the all new Appliance MUI</a>, too!</em></p>
Once you've updated to vSphere 6.0 Update 1, you'll notice in the Appliance MUI that we've re-introduced patching capabilities. For future updates, you'll no longer need to update from the applaincesh. Instead you can use the HTML5-based UI to patch from an ISO or even better URL-based patching directly from the default VMware repository or your own repository.
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/09/8-Version-Check-Update.png"><img class="alignnone size-large wp-image-18184" src="http://blogs.vmware.com/vsphere/files/2015/09/8-Version-Check-Update-1024x576.png" alt="Check for Updates in Appliance MUI" width="625" height="352" /></a></p>
And there you have it, that's the process the update your VMware vCenter Server Appliance 6.0 to Update 1 to gain all the new feature and capabilities in this release.

<strong>Related Documentation:</strong>
<ul>
	<li><a href="http://kb.vmware.com/kb/2119924" >Update for VMware vCenter Server Appliance 6.0 Update 1</a> (2119924)</li>
	<li><a href="http://pubs.vmware.com/vsphere-60/index.jsp?topic=%2Fcom.vmware.vsphere.upgrade.doc%2FGUID-6751066A-5D4E-47AC-A6A4-5E90AEC63DAA.html" >Patching the vCenter Server Appliance</a></li>
	<li><a href="http://pubs.vmware.com/vsphere-60/topic/com.vmware.vsphere.upgrade.doc/GUID-8466F019-C57C-4344-9E15-8CFF74A6E4C2.html" >Stage Patches to vCenter Server Appliance</a></li>
	<li><a href="http://pubs.vmware.com/vsphere-60/index.jsp?topic=%2Fcom.vmware.vsphere.upgrade.doc%2FGUID-5FCA78EC-8637-43A4-8B28-24624E4D5EBA.html&amp;resultof=%22patch%22%20%22vCenter%22%20%22vcenter%22%20%22Server%22%20%22server%22%20%22Appliance%22%20%22applianc%22%20%E2%80%8B" >Install vCenter Server Appliance Patches</a></li>
</ul>
