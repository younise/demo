---
layout:         post
title:          "A Reference Design for vRealize Network Insight on Cloud Foundation"
subtitle:       ""
date:           2020-12-06 10:30:00
author:         "Ryan Johnson"
tags:           [SDDC, vRNI, VVD, VCF]
published:      true
---

In the Summer of 2020 I spent quite a bit of my spare time digging in and learning adjacent product and cloud technologies. One of the products that landed in my view was vRealize Network Insight. At the same time, my intent was to eventually include this in a VMware Validated Design / VMware Cloud Foundation general release. While the content that I authored during my exploration was not prioritized for an official release, the design was in an `Early Access` format for a Reference Design.

As a result, I'm happy to share the reference design that follows the same detailed design approach we use in the VMware Validated Design. The design is author with the default design objective to support up to 10K virtual machines and 2M flows but can be scaled up, as needed. In addition, the design can support single-region and future expansion to multi-region (or multi-instance) Cloud Foundation.

<br/>

**Applicability**

Product | Interoperability
---------|----------
vRealize Network Insight 5.3 | Cloud Foundation 4.0.x _(vRealize Suite Lifecycle Manager 8.1 externally managed)_
vRealize Network Insight 5.3 | Cloud Foundation 4.1.x _(vRealize Suite Lifecycle Manager 8.1 in integrated Cloud Foundation-mode)_
vRealize Network Insight 6.0 | Cloud Foundation 4.1.x _(vRealize Suite Lifecycle Manager 8.2 externally managed)_

<br/>

## **vRealize Network Insight Design**

The deployment of vRealize Network Insight is a single platform node that is deployed in the protected region of the SDDC, and a single collector node in each region. The components run on the management cluster in each region.

### Logical Design of vRealize Network Insight

vRealize Network Insight integrates with NSX Data Center to deliver intelligent operations for software-defined networking. The key features and use cases of vRealize Network Insight include 360-degree visibility and end-to-end troubleshooting across converged infrastructure and physical and virtual networks, performance optimization and topology mapping, physical switch vendor integration, advanced monitoring to ensure health and availability of NSX Data Center, rich traffic analytics, change tracking, planning, and monitoring of micro-segmentation, and recommended practice compliance checking.

Figure: Logical Design of a Multi-Region Deployment of vRealize Network Insight

    <img src="https://tenthirtyam.org/images/vrni-logical-design.png">
    
    <br/>

The vRealize Network Insight logical components include the following:

<br/>

Table: vRealize Network Insight Logical Components

**Component** | **Single Availability Zone** | **Multiple Availability Zones**
---------|----------|---------
Platform Node | - One extra-large size node, by default. <br/> - Three or more extra-large size nodes, provides a scale-out capacity of up to 10 nodes, as required. | - One extra-large size node, by default. <br/> - Three or more extra-large size nodes, provides a scale-out capacity of up to 10 nodes, as required.
Collector Node | One large size node, by default. | One large size node, by default.
Data Sources | - vCenter Server <br/> - NSX-T Data Center <br/> - vRealize Log Insight <br/> - Additional Network Solutions or Public Clouds | - vCenter Server <br/> - NSX-T Data Center <br/> - vRealize Log Insight <br/> - Additional Network Solutions or Public Clouds

<br/>

vRealize Network Insight communicates with the vCenter Server, NSX-T Manager instances, and vRealize Log Insight clusters in all regions of the SDDC to collect data, events, and flows that are presented through various views._

<br/>

#### **Logical Design**

In a multi-region SDDC, you deploy a vRealize Network Insight configuration that consists of the following entities.

- A single-node extra-large size vRealize Network Insight platform node in Region A. This topology provides a scale-out capacity of up to 10 nodes in a cluster.
- A single large size vRealize Network Insight collector node in each region. The collector node communicates directly with the data sources and the vRealize Network Insight platform nodes or cluster.

Each region contains its own vRealize Network Insight collector node whose role is to collect data in each region and send the data to the vRealize Network Insight platform node or cluster.

This configuration supports the failover of the vRealize Network Insight platform topology using Site Recovery Manager and vSphere Replication. In the event of a disaster, Site Recovery Manager migrates initialized the recovery of the vRealize Network Insight platform topology in the failover region.

<br/>

### Deployment Specification of vRealize Network Insight

_The deployment specification details the design decisions covering physical design and sizing for vRealize Network Insight._

#### **Deployment Model of vRealize Network Insight**

The vRealize Network Insight platform deployment contains the nodes that analyze and store data from the data sources. You deploy a configuration of the platform nodes that satisfies the requirements for the number of virtual machines and network flows in the design objectives of this design.

**Deployment Type**

Deploy the vRealize Network Insight platform nodes in the cross-region application virtual network. A vRealize Network Insight platform node can be extended to a cluster that consists of a minimum of three platform nodes. The clustering is a scale-out solution and not a high-availability solution. All platform nodes in a vRealize Network Insight cluster must be online and operational to function at the desired scale. The loss of the first, or primary, vRealize Network Insight platform node in the cluster will result in an outage of the cluster. The loss of a secondary vRealize Network Insight platform node in the cluster will result in a degradation of the scale but the cluster will continue to function.

