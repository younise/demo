---
layout:     post
title:      "VCSA's Assemble!"
subtitle:   ""
date:       2014-03-19 12:00:00
author:     "Ryan Johnson"
header-img: "img/post-bg-06.jpg"
---

<p>I have had the pleasure to work with many expansive and unique environments in my career. One of my favorite and the most unique has defined automated PODs of availability throughout multiple data centers and mobile locations.

<p>As the environment has grown, so has the need to segment specific VCSA services like the Syslog Collectors, Dump Collector, Auto Deploy Server, SSO and the Web Client<em> (even the embedded DHCP and TFTP services, where applicable.) </em>

<p>I won't go into the "lump all your services into one big VCSA instance" argument in this post. Suffice it to say that there are use cases where services need to be modular.

<p>Unfortunately, with so many instances of the VCSA deployed throughout the environment, it can become difficult to know which VCSA you&#8217;re in as you flip between browser tabs.

<p><em>Have you ever noticed that the default <strong>vCenter Server</strong>

<strong>Summary</strong> in the VCSA does not clearly show which system you are logged into?  </em>There is no clearly identifiable information other that the URL.

<p>So, this past week we were discussing this issue and decided that it might be nice to consider a slight modification of the VCSA Administration interface to compliment the host alias and the appliance role.

<p>To modify the header and site title of the VCSA when logged into the Administration UI , login into your VCSA as &#8216;root&#8217; and locate the following file.

<pre>/opt/vmware/share/htdocs/service/core/view-deploy.xml</pre>

<p>Replace the value in:

<pre>&lt;property name="name" value="VMware vCenter Server Appliance"/&gt;</pre>

<p>&#8230; with your own custom value, such as:

<pre>&lt;property name="name" value="'Iron Man' POD - Auto Deploy"/&gt;</pre>

<p>If you want to get a little more creative, replace the following file with your own transparent GIF.

<pre>/opt/vmware/share/htdocs/service/core/vami-logo.gif</pre>

<p>The result is more meaningful and special.

<p><img src="http://tenthirtyam.org/assets/avg-im-ads01-661x1024.png" width="600" height="929" />