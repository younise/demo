---
layout:     post
title:      "VMware vCloud Automation Center 6 Authentication Workaround in a Complex Multi-domain Active Directory Domain Services Forest"
subtitle:   ""
date:       2014-02-26 12:00:00
author:     "Ryan Johnson"
header-img: "img/post-bg-06.jpg"
---

In vCloud Automation Center 6.0 ("vCAC") there was an authentication issue for some implementations. Users that belonged to "a large number of groups" or belonged to groups with "large group names" would increases the size of the SAML token and authentication into vCAC would fail. Essentially, the issue was related to the the maximum header size for vCloud Automation Center server HTTP requests in which the token is always included. It was limited to 8K and could not be increased. When a header exceeded 8K the system was unable to fulfill HTTP requests.

This was addressed in vCloud Automation Center 6.0.1; however, some customers continue to have authentication issues after upgrading to vCAC 6.0.1 and addressing the limitation of the header size for HTTP requests.

Many enterprises have extensive directory services implementations - multiple forests, domains, trusts, group nesting, universal groups, etc - and those customers who may have previously seen the issue above may continue to see authentication issues even after upgrading to 6.0.1 and adjusting the header size above 8K. When authenticating the LDAP client for vCAC may hit referral exceptions when retrieving the results of complex nested groups. As such, SSO may not redirect back to vCAC and fail to authenticate the user.

To workaround this issue, a customer can modify the SSO Identity Source to point to an Active Directory Global Catalog Server (port 3268.) A designated Microsoft Active Directory global catalog is a distributed data repository that contains a searchable, partial representation of every object in every domain in a multi-domain Active Directory Domain Services forest. Searches that are directed to the global catalog are faster because they do not involve referrals to different domain controllers and will thereby not ht the referral exception and authenticate users through vCAC.