In the design, you deploy the vRealize Network Insight collector nodes on the first vSphere cluster in the management domain in the region. With this configuration, you can centrally manage data collection across the entire SDDC.

You place the vRealize Network Insight platform nodes in Region A, on a specific virtual network segment. This provides a consistent deployment model for management applications and supports growth to a dual-region design.

vRealize Network Insight is distributed as a virtual appliance in OVA format.

To accomplish this design objective, you deploy or reuse the following components to deploy this operations management solution for the SDDC:

- Cross-region vRealize Suite Lifecycle Manager
- Cross-region Workspace ONE Access cluster
- Supporting infrastructure services, such as Active Directory, DNS, and NTP.

Table: Design Decisions on Deployment of vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|---------|---------
Deploy vRealize Network Insight platform as a single node on the first cluster in the management domain in Region A. | Provides the scale capacity required for monitoring up to 10,000 virtual machines and 2,000,000 flows per day. <br/><br/> Supports scale-out to a vRealize Network Insight cluster. | None.
Scale-out vRealize Network Insight as a cluster of three nodes on the first cluster in the management domain in Region A if the scale capacity required is greater than the number of virtual machines and flows per day in the design objectives. | Provides the scale capacity required for monitoring greater than the number of virtual machines and flows per day in the design objectives. <br/><br/> A minimum of three nodes is required to form a cluster. <br/> The large size is the smallest supported to form a cluster. <br/> Supports scale-up with additional platform nodes. | You must identically size all vRealize Network Insight platform nodes which increases the resource requirements in the SDDC. <br/><br/> A vRealize Network Insight cluster provides the ability to scale-up support for the maximum virtual machines and flows. The cluster does not provide native high availability with the clustering implementation; therefore, vSphere DRS anti-affinity rules are not required. <br/><br/> All platform nodes in the vRealize Network Insight cluster must be online and operational to function at the desired scale. The loss of the first, or primary, vRealize Network Insight platform node in the cluster will result in an outage of the cluster. The loss of a secondary vRealize Network Insight platform node in the cluster will result in a degradation of the scale but the cluster will continue to function.
Deploy a single vRealize Network Insight collector node on the first cluster in the management domain in each region. | Provides the scale capacity required for monitoring of up to the number of virtual machines and flows per day in the design objectives. | vRealize Network Insight collector nodes cannot be highly available or set as a collector group.
Use vRealize Suite Lifecycle Manager to deploy vRealize Network Insight. | Allows vRealize Suite Lifecycle Manager the ability to provide life cycle management of vRealize Network Insight. | You must deploy vRealize Suite Lifecycle Manager.
Protect all vRealize Network Insight nodes by using vSphere High Availability. | Supports the availability objectives for vRealize Network Insight without requiring manual intervention during a failure event | None
When using two availability zones in Region A, add the vRealize Network Insight nodes to the primary availability zone VM group, `sfo-m01-cl01\_primary-az-vmgroup`. | Ensures that, by default, the vRealize Network Insight nodes are powered on within the primary availability zone hosts group. | If vRealize Network Insight is deployed after the creation of the stretched cluster for management domain availability zones, the VM group for the primary availability zone virtual machines must be updated to include the vRealize Network Insight nodes.
Place the cross-region vRealize Network Insight platform nodes in a dedicated virtual machine folder in Region A, `xreg-m01-fd-vrni`. | Provides organization of the vRealize Network Insight platform nodes in the management domain inventory | You must create the virtual machine folder.
Place the region-specific vRealize Network Insight collector nodes in a dedicated virtual machine folder in Region A, `sfo-m01-fd-vrnic`. | Provides organization of the vRealize Network Insight collector nodes in the management domain inventory. | You must create the virtual machine folder.

**Sizing Compute and Storage Resources**

You size resources for vRealize Network Insight to provide enough resources to accommodate the analytics operations the expected number of virtual machines and network flows in the SDDC.

Deploying one extra-large size vRealize Network Insight platform node satisfies the requirement for monitoring the expected number of objects based on the following assumptions.

<br/>

Table: Design Objectives

**Number of Virtual Machines** | **Flows per Day** | **Total Flows**
---------|----------|---------
10,000 | 2 Million | 8 Million

<br/>

This design uses an extra-large size for the vRealize Network Insight Platform nodes and a large size for the vRealize Network Insight Collector nodes.

vRealize Network Insight requires and deploys with a 100% CPU and memory reservation according to the following tables.

<br/>

Table: vRealize Network Insight Platform Node CPU, Memory, and Storage Resources

**Attribute** | **Standard Specification** | **Cluster Specification**
---------|----------|---------
Appliance Size | Extra-Large | Extra-Large
Number of nodes | 1 | 3
CPU | Varies for the physical CPU core speed: <br/> - 15 x 2.6 GHz <br/> - 18 x 2.3 GHz <br/> - 20 x 2.1 GHz | Varies for the physical CPU core speed: <br/> - 16 x 2.6 GHz <br/> - 18 x 2.3 GHz <br/> - 20 x 2.1 GHz
Memory | 64 GB | 192 GB
Storage | 2 TB | 6 TB

