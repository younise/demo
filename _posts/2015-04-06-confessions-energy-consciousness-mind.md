---
layout:         post
title:          "Confessions of an Energy Consciousness Mind"
subtitle:       ""
date:           2015-04-06 10:30:00
author:         "Ryan Johnson"
published:      true
categories:     [vSphere]
tags:           [vSphere,]
---

]I have a confession. 

My data center kit has been using too much energy.

<span style="line-height: 1.714285714; font-size: 1rem;">Having kit available at my disposable is great, but I have been wasting this resource when it's not required by my workloads. And if there's one thing I try to be conscious of, it's energy consumption. Just ask my kids who I chase from room to room turning off lights, screens, and the lot when they aren't using them.

But why not in the data center? Did you know that hosts typically use 60%+ of their peak power when idle?

Until recently, I had overlooked configuring my kit to use the vSphere Distributed Power Management ("DPM") feature to manage power consumption and save energy.

With the release of vSphere 6.0 it's a good time to review and take deeper look into the capabilities and benefits of this feature.
<h2>What is VMware vSphere Distributed Power Management?</h2>
VMware vSphere Distributed Power Management is a feature included with vSphere Enterprise and Enterprise Plus editions that dynamically optimizes cluster power consumption based on workload demands. When host CPU and memory resources are lightly used, DPM recommends the evacuation of workloads and powers-off of ESXi hosts. When CPU or memory resource utilization increases for workloads or additional host resources are required, DPM powers on a required set of hosts back online to meet the demand of HA or other workload-specific contraints by executing vSphere Distributed Resource Scheduler ("DRS") in a "what-if" mode. DRS will ensure host power recommendations are consistent with the cluster constraints and resources being managed by the cluster.

Beneath the covers there are key challenges that DPM addresses to enable effective power-savings capabilities:
<ul>
	<li>Accurately Assessing Workload Resource Demand</li>
	<li>Avoiding Frequent Power-on/Power-off of Host and Excessive vMotion Operations</li>
	<li>Rapid Response to Workload Demand and Performance Requirements</li>
	<li>Appropriate Host Selection for Power-on/Power-Off within Tolerable Host Utilization Ratios</li>
	<li>Intelligent Redistribution of Workloads After Host Power-on/Power-Off</li>
</ul>
Once DPM determines the number of hosts needed to satisfy all workloads and relevant constraints, and DRS has distributed virtual machines across hosts to maintain resource allocation constraints and objectives, each powered-on host is free to handle its power management
<h2>Hosts Entering and Exiting Standby</h2>
When a host is powered-off by DPM, they are marked in vCenter Server in "standby" mode indicating that they are powered-off but available to be powered-on when required. The host icon is updated with a crescent moon overlay symbolizing a "sleeping" state for the host.
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/04/DPM-THATSNOMOON.jpg"><img class="alignnone size-full wp-image-16998" alt="" src="http://blogs.vmware.com/vsphere/files/2015/04/DPM-THATSNOMOON.jpg" width="407" height="271" /></a></p>
DPM can awaken hosts from the standby mode using one of three power management options:
<ol>
<ol>
<ol>
	<li>Intelligent Platform Management Interface (IPMI)</li>
	<li>Hewlett Packard Integrated Lights-Out (iLO), or</li>
	<li>Wake-On-LAN (WOL).</li>
</ol>
</ol>
</ol>
Each protocol requires its own hardware support and configuration. If a host does not support any of these protocols it cannot be put into standby by DPM. If a host supports multiple protocols, they are used in the following order: IPMI, iLO, WOL. This article is focused on the use of the first two.

IPMI is a hardware-level specification and Hewlett-Packard iLO is an embedded server management technology. Each of them describes and provides an interface for remotely monitoring and controlling computers. Both require a hardware Baseboard Management Controller ("BMC") to provide a gateway for accessing hardware control functions, and allow the interface to be accessed from a remote system using serial or LAN connections. The BMC is powered-on even when the host itself is powered-off. And, if properly enabled, the BMC can respond to remote power-on commands.

To use IPMI or iLO and with vSphere Distributed Power Management, you must properly configure the host BMC. These steps may vary according to vendor and model. Now, with IPMI, you must also ensure that the BMC LAN channel is configured to be always available and to allow operator-privileged commands. Keep in mind that some system IPMI require that enabling "IPMI over LAN" in the BIOS and the specification an IPMI account.

