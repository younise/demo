---
layout:         post
title:          "What is vCenter Server Watchdog?"
subtitle:       ""
date:           2015-10-29 10:30:00
author:         "Ryan Johnson"
published:      true
categories:     [vSphere, vCenter, Platform Services Controller]
tags:           [vSphere, vCenter, Platform Services Controller]
---

If you’ve done any research into the high-availability options available for vCenter Server 6.0, hopefully you have had a chance to read the <a href="http://www.vmware.com/files/pdf/techpaper/VMware-vCenter-Server6-Availability-Guide.pdf" >VMware vCenter Server 6.0 Availability Guide</a> written in collaboration with Technical Marketing and Global Support Services as well as <a href="http://kb.vmware.com/kb/1024051/" >KB 1024051</a>. And you might have noticed particular sections that refer to the vCenter Server Watchdog. But what exactly is the vCenter Server Watchdog?

Enabled “out of the box” in 6.0, the vCenter Server Watchdog provides better availability by periodically verifying the status of vCenter Server.  It does this in two ways:
<ol>
	<li>The PID Watchdog monitors the processes running on vCenter Server</li>
</ol>
<ul>
	<li>The API Watchdog uses the vSphere API to monitor the functionality of vCenter Server.</li>
</ul>
If any services fail, the Watchdog attempts to restart them. If it cannot restart the service because of a host failure, vSphere HA restarts the virtual machine running the service on a new host.

That’s sounds slick, right? Well, let’s dive in and take a look at each of these watchdogs in detail.<!--more-->
<h2>PID WATCHDOG</h2>
First up, is the PID Watchdog. A watchdog initializes alongside each vCenter Server service at runtime. The PID Watchdog only monitors services that are actively running. Meaning, that once a service is gracefuly stopped, the watchdog will no longer monitor or restart the service. The PID Watchdog detects only that a process with the correct executable is in the process table but it does not determine if the process is ready to service requests (<em>e.g.</em> vSphere Web Client.) – that is left to the API Watchdog (more on that later).

There are four PID Watchdogs found vCenter Server 6.0 depending on the service it protects and the platform form factor:
<ol>
	<li><strong>vmware-watchdog</strong>:
This watchdog detects failures and restarts all non-Java based services on the VCSA.</li>
	<li><strong>Java Service Wrapper</strong>:
This watchdog detects failures and restarts all Java based services on the VCSA and Windows.</li>
	<li><strong>Likewise Service Manager</strong>:
This watchdog detects failures and restarts all non-Java (C) based platform services.</li>
	<li><strong>Windows Service Control Manager</strong>:
This watchdog detects failures and restarts all non-Java based services on Windows.</li>
</ol>
Each vCenter Server process has a separate PID Watchdog process associated with it. In this post, we will take a look at those in the vCenter Server Appliance.
<h4><strong>vmware-watchdog</strong></h4>
This watchdog is a shell script (/usr/bin/watchdog) found on the VCSA that is used to detect a service failure in non-Java (C) based services on the appliance form factor. A service start automatically starts the Watchdog along with the service itself. Let’s search for the running processes that match for “vmware-watchdog.”<strong> </strong>
<pre><strong>mgmt01vc01.sddc.local:~ #</strong> ps -ef | grep vmware-watchdog
 root      5767     1  0 16:20 ?        00:00:00 /bin/sh /usr/bin/vmware-watchdog -s rhttpproxy -u 30 -q 5 /usr/sbin/rhttpproxy -r /etc/vmware-rhttpproxy/config.xml -d /etc/vmware-rhttpproxy/endpoints.conf.d -f /etc/vmware-rhttpproxy/endpo
 root      7930     1  0 16:21 ?        00:00:00 /bin/sh /usr/bin/vmware-watchdog -s vws -u 30 -q 5 /usr/lib/vmware-vws/bin/vws.sh
 root      8109     1  0 16:21 ?        00:00:11 /bin/sh /usr/bin/vmware-watchdog -s syslog -u 30 -q 5 -b /var/run/rsyslogd.pid /sbin/rsyslogd -c 5 -f /etc/vmware-rsyslog.conf
 root      8266     1  0 16:21 ?        00:00:11 /bin/sh /usr/bin/vmware-watchdog -b /storage/db/vpostgres/postmaster.pid -u 300 -q 2 -s vmware-vpostgres su -s /bin/bash vpostgres -c 'LD_LIBRARY_PATH=/opt/vmware/vpostgres/curre
 root      9422     1  0 16:21 ?        00:00:00 /bin/sh /usr/bin/vmware-watchdog -a -s vpxd -u 3600 -q 2 /usr/sbin/vpxd
 root     13113     1  0 16:22 ?        00:00:00 /bin/sh /usr/bin/vmware-watchdog -s vsan-health -u 600 -q 10 su vsan-health -c '/opt/vmware/bin/vmware-vsan-health /usr/lib/vmware-vpx/vsan-health/VsanHealthServer.py -p 8006'
 root     28775 19850  0 20:42 pts/0    00:00:00 grep vmware-watchdog</pre>