<br/>

Table: vRealize Network Insight Collector Node CPU, Memory, and Storage Resources

**Attribute** | **Appliance**
---------|----------
Appliance Size | Large
CPU | Varies for the physical CPU core speed: <br/> - 8 x 2.6 GHz <br/> - 9 x 2.3 GHz <br/> - 10 x 2.1 GHz
Memory | 16 GB
Storage | 200 GB
Number of VMs | 10,000
Flows per Day | 5 million

<br/>

To achieve a greater number of virtual machines and network flows, you can deploy multiple vRealize Network Insight collector nodes. At least one vRealize Network collector node is required.

<br/>

Table: Design Decisions on Sizing of vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Deploy the vRealize Network Insight platform node as an extra-large size appliance. | You must ensure a minimum host memory size to handle the increased performance that is the result of stretching NUMA node boundaries. <br/><br/> Provides enough capacity to support up to the number of virtual machines and flows per day in the design objectives. | Requires a 100% vCPU and Memory reservation for each vRealize Network Insight platform node - you must ensure that the first cluster in the management domain is sufficiently sized to support vRealize Network Insight. <br/><br/> When you exceed the number of virtual machines and flows per day in the design objectives, you must scale-out to a cluster.
Scale-out the vRealize Network Insight platform node to a cluster with a minimum of three platform nodes If the number of SDDC objects will exceed the number of virtual machines and flows per day in the design objectives. | Ensures that vRealize Network Insight has enough capacity to meet the SDDC growth. Platform cluster capacity is covered by the size of the vRealize Network Insight platform cluster, which is independent of the vRealize Network Insight collector nodes. | The capacity of the physical ESXi hosts must be enough to accommodate virtual machines that require 64 GB RAM without bridging NUMA node boundaries.
Deploy each vRealize Network Insight collector node as a large-size appliance. | Provides enough capacity to support up to the number of virtual machines and flows per day in the design objectives. |Requires a 100% vCPU and Memory reservation for each vRealize Network Insight collector node -- you must ensure that the first cluster in the management domain is sufficiently sized to support vRealize Network Insight. <br/><br/> When you exceed 10,000 virtual machines and 5,000,000 million flows per day, you must scale-up the collector nodes or add additional collectors and distribute the data sources.
Scale-up the vRealize Network Insight collector node to extra-large If the number of SDDC objects will exceed the number of virtual machines and flows per day in the design objectives; add additional collector nodes as required. | Ensures that vRealize Network Insight has enough capacity to meet the SDDC growth. | None.

<br/>

#### Data Sources Design in vRealize Network Insight

vRealize Network Insight uses data sources to collect events, metrics, flows, etc. These data sources allow for monitoring specific VMware Software-defined Data Center components and supported physical network solutions.

vRealize Network Insight includes the following data sources:

- VMware Cloud Foundation
  - vCenter Server
  - NSX Data Center
  - vRealize Log Insight
- VMware Cloud on AWS
- Public Clouds
- Kubernetes
- Flows
- Firewalls
- Converged Infrastructures
- WAN
- Routers & Switches
- Load Balancers
- DNS
- CMDB

<br/>

Table: Design Decisions on the Data Sources for vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
On each vRealize Network Insight collector node, configure a vCenter Server data source for the management domain and each workload domain in a region. | Provides granular monitoring for vSphere Networking. | You must configure a data source for the management domain and workload domains in each region.
For each vCenter Server data source, enable NetFlow on each vSphere Distributed Switch within the domain. | Provides the collection of network flows via the IPFIX protocol. | For the management domain and workload domains in each region, you must enable the update of the NetFlow settings for each cluster's vSphere Distributed Switch.
On each vRealize Network Insight collector node, configure an NSX-T Data Center data source for the management domain and each workload domain in a region. | Provides granular monitoring for NSX-T Data Center. | You must configure a data source for the management domain and workload domains in each region.
For each NSX-T Data Center data source, enable NetFlow for the distributed firewall. | Provides the collection of network flows via the IPFIX protocol. | <br/> The distributed firewall must be enabled on the NSX-T Manager for the domain. <br/> The service account used to integrate vRealize Network Insight with NSX-T Data Center requires the **Security Engineer** role in the NSX-T Manager for the management and each workload domain.
For each NSX-T Data Center data source, enable latency metric collection. | Provides the collection of latency metrics from NSX Transport Nodes. | Any firewall rule sets from all ESXi hosts to the vRealize Network Insight collector must allow traffic on TCP 1991.
On each vRealize Network Insight collector node, configure a vRealize Log Insight data source for each vRealize Log Insight cluster. | Provides the ability to create, modify, update, or delete operations on an NSX-T security group to be quickly discovered by vRealize Log Insight and forwarded to vRealize Network Insight as events where they will are inspected for security group changes. | The vRealize Log Insight content pack for vRealize Network Insight must be installed on each vRealize Log Insight cluster.

