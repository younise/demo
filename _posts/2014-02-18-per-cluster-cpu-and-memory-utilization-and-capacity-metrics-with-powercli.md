---
layout:     post
title:      "Per-Cluster CPU and Memory Utilization and Capacity Metrics with PowerCLI"
subtitle:   ""
date:       2014-02-26 12:00:00
author:     "Ryan Johnson"
header-img: "img/post-bg-06.jpg"
---

Have you ever wanted to quickly return some key CPU and memory utilization and capacity metrics on any given vSphere cluster but avoid any GUI and "point in time spreadsheet black<del>hole</del>magic?"

My customer and friend Vamshi Meda (<a title="Vamshi Meda" href="http://twitter.com/medavamshi" target="_blank">@medavamshi</a>) shared a very useful PowerCLI script that he wrote for some key cluster-level metrics in the environment that he supports.

Download <a title="Get-Cluster_Stats.ps1" href="/docs/Get-Cluster_Stats.ps1" target="_blank">Get-Cluster_Stats.ps1</a> and run the following syntax:

<pre>
PowerCLI S:\&gt; .\Get-Cluster_Stats.ps1 &lt;ClusterName&gt;
</pre>

A sample output is provided below.

<pre>
PowerCLI S:\&gt; .\Get-Cluster_Stats.ps1 100

ClusterName                                       : 100
TotalClusterHostCount                             : 8
TotalClusterVMCount                               : 32
TotalClusterVM/Host                               : 4
TotalClusterpCPUSocket                            : 16
TotalClusterpCPUCore                              : 104
TotalClustervCPUCount                             : 70
TotalClustervCPU/pCPUCore                         : 0.7
TotalClustervCPU/pCPUCore After 1 Failover        : 1
TotalClustervCPU/pCPUCore After 2 Failvoer        : 1
TotalClusterRAMGB                                 : 1568
TotalClusterRAMGB_Failover1                       : 1312
TotalClusterRAMGB_failover2                       : 1056
TotalClusterRAMUSAGEPercent                       : 10
TotalClusterRAMUsageGB                            : 154
TotalClusterRAMFreeGB                             : 1414
TotalClusterRAMReservedGB(15%)                    : 235
RAM Available for NEW VMs in GB                   : 1179
RAM Available for NEW VMs in GB After 1 failover  : 923
RAM Available for NEW VMs in GB After 2 failover  : 667
NEW VM's that can be provisioned                  : 227
NEW VM's that can be provisioned After 1 failover : 178
NEW VM's that can be provisioned After 2 Failvoer : 128
</pre>

In addition to the above the script will also provide these details for each host:

<ul>
	<li>Host Model</li>
	<li>Number of Sockets</li>
	<li>Number of Cores</li>
	<li>Number of Threads</li>
	<li>Number of Virtual Machines</li>
	<li>Number of vCPU</li>
	<li>Number of vCPU per Core</li>
	<li>RAM in GB</li>
	<li>RAM Usage in GB</li>
	<li>RAM Free in GB</li>
	<li>RAM Usage in %</li>
	<li>RAM Reserved in GB (15%)</li>
	<li>RAM Available for New Workloads in GB</li>
</ul>