Let’s break that down a bit into something more readable:<strong> </strong>
<table>
<tbody>
<tr>
<td><strong>Service</strong></td>
<td><strong>Process Name</strong></td>
<td><strong>Virtual Machine Restart?</strong></td>
<td><strong>Minimal Uptime</strong></td>
<td><strong>Number of Restarts</strong></td>
</tr>
<tr>
<td>Reverse Proxy</td>
<td>rhttpproxy</td>
<td>No</td>
<td>30 seconds</td>
<td>5</td>
</tr>
<tr>
<td>vCenter Management Web Service</td>
<td>vws</td>
<td>No</td>
<td>30 seconds</td>
<td>5</td>
</tr>
<tr>
<td>Syslog Collector</td>
<td>Syslog</td>
<td>No</td>
<td>30 seconds</td>
<td>5</td>
</tr>
<tr>
<td>vPostgres Database</td>
<td>vmware-vpostgres</td>
<td>No</td>
<td>5 minutes</td>
<td>2</td>
</tr>
<tr>
<td>vCenter Server</td>
<td>vpxd</td>
<td>Yes</td>
<td>1 hour</td>
<td>2</td>
</tr>
<tr>
<td>VSAN Health Check</td>
<td>vsan-health</td>
<td>No</td>
<td>10 minutes</td>
<td>10</td>
</tr>
</tbody>
</table>
As an example, here we can see that vmware-watchdog is running with a couple of parameters, which differ for each service process. Let’s dig into the VPXD process since it’s the most important service. It shows the following parameters:
<pre>-a
-s vpxd
-u 3600
-q 2</pre>
What the above process parameters result in is the following: the service, named <strong>vpxd</strong> (-s vpxd) is <strong>started</strong>, is monitored for <strong>failures</strong> and will be restarted twice (-q 2) at most. If it fails for a third time within a <strong>minimal uptime</strong> of <strong>3600</strong> seconds/one hour (-u 3600) the virtual machine will be <strong>restarted/rebooted</strong> (-a).

A full list of the parameters that may be used by the vmware-watchdog is provided below:
<pre>-d = DAEMONIZE
-n = QUIET
-b = BG_PROC-s = START
-k = STOP
-r = QUERY
-a = REBOOT_FLAG
-u = MIN_UPTIME
-q = MAX_QUICK_FAILURES
-t = MAX_TOTAL_FAILURES
-i = IMMORTAL
-c = CLEANUP_CMD
-f = EXIT_CLEANUP_CMD</pre>
<p style="padding-left: 30px;"><em>*** Note: The details provided above are for education purposes only. Do not make changes to service parameters or the vmware-watchdog script unless instructed to do so by VMware Global Support Services.  ***</em></p>