DPM using only IPMI supports MD5- and plaintext-based authentication. MD2-based authentication is not supported. vCenter Server uses MD5 if a host's BMC reports that it is supported and enabled for the operator role. Otherwise, plaintext-based authentication is used if the BMC reports it is supported and enabled. If neither MD5 nor plaintext-based authentication is enabled, IPMI cannot be used with the host and vCenter Server attempts to use the WoL protocol.

Before enabling Power Management for hosts in a vSphere cluster, it is necessary to gather the username and password for IP and MAC Address of the BMC.

In this post, the hosts in my Management Cluster use HP iLO 4 and I have captured both the IP and MAC Address used for their interfaces. I have also designated a user that is allowed to perform only “Virtual Power and Reset” operations. The user has been restricted from all other roles and operations.
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/04/DPM-iLO4.jpg"><img class="alignnone  wp-image-16982" alt="" src="http://blogs.vmware.com/vsphere/files/2015/04/DPM-iLO4-1024x576.jpg" width="813" height="456" /></a></p>
Now, let's configure all the hosts in the Management Cluster for Power Management.
<ol>
	<li>Browse to each host in the vSphere Web Client.</li>
	<li>Click the <strong>Manage</strong> tab and click <strong>Settings</strong>.</li>
	<li>Under <strong>System</strong>, click <strong>Power Management</strong>.</li>
	<li>Click <strong>Edit</strong>.</li>
	<li>Enter the:</li>
</ol>
<ul>
	<li>Username and password for the BMC account.<em><em> (Recommended designating a user with only the ability to perform remote power-off/on operations.)</em></em></li>
	<li>IP Address of the BMC <em><em>(Obtained in this instance from the HP iLO4 seen above.)</em></em></li>
	<li>MAC Address of the BMC. <em>(Obtained in this instance from the HP iLO4 seen above.)</em></li>
</ul>
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/04/DPM-BMC.jpg"><img class="alignnone  wp-image-16984" alt="" src="http://blogs.vmware.com/vsphere/files/2015/04/DPM-BMC-1024x576.jpg" width="813" height="456" /></a></p>
<span style="line-height: 1.714285714; font-size: 1rem;">Before enabling DPM on the cluster, it's a good idea to validate that vCenter Server can communicate with each host's BMC by individually testing placing it in standby mode and then powering-on the host through the vSphere Web Client.
<ol>
	<li>Test placing host in standby mode by right-clicking the host in the vSphere Web Client. The select <strong>Power </strong>&gt; <strong>Enter Standby Mode </strong>to initiate standby.
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/04/DPM-ENTERSTANDBY.jpg"><img class="alignnone size-full wp-image-17001" alt="" src="http://blogs.vmware.com/vsphere/files/2015/04/DPM-ENTERSTANDBY.jpg" width="824" height="246" />
</a></p>
Or in PowerCLI run:
<pre>Get-VMHost -Name &lt;Hostname&gt; | Suspend-VMHost -Confirm:$false</pre>
</li>
	<li>Test exiting standby mode by right-clicking the host in the vSphere Web Client. The select <strong>Power </strong>&gt; <strong>Power On </strong>to initiate power-on.</li>
</ol>
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/04/DPM-POWERON.jpg"><img class="alignnone size-full wp-image-17002" alt="" src="http://blogs.vmware.com/vsphere/files/2015/04/DPM-POWERON.jpg" width="847" height="246" /></a></p>
Or in PowerCLI run:<a href="http://blogs.vmware.com/vsphere/files/2015/04/DPM-POWERON.jpg">
</a>
<pre>Get-VMHost -Name &lt;Hostname&gt; | Start-VMHost -Confirm:$false</pre>
<h2>Enabling DPM</h2>
As mentioned previously, DPM leverages DRS when to migrates virtual machines away from hosts that are ready to be powered-off and marked as stand-by. Therefore, DPM requires that DRS to be enabled on all clusters in which it is enabled. Let's look at how to enable DPM in this Management Cluster.
<ol>
	<li>In the vSphere Web Client highlight the cluster and select the <strong>Manage </strong>tab.<strong> </strong>Click the <strong>Settings</strong> tab.</li>
	<li>Highlight the <strong>vSphere DRS</strong> settings to configure the <strong>Power Management</strong>. DPM is disabled - set to [Off] - by default.<img class="alignnone  wp-image-16987" alt="" src="http://blogs.vmware.com/vsphere/files/2015/04/DPM-DRS-1024x576.jpg" width="813" height="456" /></li>
	<li>Enable DPM by clicking <strong>Edit</strong> and selecting either [Manual] or [Automatic]. <span style="line-height: 1.714285714; font-size: 1rem;"><span style="line-height: 1.714285714; font-size: 1rem;"><span style="line-height: 1.714285714; font-size: 1rem;"><span style="line-height: 1.714285714; font-size: 1rem;">In [Manual] mode, execution of DPM recommendations requires administrative intervention while [Automatic] mode, executes DPM recommendations without administrative intervention.<img class="alignnone  wp-image-16988" style="font-size: 1rem; line-height: 1;" alt="" src="http://blogs.vmware.com/vsphere/files/2015/04/DPM-DRS2-1024x576.jpg" width="813" height="456" /></li>