<br/>

**Data Retention for vRealize Network Insight**

Configure retention parameters of vRealize Network Insight according to the company policy for compliance and governance.

vRealize Network Insight data management is configurable with an Enterprise Edition license. The data is divided into the following categories:

<br/>

Table: Data Retention Categories

**Category** | **Minimum Value** | **Maximum Value**
---------|----------|----------
Events  | 1 month (default) | 13 months
Entities and Configuration Data  | 1 month (default) | 3 months
Flows  | 1 month | 1 month
Metrics  | 1 month (default) | 13 months
Miscellaneous Data  | 100 GB | 100 GB

<br/>

Table: Design Decision on Data Retention for vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Use the default retention period of 1 month for vRealize Network Insight | Uses the default data retention for vRealize Network Insight. | If you must retain data for an extended period for compliance, audit, or a customer-specific reason, you configure vRealize Network Insight you must use the Enterprise edition of vRealize Network Insight

<br/>

#### Notifications Design for vRealize Network Insight

You configure notifications in vRealize Network Insight to send event messages.

You configure a mail server to deliver outbound SMTP messages to users about system events.

<br/>

Table: Design Decisions on Notifications for vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Configure vRealize Network Insight to use an outbound SMTP mail server to route notifications for system events. | Integrates vRealize Network Insight system events notifications to users by email to provide an enhanced user experience. | You must maintain an SMTP server.

<br/>

#### Integration of vRealize Network Insight with vRealize Operations Manager

vRealize Network Insight supports integration with vRealize Operations Manager to provide a central location for centralized operations and troubleshooting.

<br/>

Table: vRealize Network Insight Integration Points

**Integration Point** | **Description**
---------|----------
Notification Events | Forward events from vRealize Network Insight to vRealize Operations Manager.
Launch-in-Context | Launch vRealize Network Insight from the vRealize Operation Manager user interface.

<br/>

Table: Design Decisions on Integration of vRealize Network Insight with vRealize Operations Manager

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Enable integration from vRealize Operation Manager to vRealize Network Insight and allow user-defined events to be imported as notifications. | Monitoring and alerting information is sent from vRealize Network Insight to vRealize Operations Manager for centralized operations and troubleshooting. <br/><br/> - Events from vRealize Network Insight to vRealize Operations Manager. <br/><br/> - Enable launch-in-context from vRealize Operation Manager to vRealize Network Insight. | The vRealize Operations Management Pack for vRealize Network Insight must be activated and configured.

<br/>

For information about the design decisions on the service account for the integration of vRealize Network Insight with vRealize Operations Manager, see Service Accounts for vRealize Network Insight.

<br/>

#### Lifecycle Management for vRealize Network Insight

_The lifecycle management design details the design decisions covering the lifecycle management of the vRealize Network Insight._

The vRealize Network Insight is deployed and managed by the cross-region vRealize Suite Lifecycle Manager instance.

For information about the integration of vRealize Network Insight with vRealize Suite Lifecycle Manager, see SDDC Lifecycle Operations Design for vRealize Lifecycle Manager.

<br/>

Table: Design Decisions on Lifecycle Management of vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Use vRealize Suite Lifecycle Manager to perform the lifecycle management of vRealize Network Insight. | vRealize Suite Lifecycle Manager automates the lifecycle of vRealize Network Insight. | You must deploy vRealize Suite Lifecycle Manager.
Disable the Support Tunnel option in vRealize Network Insight. | The support tunnel, which allows the VMware Technical Support to remotely connect to vRealize Network Insight platform nodes and collector nodes over an SSL-secured connection, is only enabled when required for support advanced support assistance. | <br/><br/> You may need to temporarily enable the support tunnel when VMware Technical Support requests access to the deployment for advanced troubleshooting or debugging. <br/><br/> Ensure that the traffic to `support2.ni.vmware.com` on TCP port 443 is allowed.

#### Monitoring and Alerting Design of vRealize Network Insight

_You integrate vRealize Network Insight with vRealize Operations to provide operational visibility._

The integration to vRealize Network Insight from vRealize Operations provides the ability to monitor the health, efficiency, and risks associated with vRealize Network Insight. You can use the integration to:

- View the performance and health of network endpoints.
- Integrate and troubleshoot vRealize Network Insight issues with vRealize Operations.

For information about the direct integration of vRealize Operations Manager with vRealize Network Insight, see Monitoring and Alerting Design in vRealize Operations Manager.

#### Logging Design of vRealize Network Insight

_You integrate vRealize Network Insight with vRealize Log Insight to provide operational visibility._

The integration to vRealize Log Insight from vRealize Network Insight provides the ability to send logs for aggregation and analysis, as needed.

Logging to a vRealize Log Insight instance through the ingestion API is established by updated in the appliance settings in the vRealize Network Insight user interface or by updating the vRealize Log Insight `liagent.ini`.

<br/>

Table: Design Decisions on Logging for vRealize Network Insight