<h4><strong>Java Service Wrapper</strong><strong> </strong></h4>
The Java Service Wrapper is a watchdog used to detect service failures and restart Java based services. It is based off the Tanuki Java Service Wrapper, a 3<sup>rd</sup> party service wrapper that enables a Java Application to be run as a Windows Service or UNIX Daemon and allows for the health monitoring an application and JVM. Let’s search for the running processes that match for “tanuki.”
<pre><strong>mgmt01vc01.sddc.local:~ #</strong> ps -ef | grep tanuki
cm        6331  6324  0 16:20 ?        00:00:37 /usr/java/jre-vmware/bin/vmware-cm -Dorg.tanukisoftware.wrapper.WrapperSimpleApp.waitForStartMain=FALSE -XX:+ForceTimeHighResolution -Dlog4j.configuration=cm-log4j.properties -Dxml.config=ht
root      6876  6869  0 16:20 ?        00:00:50 /usr/java/jre-vmware/bin/vmware-cis-license -Dorg.tanukisoftware.wrapper.WrapperSimpleApp.waitForStartMain=FALSE -Dorg.apache.catalina.startup.EXIT_ON_INIT_FAILURE=TRUE -XX:+ForceTimeHighRes
root      7267  7258  1 16:21 ?        00:03:45 /usr/java/jre-vmware/bin/vmware-sca -Dorg.tanukisoftware.wrapper.WrapperSimpleApp.waitForStartMain=FALSE -XX:+ForceTimeHighResolution -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/lo
root      7634  7627  0 16:21 ?        00:00:29 /usr/java/jre-vmware/bin/vmware-syslog-health -Dorg.tanukisoftware.wrapper.WrapperSimpleApp.waitForStartMain=FALSE -XX:+ForceTimeHighResolution -DlogDir=/var/log/vmware/syslog -Dlog4j.config
1002      7843  7836  0 16:21 ?        00:01:08 /usr/java/jre-vmware/bin/vmware-vapi-endpoint -Dorg.tanukisoftware.wrapper.WrapperSimpleApp.waitForStartMain=FALSE -XX:+ForceTimeHighResolution -Dlog4j.configuration=file:/etc/vmware-vapi//e
root      8453  8433  1 16:21 ?        00:02:55 /usr/java/jre-vmware/bin/vmware-invsvc -Dorg.tanukisoftware.wrapper.WrapperSimpleApp.waitForStartMain=FALSE -Dvim.logdir=/var/log/vmware/invsvc -XX:+ForceTimeHighResolution -XX:+ParallelRefP
root     10410 10388  0 16:22 ?        00:00:54 /usr/java/jre-vmware/bin/vmware-sps -Dorg.tanukisoftware.wrapper.WrapperSimpleApp.waitForStartMain=FALSE -Dxml.config=../conf/sps-spring-config.xml -Dpbm.config=../conf/pbm-spring-config.xml
1007     11099 11088  0 16:22 ?        00:01:27 /usr/java/jre-vmware/bin/vmware-vpx-workflow -Dorg.tanukisoftware.wrapper.WrapperSimpleApp.waitForStartMain=FALSE -XX:+ForceTimeHighResolution -ea -Dlog4j.configuration=conf/workflow.log4j.p
root     23423 19850  0 20:41 pts/0    00:00:00 grep tanuki</pre>
When a Java-based services for vCenter Server starts, it automatically starts a wrapper process to monitor the service process and its JVM. The wrapper process restarts the JVM if it crashed and if the wrapper process crashes.
<h4><strong>Likewise Service Manager</strong></h4>
Now, let’s dig into the Likewise Service Manager watchdog. The a 3<sup>rd</sup> party Likewise Open stack from BeyondTrust includes the Likewise Service Manager and is instantiated by the lwsmd daemon. Aside from the services that come with the Likewise stack (such as lsass, netlogon, lwio, …), the Likewise Service anager is responsible for the VMware Directory Service (vmdir), VMware Authentication Framework (vmafd, which contains VECS), and VMware Certificate Authority (vmca).

Likewise Service Manager monitors the processes it starts and will restart them if they terminate unexpectedly. This means if a service like vmdir crashes, exits due to an error, or is told to terminate it by a process outside of the Likewise Service Manager, it will be restarted.

The command to list, start, stop and restart services managed by the Likewise Service Manager is '/opt/likewise/bin/lwsm'.

Let’s list all the processes managed by Likewise Service Manager that match for “vm” and their status:
<pre><strong>mgmt01vc01.sddc.local:~ #</strong> /opt/likewise/bin/lwsm list | grep vm
vmafd       running (standalone: 5505)
vmca        running (standalone: 5560)
vmdir       running (standalone: 5600)</pre>
Here we see that VMware Authentication Framework (+VECS), VMware Certificate Authority and VMware Directory Services are up and running.

Additional commands for Likewise Service Manager daemon include:
<pre>list                       List all known services and their status
autostart                  Start all services configured for autostart
start-only &lt;service&gt;       Start a service
start &lt;service&gt;            Start a service and all dependencies
stop-only &lt;service&gt;        Stop a service
stop &lt;service&gt;             Stop a service and all running dependents
restart &lt;service&gt;          Restart a service and all running dependents
refresh &lt;service&gt;          Refresh service's configuration
proxy &lt;service&gt;            Act as a proxy process for a service
info &lt;service&gt;             Get information about a service
status &lt;service&gt;           Get the status of a service
gdb &lt;service&gt;              Attach gdb to the specified running service</pre>
Now let’s take a look at the info for the VMware Directory Service using the info command:
<pre><strong>mgmt01vc01.sddc.local:~ #</strong> /opt/likewise/bin/lwsm info vmdir
Service: vmdir
Description: VMware Directory Service
Type: executable
Autostart: yes
Path: /usr/lib/vmware-vmdir/sbin/vmdird
Arguments: '/usr/lib/vmware-vmdir/sbin/vmdird' '-s' '-l' '0' '-f' '/usr/lib/vmware-vmdir/share/config/vmdirschema.ldif'
Environment:
Dependencies: lsass dcerpc vmafd</pre>
Notice that Likewise Service Manager is also aware of any dependencies and will stop / start those as needed.
<h2>API WATCHDOG</h2>
Next up, is the API Watchdog. This watchdog checks the status of APIs for the VPXD service. If the APIs are not running, the API Watchdog will attempt to restart the service two times. If the service restarts do not solve the issue, the API Watchdog will call for the restart of the virtual machine.