</ol>
vSphere Distributed Power Management is now enabled, but can also adjust the DPM Threshold to suit our requirements.
<h2>DPM Threshold and Recommendation Rankings</h2>
DPM-generated ratings are assigned priorities that range from priority-one to priority-five. Priority ratings are based on the amount of over- or under-utilization found in the DRS cluster and the improvement that is expected from the intended host power state change. Priority-one recommendations are mandatory, while a priority-five recommendations only provide only slight improvement.

The DPM Threshold is exposed and configured expanding the Power Management section. Similar to the DRS Threshold, you can set the DPM Threshold using the slider to set either a [Conservative]-level, an [Aggressive]-level or anywhere in between. Each level you move the vSphere DPM Threshold slider to the right allows the inclusion of one more lower level of priority in the set of recommendations that are executed automatically or appear as recommendations to be manually executed.
<ol>
	<li> Expand the arrow next to <strong>Power Management </strong>to expose the DPM Threshold. Notice that the [Automatic] option is selected from the previous drop-down.</li>
	<li>Adjust the <strong>DPM Threshold</strong> and click <strong><strong>OK.</strong></strong><img class="alignnone  wp-image-16989" style="font-size: 1rem; line-height: 1;" alt="" src="http://blogs.vmware.com/vsphere/files/2015/04/DPM-DRS3-1024x576.jpg" width="813" height="456" /></li>
</ol>
At the [Conservative} setting, DPM only generates priority-one recommendations, the next level to the right only priority-two and higher, and so on, down to the [Aggressive] setting which generates priority-five recommendations and higher (all recommendations.)

These levels signify the expected importance of particular recommendations given the current utilization of hosts across the cluster and constraints, if any, on powered-on capacity. Host power-off recommendations are ranked from priority-two to priority-five. A high priority level (priority-two) for a power-off recommendation signifies a larger amount of underutilized, powered-on capacity in the cluster.

Hence a recommendation with the higher priority level presents a more attractive opportunity for power savings.

Host power-on recommendations are rated as priority-one to priority-three. Power-on recommendations generated to meet HA or optional user-specified powered-on capacity requirements receive priority-one rankings. Power-on recommendations produced to address high host utilization are rated as either priority-two or priority-three, with the higher priority level indicating that overall host utilization is closer to saturation.

In manual mode, DPM power recommendations are displayed in the vSphere Web Client, allowing an administrator to choose the response action.

In automatic mode, the recommendations are executed automatically. Host power-on recommendations produced by DRS as prerequisites for DRS migrations also receive priority levels. The DRS priority levels do not correspond to DPM priority levels and are governed by the setting for the DRS migration threshold.

The selected DPM automation level is applied to all hosts in the cluster as seen when selecting the Host Options. The cluster "Default" is set for each host, but can be changed on a per-host basis.
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/04/DPM-HOSTOPTIONS2.jpg"><img class="alignnone  wp-image-16992" alt="" src="http://blogs.vmware.com/vsphere/files/2015/04/DPM-HOSTOPTIONS2-1024x576.jpg" width="813" height="456" /></a></p>
After enabling and running DPM, you can verify that it is functioning by viewing each host’s Last Time Exited Standby information displayed in the Host Options of the cluster's Settings. This field shows a timestamp and whether vCenter Server Succeeded or Failed the last time it attempted to bring the host out of standby mode. If no such attempt has been made, the field displays Never.
<p style="padding-left: 30px;"><a href="http://blogs.vmware.com/vsphere/files/2015/04/DRS-HOSTOPTIONS.jpg"><img class="alignnone  wp-image-16994" alt="" src="http://blogs.vmware.com/vsphere/files/2015/04/DRS-HOSTOPTIONS-1024x576.jpg" width="813" height="456" /></a></p>