**Design ID** | **Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Configure vRealize Network Insight to use the vRealize Log Insight cluster in Region A as a logging server. |Allows logs from vRealize Network Insight components to be sent to a specific Syslog server. <br/><br/> vRealize Network Insight supports the vRealize Log Insight ingestion API and maintains consistency across vRealize Suite products. | The vRealize Log Insight agent must be configured on each vRealize Network Insight appliance. It is not configurable in the vRealize Network Insight administration UI. 
Set the vRealize Network Insight platform nodes to use the vRealize Log Insight cluster within the primary region, Region A, or instance. | Allows logs from vRealize Network Insight platform nodes and system events to be forwarded to a local vRealize Log Insight cluster. | During a planned failover or planned failover of vRealize Network Insight, you must update the logging endpoint to the vRealize Log Insight cluster in the recovery region or update the DNS record for the endpoint. |
Set each vRealize Network collector node to use the vRealize Log Insight cluster within its local region or instance. | Allows logs from vRealize Network Insight collector nodes to be forwarded to a vRealize Log Insight cluster within its region or instance. | None.

<br/>

#### Data Protection Design for vRealize Network Insight

_To preserve the services and functionality when data or system loss occurs, the design supports the use of data protection._

vRealize Network Insight supports data protection through the creation of consistent image-level backups, using backup software that is based on the vSphere Storage APIs - Data Protection (VADP)

#### Disaster Recovery Design for vRealize Network Insight

_To preserve the monitoring functionality when a disaster occurs, the design of vRealize Network Insight supports failing over a subset of the components between regions. Disaster recovery covers only the vRealize Network Insight Platform nodes. The region-specific vRealize Network Insight Collector nodes remain in the affected region._

When a disaster occurs, you use Site Recovery Manager and vSphere Replication for an orchestrated recovery of the vRealize Network Insight Platform nodes. You do not recover the vRealize Network Insight Collector nodes. vRealize Network Insight Collector nodes only collect data from local components, such as vCenter Server and NSX Manager, which are also not recovered during such an event.

### Network Design of vRealize Network Insight

_For secure access to the UI and API of vRealize Network Insight, you place the platform nodes on the shared cross-region virtual network segment, and you place the remote collector groups on the region-specific virtual network segments._

**Virtual Network Segments**

For secure access and to support future growth to a dual-region design, you deploy the vRealize Network Insight platform nodes on the shared cross-region virtual network segment, and you place the vRealize Network Insight collector nodes on the region-specific virtual network segments.

This network design has the following features:

- The vRealize Network Insight platform nodes are deployed on the same network as the cross-region Workspace ONE Access, vRealize Operations Manager vRealize Automation, and vRealize Suite Lifecycle Manager to provide a consistent deployment model for management applications.
- The vRealize Network Insight collector nodes are deployed on the region-specific network in each region. Using the region-specific virtual network segment co-locates collection with the region-specific data sources.
- vRealize Network Insight has routed access to the VLAN-backed management network through the NSX-T Data Center Tier-0 Gateway.
- Routing to the VLAN-management network, virtual network segments, and external networks are dynamic and are based on the Border Gateway Protocol (BGP).

<br/>

Figure: Network Design of the vRealize Network Insight Deployment

    <img src="https://tenthirtyam.org/images/vrni-network-dual-region.png">
    
    <br/>

vRealize Network Insight does not require an external load-balancer to distribute requests. User access (UI and API) for vRealize Network Insight should be accessed only from the first platform node in a vRealize Network Insight cluster.

<br/>

Table: Design Decisions on the Virtual Network Segments for vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Place the vRealize Network Insight platform nodes on the cross-region virtual network segment, `xregion-m01-seg01`. | Provides a consistent deployment model for management applications and the potential to extend to a dual-region design. | You must use an implementation in NSX-T Data Center to support this networking configuration.
Place the vRealize Network Insight collector nodes on the region-specific virtual network segment, that is, `local-region-a-m01-seg01` for Region A and, `local-region-b-m01-seg01` for Region B. | Supports data source collection in each region. | You must use an implementation in NSX-T Data Center to support this networking configuration.

<br/>

**IP Addressing**

Allocate a statically assigned IP address and hostname from the cross-region network segment to the vRealize Network Insight platform virtual appliances, and a statically assigned IP address and hostname from the region-specific network segment to the vRealize Network Insight collector virtual appliances.

**IP Subnets for vRealize Network Insight**

You can allocate the following example subnets for the vRealize Network Insight deployment.

<br/>

Table: Example IP Subnets for vRealize Network Insight

**vRealize Network Insight Node Type** | **IP Subnet**
---------|----------
Platform nodes in Region A | 192.168.11.0/24
Collector nodes in Region A | 192.168.31.0/24
Collector nodes in Region B | 192.168.32.0/24

<br/>

