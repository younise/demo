---
layout:         post
title:          "vRealize Suite 2019 (8.1) Account Expirations and Password Requirements"
subtitle:       ""
date:           2020-07-08 10:30:00
author:         "Ryan Johnson"
tags:           [SDDC, vRealize Suite]
published:      true
---

A quick post to share some handy content on the account expidations and password required across vRealize Suite 2019 (8.1) based on some recent work I've done on the VMware Validated Design 6.0.x release. Enjoy!

Table: Users and Password Expirations

| **Appliance** | **Version** | **Application User** | **Default Expiration** | **Interactive User** | **Default Expiration** | **SSH User** | **Default Expiration** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| vRSLCM | 8.1 | admin@local | Never | root | 365 days | root | 365 days |
| vRLI | 8.1 | Admin | Never | root | 365 days | root | 365 days |
| vROPS | 8.1 | admin | Never | admin | 365 days | root | 365 days |
| vRA | 8.1 | N/A | N/A | root | Never | root | Never |
| vRNI | 5.2 | admin@local | Never | admin@local | Never | support and consoleuser | Never |

## vRealzie Suite Lifecycle Manager 8.1

### root Appliance User:

- Must be at least 8 characters.
- No complexity enforced.

### admin@local Application User:

- Between 8 and 16 characters.
- At least one uppercase character.
- At least one lowercase character.
- At least one numerical digit.
- At least one special character limited to !@#$%^&amp;\*&quot;.

## vRealize Automation 8.1

### root Appliance User:

- minimum one upper case.
- one lower case.
- one numbee.
- one special character. Special characters can be !@#$%^&amp;\*(). Colon(:) is not supported

## vRealize Operations 8.1

### admin Application User:

- Should contain at least 8 characters.
- Should contain at least one numerical character.
- Must not match user name.
- Should contain at least one lower case and one upper case character.
- Should contain at least one special characters such as !, @, #, $, %, &amp;, ^ and \*.

### root Appliance User:

- Any Unix allowed password

### admin Application User:

- Any Unix allowed password

## vRealize Log Insight 8.1.1

The default root and admin passwords are blank. You must change the password when you log in to the vRealize Log Insight for the first time.

### root Appliance User and admin Application User:

- Must consist of at least eight characters,
- Must include at least one upper case letter,
- One lower case letter,
- One digit
- One special character.
- You cannot repeat the same character more than four times
- Avoid nonstandard special characters such as ^, %, \_, &#39;, and &quot;

## vRealize Network Insight 5.2

### admin@local Application User:
- 8 to 100 characters
- At least 1 alphabet
- At least 1 number
- Allowed special characters: ?!@#$%^&amp;\*\_

### support Appliance SSH User:

- Any Unix allowed password
- No quotes

### consoleuser Appliance SSH CLI Restricted User:

- Any Unix allowed password
- No quotes