During an initial deployment of the VCSA – <em>new or upgrade</em> - the API Watchdog is in a maintenance mode and will only be active after all of the ‘firstboots’ are completed and all services have come online. Firstboots are the scripts where vCenter services are injected into the VCSA during the appliance deployment. After which, every 5 minutes the watchdog is invoked to verify that the API for VPXD is accessible. Essentially this watchdog is using the VIM API to authenticate to VPXD, request the Tag type associated to the rootFolder property on the Folder managed object. If the check fails the API Watchdog will call the PID Watchdog to restart VPXD. <em>(Note: For a vCenter Server deployment on Windows </em><em>you must reboot </em><em>.</em><em> )</em>

Thus, when the PID Watchdog takes over and performs the actions follow in conjunction with the API Watchdog:
<ul>
	<li>First Service Failure Action = Restart Service</li>
	<li>Second Service Failure Action = Restart Service</li>
	<li>Third Service Failure Action = Reboot Virtual Machine</li>
	<li>Failure Count Reset = 3600 seconds (1 hour)</li>
</ul>
Before a service restart and also before a virtual machine reboot, the API Watchdog generates support bundles for further investigation. These support bundles are stored in /storage/core/*.tgz on VCSA and in C:\ProgramData\VMware\vCenterServer\data\core\*.tgz on vCenter Server for Windows form factor.

The API Watchdog is also referred to as “IIAD” (Interservice Interrogation and Activation Daemon.) The configuration settings for the API Watchdog are stored in a JSON file named “iiad.json” and can be found in the /etc/vmware/ on the VCSA or C:\ProgramData\VMware\vCenterServer\cfg\iiad.json on the Windows form factor.

Let’s take a look at the contents of the iiad.json configuration file:
<pre><strong>mgmt01vc01.sddc.local:/ #</strong> cat /etc/vmware/iiad.json
{
   "requestTimeout": 20,
   "hysteresisCount": 4,
   "remediatedHysteresisCount": 6,
   "rebootShellCmd": null,
   "restartShellCmd": null,
   "maxTotalFailures": 50,
   "needShellOnWin": true,
   "watchdogDisabled": false,
   "vpxd.watchdogDisabled": false,
   "createSupportBundle": true,
   "automaticServiceRestart": true,
   "automaticSystemReboot": false,
   "maxSingleRestarts": 3,
   "maxSingleFailures": 2
}</pre>
So what exactly do these parameters mean? Let’s take a look at each of these below:
<ul>
	<li><em>requestTimeout</em>– is the default timeout for requests in seconds.</li>
	<li><em>hysteresisCount</em>– allows failures to gradually age off. Every hysteresisCount runs of the API Watchdog, the failure count will be reduced by one.</li>
	<li><em>rebootShellCmd</em>– is a user supplied command to run before rebooting the VM.</li>
	<li><em>restartShellCmd</em>– is a user supplied command to run before restarting a service. It will be passed an argument of the service name.</li>
	<li><em>maxTotalFailures</em>– is the number of total failures across all monitored services required before a virtual machine reboot will occur.</li>
	<li><em>needShellOnWin</em>– determines whether to run service-control with shell=True on Windows.</li>
	<li>watchdogDisabled– controls whether the API Watchdog is disabled.</li>
	<li>watchdogDisabled– controls whether the Watchdog for VPXD is disabled.</li>
	<li><em>createSupportBundle</em>– controls whether to create a support bundle when a service restart or VM reboot is needed.</li>
	<li><em>automaticServiceRestart </em>– indicates whether to restart services upon failure detection, or merely to log the failure.</li>
	<li><em>automaticSystemReboot</em>– indicates whether to reboot the virtual machine when sufficient failures are detected, or merely to log the recommendation.</li>
	<li><em>maxSingleRestarts </em>– is the upper limit on the number of times the API Watchdog will attempt to restart a failing service.</li>
	<li><em>maxSingleFailures</em>– is the number of failures required to trigger a service restart.</li>
</ul>
<p style="padding-left: 30px;"><em>*** Note: The details provided above are for education purposes only. Do not make changes to any of the above parameters unless instructed to do so by VMware Global Support Services.  ***</em></p>
In addition to the support bundles before a service restart or a virtual machine reboot, it also logs its activities to /var/log/vmware/iiad/* on the VCSA and to %VMWARE_LOG_DIR%/iiad/* on the Windows form factor.

And there you have it, a little bit of a deep dive on the “out of the box” watchdog functionality for vCenter Server 6.0. By managing and periodically verifying the status of vCenter Server processes with the PID Watchdog and the vCenter Server API with the API Watchdog, we provide better availability for the services and a faster RTO.