Table: Design Decisions on the IP Addressing for vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Allocate a statically assigned IP address and hostname from the cross-region network segment to the vRealize Network Insight platform nodes in the management domain. | Using statically assigned IP addresses ensures stability across the SDDC and makes it simpler to maintain and easier to track. | Requires precise IP address management.
Allocate a statically assigned IP address and hostname from the region-specific network segment to the vvRealize Network Insight collector nodes in the management domain. | Using statically assigned IP addresses ensures stability across the SDDC and makes it simpler to maintain and easier to track. | Requires precise IP address management.

<br/>

**Name Resolution**

The FQDNs of the vRealize Network Insight nodes follow a certain domain name resolution:

- The IP addresses of the vRealize Network Insight platform virtual appliances are associated with names whose suffix is set to the root domain (e.g. rainpole.io).

From the public network, users access vRealize Network Insight by using the FQDN of the first vRealize Network Insight platform node.

- The IP addresses of the vRealize Network Insight collector virtual appliances are associated with names whose suffix is set to the region-specific domain, (e.g. sfo.rainpole.io. and lax.rainpole.io).

<br/>

Table: Example FQDNs for the vRealize Network Insight Nodes

**FQDN** | **Node Type** | **Region** | **Failed Over To Region B**
---------|----------|----------|----------
`xreg-vrni01a.rainpole.io` | First vRealize Network Insight platform node. (Default) | Region A | X |
`xreg-vrni01b.rainpole.io` | Second vRealize Network Insight platform cluster node. (Scale-Out) | Region A | X |
`xreg-vrni01c.rainpole.io` | Third vRealize Network Insight platform cluster node. (Scale-Out) | Region A | X |
`xreg-vrni01n.rainpole.io` | Additional vRealize Network Insight platform cluster nodes. (Scale-Out) | Region A | X |
`sfo-vrnic01a.sfo.rainpole.io` | First vRealize Network Insight collector node. (Default) | Region A | |
`sfo-vrnic01n.sfo.rainpole.io` | Additional vRealize Network Insight collector node, as required. | Region A | |
`lax-vrnic01a.lax.rainpole.io` | First vRealize Network Insight collector node. (Default) | Region B | |
`lax-vrnic01n.lax.rainpole.io` | Additional vRealize Network Insight collector nodes, as required. | Region B 

<br/>

Table: Design Decisions on Name Resolution for vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Configure forward and reverse DNS records for all vRealize Network Insight nodes. | All nodes are accessible by using fully qualified domain names instead of by using IP addresses only. | You must provide DNS records for the vRealize Network Insight nodes.

<br/>

**Note** : The design uses an Active Directory forest with two regional Active Directory child domains, so the examples use a hierarchical DNS namespace. However, the design supports the use of a flat DNS namespace.

<br/>

**Time Synchronization**

Time synchronization provided by the Network Time Protocol (NTP) is important to ensure that all components within the SDDC are synchronized to the same time source. Configure the vRealize Network Insight nodes with time synchronization using an internal NTP time source.

<br/>

Table: Design Decisions on Time Synchronization for vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Configure NTP on each vRealize Network Insight appliance. | vRealize Network Insight depends on time synchronization. | None

<br/>

### Information Security and Access Control of vRealize Network Insight

_You protect the vRealize Network Insight deployment by configuring authentication and secure communication with the other components in the SDDC. A dedicated service account is assigned a custom role for communication between vRealize Network Insight and the management solutions in the data center._

#### Identity Management for vRealize Network Insight

You manage access to vRealize Network Insight by assigning users and groups, synchronized to Workspace ONE Access, to vRealize Network Insight roles.

Users can authenticate to vRealize Network Insight by using the following account types:

<br/>

Table: vRealize Network Insight Account Types

**Account Type** | **Description**
---------|----------
Integrated with Workspace ONE Access | Specified users and groups from upstream identity sources are synchronized to vRealize Network Insight through Workspace ONE Access (e.g. Active Directory with Integrated Windows Authentication, Active Directory over LDAP, Active Directory Federation Services).
Imported from an LDAP database | Users can use their LDAP credentials to log in to vRealize Network Insight.
Local user accounts in vRealize Network Insight | vRealize Network Insight performs local authentication using the account information stored in its global database.

<br/>

This design uses Workspace ONE Access for identity management and access control. You enable authentication using Workspace ONE Access to ensure accountability on user access. You can grant both users and groups access to vRealize Network Insight to perform tasks, such as creating and viewing dashboards.

<br/>

Table: Design Decision on Identity Management for vRealize Network Insight

