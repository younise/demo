---
layout:         post
title:          "vRealize Suite Lifecycle Manager 1.2 Ports and Protocols, Feature URLs, and Service Account Privledges"
subtitle:       ""
date:           2018-04-24 10:30:00
author:         "Ryan Johnson"
tags:           [SDDC, vRSLCM]
published:      true
---

Behind the scenes in VMware R&D I have been working closely with the product management and engineering team for vRealize Suite Lifecycle Manager to improve the experience and workflows. 

Three questions that I'm often asked are:

1. What ports and protocols does vRealize Suite Lifecycle Manager use for communications?
2. What URLs must be accessible by my organization to use some vRealize Suite Lifecycle Manager Features (e.g. My VMware, Marketplace, Product Updates, and the in-product Compatibility Guide?
3. What permissions are required for a custom role that can be used as a service account for vRealize Suite Lifecycle Manager to vSphere communications.

Well, you're in luck. I can answer this where the documentation currently falls short (I'm working on this...) 

## Ports and Protocols

Below are the ports and protocols used for system-to-system or system-to-service communications:

### vRealize Suite Upstream Communications:
- My VMware = TCP 443
- VMware Solutions Exchange = TCP 443
- Product Updates = TCP 443
- VMware Compatibility Guide = TCP 443

### User to vRealize Suite Lifecycle Manager
- UI and API Gateway = TCP 443
- Secure Shell (Disabled by Default) = TCP 22

### vRealize Suite Lifecycle Manager to vRealize Suite Product Communications
- vRealize Automation Appliance = TCP 5480, TCP 443, 2TCP 2
- vRealize Automation IaaS Servers = TCP 443
- vRealize Automation IaaS Proxy Agents = TCP 443
- vRealize Orchestrator - TCP 8281 (Embedded for Content Management)
- vRealize Business for Cloud Appliance/Collector = TCP 5480, TCP 443, TCP 22
- vRealize Operations Analytics Node = TCP 443, TCP 22
- vRealize Operations Remote Collector = TCP 443, TCP 22
- vRealize Log Insight Appliance Node = TCP 443, TCP 9543, TCP 16520, TCP 22
- Identity Manager Appliance = TCP 8443, 4TCP 43

### vRealize Suite Lifecycle Manager to vSphere Communications
- vCenter Server = TCP 443

### vRealize Suite Lifecycle Manager to Content Management Endpoint
- Content Management Endpoint (e.g. GitLab) = TCP 443

## URLs for Feature Support

The following are defined in /opt/vmware/vrlcm/config/lcm.properties config:
- https://vapp-updates.vmware.com
- https://my.vmware.com
- https://myvmware.com
- https://apigw.vmware.com
- https://vconnect.vmware.com
- https://simservice.vmware.com
- https://marketplace.vmware.com

Note, however, that Akamai is accessed as the CDN when downloading products and AWS Cloudfront accessed for the marketplace downloads. 

The Akamai URL is provided in runtime by My VMware and depends on your region. Hence you can use the patterns, as follows:

- apigw.vmware.com
- download2.vmware.com
- *.akamaiedge.net

The Marketplace patterns are as follows:

- marketplace.vmware.com
- drd6c1w7be.execute-api.us-west-1.amazonaws.com

The Marketplace intermediate URLs are region specific and may be different at runtime.

## Service Account Role and Privledges Permissions

Simply define a role on labeled "vRealize Suite Lifecycle Manager User" with the following privileges and assight a user to the role on your management vCenter Server instance. For example, svc-vrslcm-vsphere@tenthirtyam.local.

- Datastore.Allocate Space
- Datastore.Browse Datastore
- Datastore.Update Virtual Machine Files
- Host.Local.Operations.Add Host to vCenter
- Host.Local.Operations.Create Virtual Machine
- Host.Local.Operations.Delete Virtual Machine
- Host.Local.Operations.Reconfigure Virtual Machine
- Network.Assign Network
- Resource.Assign vApp to Resource Pool
- Resource.Assign Virtual Machine to Resource Pool
- vApp.* (All privileges.)
- Virtual Machine.* (All privileges.)

In vRealize Suite Lifecycle Manager, simply use this service account for the communications to the management vCenter Server endpoints across your environments. Viola!