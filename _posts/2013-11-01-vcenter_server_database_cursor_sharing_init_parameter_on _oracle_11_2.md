---
layout:     post
title:      "VMware vCenter Server Database CURSOR_SHARING Init Parameter on Oracle 11.2"
subtitle:   ""
date:       2013-11-01 12:00:00
author:     "Ryan Johnson"
header-img: "img/post-bg-06.jpg"
---

<p>Earlier this week one of my customers contacted me regarding the recommended value for the init.ora CURSOR_SHARING parameter for this vCenter Server database. Since the database had been performing poorly and they raised a case with Oracle, but wanted our input before taking any action.</p>

<p>The CURSOR_SHARING parameter on the Oracle 11.2 database was set to &#8216;SIMILAR&#8217; and Oracle noted the following:</p>

<ul>
    <li><strong>Document ID 1357946.1:</strong> Troubleshooting &#8216;library Cache: Mutex X&#8217; Waits.<br />
<em><em><em>&#8220;For 11g, make sure cursor_sharing is not similar, as it has been deprecated. This may also cause mutex waits&#8230;&#8221;</em></em></em></li>
    <li><strong>Document 1169017.1:</strong> <em><em>ANNOUNCEMENT: Deprecating the CURSOR_SHARING = ‘SIMILAR’ Setting<br />
</em>“setting CURSOR_SHARING = SIMILAR is highly discouraged in Oracle Database 11g Release 2 (and generally has not been recommended for most environments even in earlier versions) for several reasons”</em></li>
</ul>

<p>The problem was that before 11gR2 CURSOR SHARING parameter had 3 parameters:</p>

<pre style="padding-left: 30px;">CURSOR_SHARING = { SIMILAR | EXACT | FORCE }</pre>

<p>As of 11gR2 CURSOR SHARING parameter has just two parameters when &#8216;SIMILAR&#8217; was deprecated:</p>

<pre style="padding-left: 30px;">CURSOR_SHARING = { EXACT | FORCE }</pre>

<p><strong>So value should be set for the parameter in the vCenter Server database init.ora?</strong></p>

<p>In general, the option to use the CURSOR_SHARING value of &#8216;FORCE&#8217; is to help applications with mostly non-binding parameter queries while the use of &#8216;EXACT&#8217; reduces the overhead of finding similar SQL statements in the pool.</p>

<p>VMware does not have a published recommendation for this setting since the parameter values are provided by Oracle.</p>

<p>However, when speaking with our engineers they mentioned that although the vast majority of the SQL statements use bind variables in the vCenter Server database, the most frequently run statements <strong>do not</strong> use bind variables (<em>e.g.</em> VPX_VM , VPX_DVS*, VPX_HOST tables). Bind variables are use for queries with low cardinality (candidates like bitmap value, fixed lookup, etc) are not used.</p>

<p>As a result, consider setting CURSOR_SHARING  to &#8216;FORCE&#8217; due to deprecation of the &#8216;SIMLAR&#8217; value post Oracle 11gR2 and because the most frequent SQL statements in use within vCenter Server do not use bind variables.</p>

<p>Then again, I prefer Microsoft SQL Server myself&#8230;</p>