**Design Decision ID** | **Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Enable vRealize Network Insight integration with your corporate identity source by using Workspace ONE Access. | Allows authentication, including multi-factor, to vRealize Network Insight by using your corporate identity source.Allows authorization through the assignment of organization and cloud services roles to enterprise users and groups defined in your corporate identity source. | You must deploy and configure Workspace ONE Access to establish the integration between vRealize Network Insight and your corporate identity sources.
Create a security group in your corporate directory services for the vRealize vRealize Network Insight Administrator role (e.g. `rainpole.io\ug-vrni-admins`) and synchronize the group in the Workspace ONE Access configuration for vRealize vRealize Network Insight. | Streamlines the management of vRealize vRealize Network Insight roles for users. | You must create the security group outside of the SDDC stack.
Assign the enterprise group for vRealize Network Insight administrators (e.g. `rainpole.io\ug-vrni-admins`) the Administrator role. | Provides the following access control features: <br/> - Access to vRealize Network Insight administration is granted to a managed set of individuals that are members of the security group. <br/> - You can introduce improved accountability and tracking organization owner access to vRealize Network Insight. | You must maintain the life cycle and availability of the security group outside of the SDDC stack.
Create a security group in your corporate directory services for the vRealize Network Insight Member role (e.g. `rainpole.io\ug-vrni-users`) and synchronize the group in the Workspace ONE Access configuration for vRealize Network Insight. | Streamlines the management of vRealize Network Insight roles for users. | You must create the security group outside of the SDDC stack.
Assign the enterprise group for vRealize Network Insight read-only users (e.g. `rainpole.io\ug-vrni-users`) the Member role. | Provides the following access control features: <br/> - Access to the vRealize Network Insight user interface is granted to a managed set of individuals that are members of the security group. <br/> - You can introduce improved accountability and tracking organization owner access to vRealize Network Insight. | You must maintain the life cycle and availability of the security group outside of the SDDC stack.
Create a security group in your corporate directory services for the vRealize Network Insight Auditor role (e.g. `rainpole.io\ug-vrni-auditors`) and synchronize the group in the Workspace ONE Access configuration for vRealize Network Insight. | Streamlines the management of vRealize Network Insight roles for users. | You must create the security group outside of the SDDC stack.
Assign the enterprise group for vRealize Network Insight read-only users (e.g. `rainpole.io\ug-vrni-auditors`) the **Auditor** role. | Provides the following access control features: <br/> - Access to the vRealize Network Insight user interface is granted to a managed set of individuals that are members of the security group. <br/> - You can introduce improved accountability and tracking organization owner access to vRealize Network Insight. | You must maintain the life cycle and availability of the security group outside of the SDDC stack. |

<br/>

#### Service Accounts Design for vRealize Network Insight

_You add and configure accounts associated with other solutions for activating the vRealize Network Insight cloud accounts and integrations._

<br/>

