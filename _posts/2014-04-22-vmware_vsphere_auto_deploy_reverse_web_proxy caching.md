---
layout:     post
title:      "VMware vSphere Auto Deploy Reverse Web Proxy Caching"
subtitle:   ""
date:       2014-04-11 12:00:00
author:     "Ryan Johnson"
header-img: "img/post-bg-06.jpg"
---

<p>Lately, I’ve been working with a customer on a vSphere 5.1 and 5.5 Auto Deploy environment. The environment is rather large, and each pod of compute/storage requires localized access to the ESXi VIBs during the boot process. This falls in line with the best practice outlined in the <a href="http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-installation-setup-guide.pdf" onclick="_gaq.push(['_trackEvent','download','http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-installation-setup-guide.pdf']);" >VMware vSphere Installation and Setup Guide</a>.

<p style="padding-left: 30px;"><strong><em>Auto Deploy Load Management Best Practice</em></strong>

<p style="padding-left: 30px;"><em>Simultaneously booting large numbers of hosts places a significant load on the Auto Deploy server. Because Auto Deploy is a web server at its core, you can use existing web server scaling technologies to help distribute the load. For example, one or more caching reverse proxies can be used with Auto Deploy to serve up the static files that make up the majority of an ESXi boot image. Configure the reverse proxy to cache static content and pass requests through to the Auto Deploy server.</em>

<p style="padding-left: 30px;"><em>Configure the hosts to boot off the reverse proxy by modifying the TFTP tramp file. When you click Download TFTP ZIP in the vSphere Client, the system downloads the ZIP file that contains the tramp file. See Prepare Your System and Install the Auto Deploy Server. Change the URLs in that file to refer to the address of the reverse proxy.</em>

<p>Kyle Gleed has written a <a href="http://blogs.vmware.com/vsphere/2012/01/using-reverse-web-proxy-with-auto-deploy.html" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://blogs.vmware.com/vsphere/2012/01/using-reverse-web-proxy-with-auto-deploy.html', 'terrific article']);" >terrific article</a> on how to set up an Apache HTTP reverse web proxy to cache the content from the Auto Deploy server. However, I noticed that he mistakenly did not mention that some additional Apache modules are needed to enable the disk caching directives within Apache HTTP Server. Otherwise, Apache will not cache the content from the Auto Deploy server and the reverse web proxy will only act as a web proxy – with no caching.

<p><strong>Load the Necessary Modules</strong>

<p>Specifically, the <a href="http://httpd.apache.org/docs/2.2/mod/mod_cache.html" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://httpd.apache.org/docs/2.2/mod/mod_cache.html', 'mod_cache']);" >mod_cache</a> and <a href="http://httpd.apache.org/docs/2.2/mod/mod_disk_cache.html" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://httpd.apache.org/docs/2.2/mod/mod_disk_cache.html', 'mod_disk_cache']);" >mod_disk_cache</a> Apache modules need to be loaded to enable these caching directives. Kyle covers these directives in the article.

<p>You might be wondering where the proxy stores the cached content. This is defined in the 

<strong>CacheRoot</strong> directive in the Apache HTTP Server<em>httpd.conf</em>.

<pre><strong>For example:</strong> CacheRoot /var/cache/AutoDeploy/</pre>

<p><strong>Set Cache Timing</strong>

<p>In addition, the <strong>CacheDefaultExpire</strong> directive specifies a default time, in seconds, to cache a piece of content (“document”) if neither an expiry date nor last-modified date is provided with the document. The value specified with the <strong>CacheMaxExpire</strong> directive does not override this setting.

<pre><strong>For example:</strong> CacheDefaultExpire 86400</pre>

<p><strong>NOTE:</strong> The <strong>CacheMaxExpire</strong> directive specifies the maximum number of seconds for which cachable HTTP documents will be retained without checking the origin server. Thus, documents cached from the Auto Deploy server will be out of date in, at most, this number of seconds. This maximum value is enforced even if an expiry date was supplied.

<p><strong>Verify VIBs are Loading</strong>

<p>Lastly, if you need to verify that an ESXi host is loading VIBs from a reverse web proxy, you will need to either review the Apache logs (eg. <em>/var/log/httpd/access_log</em>) on the reverse web proxy for “<em>Get</em>” requests from the ESXi host IP address or <em>quickly</em> catch the address during the boot process (which moves pretty fast).

<p>By ensuring you follow these steps at setup, you’ll ensure caching will work as expected.