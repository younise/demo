---
layout:         post
title:          "On VMware vCenter Server and Update Manager"
subtitle:       "Administration, Sizing and Maintenance"
date:           2012-06-19 12:00:00
author:         "Ryan Johnson"
published:      true
categories:     [Technology, VMware]
tags:           []
permalink:      
header-img:     "img/post-bg-01.jpg"
---

If you have the the in-depth technical experience with Microsoft SQL Server you may wish to implement and execute the practices provided below. If not, consider working with trusted database administrators to assist in supporting the configuration, health and availability of your vCenter database(s) - as well as other related databases (e.g. Update Manager.)

<strong>Database Sizing:</strong>

1. VMware vCenter Server: See the <a href="http://www.vmware.com/support/vsphere4/doc/vsp_4x_db_calculator.xls">estimator</a>. Although it is for 4.x it is still applicable to 5.x

2. VMware Update Manager: See the <a href="http://www.vmware.com/support/vi3/.../vi3_vum_10_sizing_estimator.xls">estimator</a>.

<strong>Database Security &amp; Maintenance Practices:</strong>

1. Reduce Database Privileges after Installation for Higher Security

When you install vCenter, the database user you assign to it must have full privileges to create and modify tables. You can grant the appropriate privileges by assigning this user the db_owner role.

During normal operations, in order to increase security, you may restrict this userʹs permissions to the following:

<ul>
	<li>* Invoke/execute stored procedures</li>
	<li>* Select, update, insert</li>
	<li>* Drop</li>
</ul>

Note:  If you need to perform an upgrade to vCenter, you must reinstate the db_owner role, because upgrades often involve changes to the database schema.

2. Backups

Proper backups are critical to database maintenance. The recommended backup strategy for vCenter databases is to have a full backup daily (agent based or dump to disk w/ 'pick up) and an <em>hourly transaction log backup</em> (agent based or to disk on <em>remote location</em>) if you are using the "full" recovery model. Define the backup retention policy according to your local needs.

3. Enable Automatic Statistics

SQL Server contains a cost‐based optimizer. To take advantage of the optimizer, you should enable automatic creation and updating of statistics. These statistics allow the database to optimize queries based on observed patterns of access, greatly improving performance. The overhead cost of enabling this feature is very minimal compared with the potential benefits. SQL Server enables Auto update statistics by default, the setting for which can be found on the database Properties, Options tab.

4. Purging Historical Performance Data

VMware vCenter Server stores performance data in the vCenter Server database. Over time, data collection results in growth of the database files and a mechanism is needed to shrink these files.

It is still possible to purge or shrink old records from the database using the scripts and procedures provided in KB 1025914 (<a href="http://kb.vmware.com/kb/1025914">http://kb.vmware.com/kb/1025914</a>.)

Why do these tables get so large? In many cases it is simply because of the volume hosts and Virtual machines in an environment. But in some cases we see this caused by custom script or third party management software.

Some examples of these are:
<ul>
	<li>* Dell Open Manager</li>
	<li>* Microsoft System Center Operations Manager</li>
	<li>* IBM Director</li>
	<li>* HP Insight Manager</li>
</ul>

When excessive database growth in these tables occurs we recommend the following course of action:

<ul>
	<li>* Backup your vCenter Database. VMware recommends a good backup strategy for your production database.</li>
	<li>* Follow the steps outlined in KB 1025914 (<a href="http://kb.vmware.com/kb/1025914">http://kb.vmware.com/kb/1025914</a>.)</li>
</ul>

Note: While vCenter Server 4.x has a Database Retention Policy setting that allows you to specify when vCenter Server tasks and events should be deleted this setting does not affect performance data records. In addition, In addition, we have seen cases where very large 'dbo.VPX_EVENT' and 'dbo.VPX_EVENT_ARG' tables cause the vCenter service to fail and/or not start.

<ul>
	<li><em><strong>Caution: </strong>The scripts provided are intended for execution by database administrators who are experienced with using database client tools to execute SQL commands. The purpose of the scripts is to delete data. VMware strongly recommends that you stop the vCenter Server service and make a full, reliable backup of your database before attempting this process.</em></li>
	<li><em><strong>Caution:</strong> The database transaction log may fill up during this procedure if sufficient disk space is not available. If the required disk space cannot be m</em>ade available, one option is to utilize the “simple” recovery model on the database for the duration of this operation</li>
</ul>

5. Database Defragmentation

Fragmentation of indexes occurs when the logical order of pages is different than the physical order on the disk. Fragmentation of the vCenter database occurs most noticeably due to the statistics collection and consolidation. When the indexes are excessively fragmented, performance of queries to the vCenter database is degraded and slows overall performance of vCenter..

Performance data in VMware vCenter 5.x is stored in 4 separate tables (vpx_hist_stat1 to vpx_hist_stat4) for efficiency. KB 1003990 (<a href="http://kb.vmware.com/kb/1003990">http://kb.vmware.com/kb/1003990</a>) provided the steps for VMware vCenter Server 5.x to identify and if required, defragment the database. The key pieces of information to determine fragmentation are Scan Density and Logical Scan Fragmentation. For Scan Density an ideal environment's has a percentage closer 100% and the better the database performs. For Logical Scan Fragmentation, the lower the percentage (30 or below) the better the system performs.

If either metric shows excessive fragmentation, the database is under performing and defragmentation can help to increase the performance of the system.

<ul>
	<li><em><strong>Caution: </strong>The scripts provided in the article are intended for execution by database administrators who are experienced with using database client tools to execute SQL commands. The purpose of the scripts are to defragment the database. VMware strongly recommends that you stop the vCenter Server service and make a full, reliable backup of your database before attempting this process.</em></li>
</ul>