Table: Design Decisions on Authorization and Authentication Management for vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Define a custom vCenter Server role for vRealize Network Insight that has the minimum privileges required to support collecting, **vRealize Network Insight-to-vSphere Integration**. | vRealize Network Insight accesses vSphere with the minimum set of permissions that are required to support collection against vSphere endpoints across the SDDC. <br/><br/> Please refer to the [vRealize Network Insight documentation](https://docs.vmware.com/en/VMware-vRealize-Network-Insight/6.0/com.vmware.vrni.install.doc/GUID-B9F6B6B4-5426-4752-B852-B307E49E86D1.html). | You must maintain the permissions required by the custom role. |
Configure a service account in vCenter Server with global permissions, for application-to-application communication from vRealize Network Insight-to-vSphere (e.g. `svc-vrni-vsphere@rainpole.io`) and assign the actions custom role,  **vRealize Network Insight to vSphere Integration**. | Provides the following access control features: <br/> - The adapters in vRealize Network Insight access vSphere with the minimum set of permissions that are required for collection. <br/>- In the event of a compromised account, the accessibility in the destination application remains restricted. <br/>- You can introduce improved accountability in tracking request-response interactions between the components of the SDDC. | You must maintain the life cycle and availability of the service account outside of the SDDC stack. <br/><br/> All vCenter Server instances must be in the same vSphere domain.
Assign global permissions for the vRealize Network Insight-to-vSphere service account (e.g `svc-vrni-vsphere@rainpole.io`). | vRealize Network Insight accesses management and workload domains with the minimum set of permissions that are required to support vCenter Server cloud accounts in the design. <br/><br/> For information about the required minimum permissions, see the [vRealize Network Insight documentation](https://docs.vmware.com/en/VMware-vRealize-Network-Insight/6.0/com.vmware.vrni.install.doc/GUID-F7A2A1D5-E599-4870-ACDD-F9260AFE665B.html). | All vCenter Server instances must be in the same vSphere domain.
Configure each vCenter Server data source to use the service account (e.g. `svc-vrni-vsphere@rainpole.io`). | Enables integration and data collection of all vCenter Server instances in the SDDC in vRealize Network Insight. | You must manage the password life cycle of this cloud account.
Create a service account (e.g. `svc-vrni-nsx@rainpole.io`) in the directory services, and ensure it is synchronized in the regional Workspace ONE Access. | The service account is used for application-to-application communication from vRealize Network Insight to NSX-T Data Center. | You must maintain the life cycle and availability of the service account outside of the SDDC stack. <br/><br/> You must maintain the synchronization and availability of the service account in Workspace ONE Access.
Configure a service account (e.g. `svc-vrni-nsx@rainpole.io`) in NSX-T Manager for application-to-application communication from vRealize Network Insight-to-NSX-T Data Center. | Provides the following access control features: <br/> - vRealize Network Insight accesses NSX-T Data Center with the minimum set of required permissions. <br/> - If there is a compromised account, the accessibility in the destination application remains restricted. <br/> - You can introduce improved accountability in tracking request-response interactions between the vRealize Network Insight and the SDDC cloud account. | You must maintain the life cycle and availability of the service account outside of the SDDC stack.
Assign the  **Security Engineer**  role to the vRealize Network Insight-to-NSX-T service account (e.g `svc-vrni-nsx@rainpole.io`) to the NSX-T Manager for each management and workload domain. | vRealize Network Insight accesses management and workload domains with the minimum set of permissions that are required to support NSX-T Data Center data sources in the design. <br/><br/> For information about the required minimum permissions, see the [vRealize Network Insight documentation](https://docs.vmware.com/en/VMware-vRealize-Network-Insight/6.0/com.vmware.vrni.install.doc/GUID-F7A2A1D5-E599-4870-ACDD-F9260AFE665B.html). <br/><br/> For information about NSX-T Roles see the [NSX-T Data Center documentation](https://docs.vmware.com/en/VMware-NSX-T-Data-Center/3.0/administration/GUID-26C44DE8-1854-4B06-B6DA-A2FD426CDF44.html). | You must configure and manage the integration of Workspace ONE Access with NSX-T Data Center.
Create a service account (e.g. `svc-vrops-vrni@rainpole.io`) in the directory services, and ensure it is synchronized in the cross-region Workspace ONE Access. | The service account is used for application-to-application communication from vRealize Operations Manager to vRealize Network Insight. | You must maintain the life cycle and availability of the service account outside of the SDDC stack. <br/><br/> You must maintain the synchronization and availability of the service account in Workspace ONE Access.
Configure a service account (e.g. `svc-vrops-vrni@rainpole.io`) in vRealize Network Insight with the **Member** role, and assign the for application-to-application communication from vRealize Operations Manager-to-vRealize Network Insight. | Provides the following access control features: <br/> - vRealize Operations accesses vRealize Network Insight with the minimum set of required permissions. <br/> - If there is a compromised account, the accessibility in the destination application remains restricted. <br/> - You can introduce improved accountability in tracking request-response interactions between the vRealize Network Insight and the SDDC cloud account. <br/><br/> For information about the required minimum permissions, see the [vRealize Network Insight documentation](https://docs.vmware.com/en/VMware-vRealize-Network-Insight/6.0/com.vmware.vrni.using.doc/GUID-0594CA91-231F-48D6-A5F9-0B1CD63DC71F.html?hWord=N4IghgNiBcIG4CcCmkCWAvJACA9gByQTABdUcA7AZwB1qQBfIA). | You must maintain the life cycle and availability of the service account outside of the SDDC stack.

<br/>

#### Password Management Design for vRealize Network Insight

To ensure continued access to the vRealize Network Insight appliances you must rotate the post-deployment.

<br/>

Table: Design Decisions on Password Management for vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Rotate the appliance `support` user password on a schedule post-deployment. | The password for the appliance `support` user account does not expire after the initial deployment. | You must manage the password rotation schedule for the `support` user account following your corporate policies and regulatory standards, as applicable. <br/><br/> You must manage the password rotation schedule on the vRealize Network Insight nodes.
Rotate the appliance `consoleuser` user password on a schedule post-deployment. | The password for the appliance `consoleuser` user account does not expire after the initial deployment. | You must manage the password rotation schedule for the appliance `consoleuser` account following your corporate policies and regulatory standards, as applicable. <br/><br/> You must manage the password rotation schedule on the vRealize Network Insight nodes.
Rotate the `admin@local` application user password on a schedule post-deployment. | The password for the default `admin@local` application user account does not expire after the initial deployment. | You must manage the password rotation schedule for the `admin@local application user account following your corporate policies and regulatory standards, as applicable. <br/><br/> You must manage the password rotation schedule on the vRealize Network Insight nodes.

<br/>

#### Certificate Management Design for vRealize Network Insight

Access to all vRealize Network Insight user interfaces requires an SSL connection. By default, vRealize Network Insight uses a self-signed certificate. To provide secure access to the vRealize Network Insight user interface, replace the default self-signed certificate with a CA-signed certificate.

<br/>

Table: Design Decisions on Certificates for vRealize Network Insight

**Design Decision** | **Design Justification** | **Design Implication**
---------|----------|----------|----------
Use a CA-signed certificate containing the vRealize Network Insight platform and collector nodes in the SAN attributes, when deploying vRealize Network Insight. | Configuring a CA-signed certificate ensures that the communication to the externally facing Web UI and API for vRealize Network Insight, and cross-product, is encrypted. | Using CA-signed certificates from a certificate authority might increase the deployment preparation time as certificate requests are generated and delivered. <br/><br/> Each time a node is added the certificate must be replaced to include the new node.
Use SHA-2 or higher algorithm when signing certificates. | The SHA-1 algorithm is considered less secure and has been deprecated. | Not all certificate authorities support SHA-2.