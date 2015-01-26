---
layout:     post
title:      "Host Profile Compliance and SNMP Agent Configuration"
subtitle:   ""
date:       2014-02-12 12:00:00
author:     "Ryan Johnson"
header-img: "img/post-bg-06.jpg"
---

Recently, I was assisting a customer with their 5.1 Auto Deploy reference architecture and we ran into a Host Profile compliance issue when the host was existing maintenance mode. Essentially, the SNMP Agent Configuration would continually show non-compliant.

After a few discussions with engineering I identified a workaround after some reproduction effort.

Since the customer was using only SNMPv1 the simplest setting of the SNMP Agent Configuration could be done by executing:

<pre>
esxcli system snmp set -t host1.domain.com@162/public,host2.domain.com/public,host3.domain.com@162/public -e 1
</pre>
 
The results would be:

<pre>
~ # esxcli system snmp get
Authentication: 
Communities: 
Enable: true
Engineid: 00000063000000a100000000 [SYSTEM GENERATED VALUE]
Hwsrc: 
Loglevel: 
Notraps: 
Port: 161
Privacy: 
Remoteusers: 
Syscontact: 
Syslocation: 
Targets: host1.domain.com@162 public,host2.domain.com public,host3.domain.com@162 public
Users: 
V3targets: 
~ #
</pre>

The EngineID is system generated and is required only for SNMPv3; however, it causes an issue with the application and compliance check of a host profile that online needs SNMPv1 configured:

If applied with the EngineID of the reference host it will be marked as compliant in a compliance check.
If the EngineID is set to blank in the host profile the host will be marked at non-compliant in a compliance check.
To work around this issue, it is recommended to set the EngineID to a static value when using SNMPv1. The EngineID is a 5 to 32 hexadecimal string.

Therefore, the reference host could be set with the following configuration or applied to the SNMP Agent Configuration in the host profile manually.

<pre>esxcli system snmp set -c public -E 000000000000000000000000 -t host1.domain.com@162/public,host2.domain.com/public,host3.domain.com@162/public -L zone.domain.com -l info -y indications -e 1
 </pre>
 
Once applied to the host profile, applied to the hosts and then checked for compliance the host will show as compliant.

I have asked that a KB article be published online with the information presented here.