<h2>DPM Operations</h2>
The outcome of DPM is to keep host utilization within a target range, subject to the constraints specified by the DPM operating parameters and those of both vSphere HA and DRS. DPM evaluates host power-on operations when there are hosts whose utilization is above this range and host power-off operations when there are hosts whose utilization is below the range.

DPM evaluates CPU and memory utilization for each host in the cluster and tries to keep the host within a specific range. By default utilization range is 45% to 81%. The range is computed from two settings:
<p style="padding-left: 30px;"><strong>DemandCapacityRatioTarget</strong> = utilization target of the host - by default it is 63%</p>
<p style="padding-left: 30px;"><strong>DemandCapacityRatioToleranceHost</strong> = variation around utilization target - by default it is 18%</p>

<blockquote>
<p style="padding-left: 30px;"><strong>Utilization range</strong> = <strong>DemandCapacityRatioTarget</strong> +/- <strong>DemandCapacityRatioToleranceHost</strong></p>
</blockquote>
<strong></strong>Default DPM settings can be changed in the DRS Advanced Settings. and can be set between 40% and 90% for DemandCapacityRatioTarget and between 10% and 40% for DemandCapacityRatioToleranceHost.

Two time intervals are used by DPM when evaluating power-on and power-off recommendations. For power-on the period is 300 seconds (5 Minutes) and power off is 2400 seconds (40 Minutes.) Therefore, DPM considers more important responses to increased load. Note however that a sudden increase in the load will be be considered by DPM only after 5 minutes and will initiate a resolution after the host complete its power-on operation in the cluster. The default values can be changed by setting parameters VmDemandHistorySecsHostOn (default 300 seconds) and VmDemandHistorySecsHostOff (default 2400 seconds) to a value between 0 and 3600 seconds.

DPM always ensure that at least one host will be running within the DPM-enabled cluster. The settings MinPoweredOnCpuCapacity (default 1 MHz) and MinPoweredOnMemCapacity (default 1 MB) are used to control how many hosts are remain powered-on. There default values ensure minimum one host is up and can be changed. For example if the cluster has hosts configured with 24 GHz and 128 GB setting the parameters 24001 MHz and 131073 MB will reserve 2 hosts running at all time. Even with default values, when HA cluster is enabled, DPM will leave 2 hosts powered on to provide fail over resources in case of one host failing.
<h2>A Word on Monitoring DPM and Other Monitoring Tools</h2>
You can use event-based alarms in vCenter Server to monitor DPM. The most serious potential error you may face when using DPM is the failure of a host to exit standby mode when its capacity is needed by the cluster. You can monitor for instances when this error occurs by using the preconfigured Exit Standby Error alarm in vCenter Server. If DPM cannot bring a host out of standby mode, you can configure this alarm to send an alert email to the administrator or to send notification using an SNMP trap. By default, this alarm is cleared after vCenter Server is able to successfully connect to that host.

To monitor DPM activity, create alarms for the following vCenter Server events.
<p style="padding-left: 30px;"><strong>DrsEnteringStandbyModeEvent</strong> = Entering Standby mode (about to power off host)</p>
<p style="padding-left: 30px;"><strong>DrsEnteredStandbyModeEvent</strong> = Successfully entered Standby mode (host power off succeeded)</p>
<p style="padding-left: 30px;"><strong>DrsExitingStandbyModeEvent</strong> = Exiting Standby mode (about to power on the host)</p>
<p style="padding-left: 30px;"><strong>DrsExitedStandbyModeEvent</strong> = Successfully exited Standby mode (power on succeeded)</p>
Modern data centers use tools to monitor the state and health of data center objects. If you use monitoring software, other than vCenter Server, that triggers alarms when ESXi hosts are powered-off unexpectedly, you might have a situation where false alarms are generated when DPM places a host into standby mode. To alleviate false positives, work with your vendor to deploy a version of the monitoring software that is integrated with vCenter Server and triggers events indicating that a host has entered DPM-initiated Standby mode. Alternatively you may use vCenter Server as your host monitoring solution as it is inherently aware of DPM and does not trigger these false positive alarms.

Do you have an opportunity to reduce power consumption in your data center?

Examine the ability to streamline your data center operations and save energy with vSphere DPM.

- - - -
