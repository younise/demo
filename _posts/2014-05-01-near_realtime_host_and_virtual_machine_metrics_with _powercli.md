---
layout:     post
title:      "Near Real-Time Host and Virtual Machine Metrics with PowerCLI"
subtitle:   ""
date:       2014-05-01 12:00:00
author:     "Ryan Johnson"
header-img: "img/post-bg-06.jpg"
---

<p>Have you ever wanted to quickly return some key CPU, Memory, Disk and Network metrics across hosts in a matter of seconds?
<p>My customer and friend Vamshi Meda (<a href="http://twitter.com/medavamshi" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://twitter.com/medavamshi', '@medavamshi']);"  target="_blank">@medavamshi</a>) shared a very useful PowerCLI script that he wrote for some key near realtime (5min-interval) metrics for CPU, Memory, Disk and Network.
<p>This script will may assist help in troubleshooting a performance issue in near realtime.
<p>Download <a href="/docs/Get-Hosts_UsageStats.ps1" target="_blank">Get-Hosts_UsageStats.ps1</a> and run the following syntax:
<pre>PowerCLI S:\&gt; .\Get-Hosts_UsageStats.ps1 &lt;hostname&gt;</pre>
<p>A sample output is provided below.

<pre>
PowerCLI S:\&gt; .\Get-Hosts_UsageStats.ps1 esx1*
Name CPUUsageAverage% CPUReady% MemUsageAverage% DiskUsageAverage_MBps NetUsage_MBps
---- ---------------- --------- ---------------- --------------------- -------------
esx101.tenthirtyam.org 44.77 0.13 62.85 77.51 30.51
esx102.tenthirtyam.org 27.98 0.69 66.61 30.08 30.1
esx103.tenthirtyam.org 38.2 0.35 61.79 21.82 26.06
esx104.tenthirtyam.org 32.69 0.41 70.32 4.48 12.15
esx105.tenthirtyam.org 29.73 0.55 56.81 29.78 7.36
esx106.tenthirtyam.org 30.17 0.41 61.42 3.98 3.42
esx107.tenthirtyam.org 31.37 0.36 53.15 5.42 6.31
esx108.tenthirtyam.org 33.77 0.2 54.9 6.03 3.66
esx109.tenthirtyam.org 0.01 0.29 0.01 2.64 3.93
esx110.tenthirtyam.org 24.66 0.09 66.17 3.41 3.4
esx111.tenthirtyam.org 31.67 0.14 56.2 12.06 8.84
esx112.tenthirtyam.org 34.47 0.11 65.34 2.48 2.5
esx113.tenthirtyam.org 26.43 0.14 63.19 70.49 92.22
esx114.tenthirtyam.org 24.24 0.26 65.84 4.32 3.51
esx115.tenthirtyam.org 20.88 0.05 54.27 7.39 4.35
esx116.tenthirtyam.org 34.77 0.05 53.41 23.51 6.29
</pre>

<p>After an offending host is identified, another script can be run against the same host to shows the VM with peak usage that may be causing the performance impact.
<p>Download <a href="/docs/Get-Hosts_UsageStats_VM.ps1" target="_blank">Get-Hosts_UsageStats_VM.ps1</a> and run the following syntax:
<pre>PowerCLI S:\&gt; .\Get-Hosts_UsageStats_VM.ps1 &lt;hostname&gt;
</pre>
<p>A sample output is provided below.
<pre>PowerCLI S:\&gt; .\Get-Hosts_UsageStats_VM.ps1 esx102.tenthirtyam.org
Name CPUUsageAverage% CPUReady% MemUsageAverage% DiskUsageAverage_MBps NetUsage_MBps
---- ---------------- --------- ---------------- --------------------- ------------- 
vmexchcas01 76.78 0.39 30.52 0.16 6.43
vmexchmbx01 90.82 0.01 56.99 47.84 9.95
vmwwwapp01 3.39 0.03 3.25 0.04 0
vmwwwapp02 5.42 0.86 2.59 0.08 0.14
vmctxapp01 44.34 0.77 30.12 0.32 0.03
vmctxapp02 48.76 0.71 22.92 0.5 0.19 
vmctxapp03 17.81 0.52 14.32 0.53 0.08</pre>
<p>Nice work, as always, Vamshi!