---
layout:         page
title:          "VMware Validated Designs"
description:    "ITAC 1.0 Planning and Preparation"
published:      true
categories:     []
tags:           []
---
Version History

| Date        | Ver. | Author     | Description                                                             | Reviewers |
|-------------|------|------------|-------------------------------------------------------------------------|-----------|
| 15-Feb-2016 | 1.0  | ISBU / PSE | General Availability of VMware Validated Design for IT Automation Cloud | Tech Pubs |

© 2016 VMware, Inc. All rights reserved. This product is protected by U.S. and international copyright and intellectual property laws. This product is covered by one or more patents listed at [http://www.vmware.com/download/patents.html](http://www.microsoft.com/).

VMware is a registered trademark or trademark of VMware, Inc. in the United States and/or other jurisdictions. All other marks and names mentioned herein may be trademarks of their respective companies.

VMware, Inc.
3401 Hillview Avenue
Palo Alto, CA 94304
www.vmware.com

Contents

[1. Purpose and Assumptions 5](#_Toc443067838)

[2. Software Requirements 6](#software-requirements)

[2.1 VMware Software 6](#vmware-software)

[2.2 VMware Scripts and Tools 7](#vmware-scripts-and-tools)

[2.3 Third-Party Software 8](#_Toc443067842)

[3. External Service Dependencies 9](#external-service-dependencies)

[3.1 Active Directory (AD) 9](#active-directory-ad)

[3.2 Dynamic Host Configuration Protocol (DHCP) 10](#dynamic-host-configuration-protocol-dhcp)

[3.3 DNS 10](#dns)

[3.4 NTP 11](#ntp)

[3.5 SMTP Mail Relay 11](#smtp-mail-relay)

[3.6 Certificate Authority (CA) 11](#certificate-authority-ca)

[3.7 FTP Server 12](#ftp-server)

[3.8 Windows Host Machine 12](#windows-host-machine)

[4. Physical VLANs, IP Subnets and Application Virtual Networks 13](#physical-vlans-ip-subnets-and-application-virtual-networks)

[4.1 VLAN IDs and IP Subnets for System Traffic 13](#vlan-ids-and-ip-subnets-for-system-traffic)

[4.2 Names and IP Subnets of Application Virtual Networks 15](#names-and-ip-subnets-of-application-virtual-networks)

[5. DNS Names 16](#dns-names)

[6. Time Synchronization 28](#time-synchronization)

[6.1 Requirements for Time Synchronization 28](#requirements-for-time-synchronization)

[6.2 Configure NTP-Based Time Synchronization on Windows Hosts 29](#configure-ntp-based-time-synchronization-on-windows-hosts)

[7. Active Directory Users and Groups 30](#active-directory-users-and-groups)

[7.1 Active Directory Administrator Account 30](#active-directory-administrator-account)

[7.2 Active Directory Groups 30](#active-directory-groups)

[7.3 Universal Groups in the Parent Domain 30](#universal-groups-in-the-parent-domain)

[7.4 Global Groups in the Child Domains 31](#global-groups-in-the-child-domains)

[7.5 Active Directory Users 32](#active-directory-users)

[8. NFS Exports for Management Components 34](#nfs-exports-for-management-components)

[9. Virtual Machine Template Specifications 35](#virtual-machine-template-specifications)

<span id="_Toc84903945" class="anchor"><span id="_Toc133902856" class="anchor"><span id="_Toc167126097" class="anchor"><span id="_Toc149503111" class="anchor"><span id="_Toc443067838" class="anchor"></span></span></span></span></span>Purpose and Assumptions
=================================================================================================================================================================================================================================================================

The *VMware Validated Design for IT Automation Cloud Installation and Configuration Procedures* document provide step-by-step instructions for installing, configuring, and operating a software-defined data center (SDDC) based on a VMware Validated Design called IT Automation Cloud.

It does not cover step-by-step instructions for performing all of the required post-configuration tasks, as these are often dependent on the customer requirements.

For easier consumption, these installation and configuration procedures have been broken down into a collection of smaller documents as defined in the table below:

Table . Installation and Configuration Procedures Document Set

| Document Name                | Description                                                                                                                                                                                 |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.  Planning and Preparation

 **(This Document)**           | Detailed information surrounding the requirements of software, tools and external services required to succesfully implement the VMware Validated Design for IT Automation Cloud platform.  |
| 1.  Deployment of Region A   | Step-by-step instructions for installing and configuring all components deployed within Region A of the VMware Validated Design for IT Automation Cloud platform.                           |
| 1.  Deployment of Region B   | Step-by-step instructions for installing and configuring all components deployed within Region B of the VMware Validated Design for IT Automation Cloud platform.                           |
| 1.  Operational Guidance     | Step-by-step instructions for performing operational tasks such as monitoring, alerting and business continuity operations of the VMware Validated Design for IT Automation Cloud platform. |

The documents are written with the assumption that the reader that uses these procedures is already familiar with the products. It is not intended for those that have no prior knowledge of the concepts and terminology.<span id="_Toc314053130" class="anchor"><span id="_Toc314056610" class="anchor"><span id="_Toc314053132" class="anchor"><span id="_Toc314056612" class="anchor"><span id="_Toc314053134" class="anchor"><span id="_Toc314056614" class="anchor"><span id="_Ref313978452" class="anchor"><span id="_Ref313981320" class="anchor"><span id="_Toc194992742" class="anchor"></span></span></span></span></span></span></span></span></span>

Before you start deploying the components of the VMware Validated Design, you must set up an environment that has a specific compute, storage and network configuration, and that provides services to the components of the SDDC. 

Software Requirements
=====================

To implement the SDDC from this VMware Validated Design (VVD), you must download and license the following VMware and third-party software.

VMware Software
---------------

Download and license the following software VMware products.

Table . VMware Software Required

| SDDC Layer             | Product Group                           | Product Item                                             | Product Version |
|------------------------|-----------------------------------------|----------------------------------------------------------|-----------------|
| Virtual Infrastructure

                         

                         

                         

                         

                         | VMware vSphere<sup>®</sup>              

                                                                   

                                                                   

                                                                   | VMware ESXi™                                             | 6.0 U1b         |
|                        |                                         | VMware vCenter<sup>®</sup> Server Appliance™ (VIMISO)    | 6.0 U1          |
|                        |                                         | VMware Virtual SAN™                                      | 6.0 U1          |
|                        |                                         | VMware vSphere Replication™                              | 6.1             |
|                        | VMware Site Recovery Manager™           | VMware Site Recovery Manager                             | 6.1             |
|                        | VMware NSX<sup>®</sup> for vSphere      | NSX for vSphere                                          | 6.2.1           |
| Cloud Management       

                         

                         

                         | VMware vRealize<sup>®</sup> Automation™

                                                                   

                                                                   

                                                                   | vRealize Appliance                                       | 6.2.3           |
|                        |                                         | vRealize Identity Appliance                              | 6.2.3           |
|                        |                                         | vRealize Orchestrator™                                   | 6.0.3           |
|                        |                                         | vRealize Orchestrator Plug-In for NSX                    | 1.0.2           |
| Service Management     

                         

                         

                         

                         

                         

                         

                         

                         | VMware vRealize Operations Manager™     

                                                                   

                                                                   

                                                                   

                                                                   | vRealize Operations Manager Appliance                    | 6.1.0           |
|                        |                                         | Management Pack for NSX for vSphere                      | 2.0             |
|                        |                                         | Management Pack for vRealize Log Insight                 | 1.0             |
|                        |                                         | Management Pack for vRealize Automation                  | 1.0.1           |
|                        |                                         | Management Pack for Storage Devices                      | 6.0.2           |
|                        | VMware vRealize Log Insight™            

                                                                   

                                                                   

                                                                   | vRealize Log Insight                                     | 3.0             |
|                        |                                         | NSX for vSphere Content Pack                             |                 |
|                        |                                         | vRA 6.1+ and Log Insight Content Pack                    |                 |
|                        |                                         | vRealize Operations Manager Content Pack for Log Insight |                 |
| Business Continuity    | VMware vSphere Data Protection™         | vSphere Data Protection                                  | 6.1             |

VMware Scripts and Tools
------------------------

Download the following scripts and tools that this VMware Validated Design uses for SDDC implementation.

Table . VMware Scripts and Tools Required

| SDDC Layer       | Product Group       | Script/Tool                  | Download Location                  | Description                                                                                                                                         |
|------------------|---------------------|------------------------------|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Cloud Management

                   | vRealize Automation

                                         | certgen.sh script            | <http://kb.vmware.com/kb/2107816>  | Script for automated generation of a Certificate Signing Request (CSR) for CA-signed SSL certificates.                                              |
|                  |                     | PostgreSQL clustering script | <http://kb.vmware.com/kb/2108923>  | Script to synchronize and replicate the PostgreSQL database on the vRealize Appliance instances to enable high availability mode of the appliances. |

<span id="_Toc442702964" class="anchor"><span id="_Toc443067842" class="anchor"></span></span>Third-Party Software
------------------------------------------------------------------------------------------------------------------

Download and license the following third-party software products.

Table . Third-Party Software Required

| SDDC Layer             | Required by VMware Component                                                                    | Vendor    | Product Item                                                                   | Product Version                                                           |
|------------------------|-------------------------------------------------------------------------------------------------|-----------|--------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| Virtual Infrastructure

                         | Windows host that is connected to the ESXi management network and has access to the data center | Microsoft | Windows OS that is supported for the vSphere Client 6.0 U1.                    
                                                                                                                                        See VMware Knowledge Base article [2100436](http://kb.vmware.com/kb/2100436).   | Version of the Windows OS that is supported for the vSphere Client 6.0 U1 |
|                        | VMware Site Recovery Manager                                                                    | Microsoft | Windows 2012 R2 Standard                                                       | Windows Server 2012 R2 Update (x64)                                       |
| Cloud Management       

                         

                         

                         

                         

                         | vRealize Automation                                                                             | Microsoft | Windows 2012 R2 Standard                                                       | Windows Server 2012 R2 Update (x64)                                       |
|                        |                                                                                                 | Microsoft | SQL Server 2012                                                                | SQL Server 2012 Enterprise Edition with Service Pack 2 (x64)              |
|                        |                                                                                                 | Microsoft | NTRights.exe                                                                   | Windows Server 2003 Resource Kit Tools                                    |
|                        |                                                                                                 | Oracle    |  Java 7 U67                                                                    | Java SE Runtime Environment 7 Update 67                                   |
|                        |                                                                                                 |           | PuTTY                                                                          | beta 0.64                                                                 |
|                        |                                                                                                 | Redhat    | Red Hat Enterprise Linux 6.7                                                   | Red Hat Enterprise Linux 6.7 (x64)                                        |

 

External Service Dependencies
=============================

You must provide a set of external services before you deploy the components of the VMware Validated Design (VVD).

Active Directory (AD)
---------------------

This VVD uses Microsoft Active Directory for authentication and authorization to resources within the rainpole.local domain. For a multi-region deployment, you use a domain and forest structure to store and manage Active Directory objects per region. 

Table . **Requirements for the Active Directory Service**

| Requirement                       | Domain Instance                 | Domain Name                                                                                                                                                          | Description                                                                                                                                                                         |
|-----------------------------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Active Directory configuration    | Parent Active Directory         | rainpole.local                                                                                                                                                       | Contains Domain Name System (DNS) server, time server, and universal groups that contain global groups from the child domains and are members of local groups in the child domains. |
|                                   | Region-A child Active Directory | sfo01.rainpole.local                                                                                                                                                 | Contains DNS records that replicate to all DNS servers in the forest. This child domain contains all SDDC users, and global and local groups.                                       |
|                                   | Region-B child Active Directory | lax01.rainpole.local                                                                                                                                                 | Contains DNS records that replicate to all DNS servers in the forest. This child domain contains all SDDC users, and global and local groups.                                       |
| Active Directory users and groups | -                               | All user accounts and groups from the Active Directory Users and Groups documentation must exist in the Active Directory before installing and configuring the SDDC. |
| Active Directory connectivity     | -                               | All Active Directory domain controllers must be accessible by all components within the management pod.                                                              |

Dynamic Host Configuration Protocol (DHCP)
------------------------------------------

This VVD requires DHCP for the configuration of each VMkernel port of an ESXi host with an IPv4 address. The configuration includes the VMkernel ports for the ESXi management network, vSphere vMotion, VXLAN (VTEP) and NFS.

Table . **DHCP Requirements**

| Requirement | Description                                                                                                                                                             |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DHCP server | The subnets and associated VLANs that provide IPv4 transport for the ESXi VMkernel ports in all pods must be configured for IPv4 address auto-assignment by using DHCP. |

DNS
---

DNS is an important component for the operation of the SDDC. For a multi-region deployment, you must provide a root and child domains which contain separate DNS records.

Table . **DNS Configuration Requirements**

| Requirement      | Domain Instance      | Description                                                                      |
|------------------|----------------------|----------------------------------------------------------------------------------|
| DNS host entries | rainpole.local       | Resides in the rainpole.local domain.                                            

                                                                                                                             |
|                  | sfo01.rainpole.local

                    and                   

                    lax01.rainpole.local  | DNS servers reside in the sfo01.rainpole.local and lax01.rainpole.local domains.

                                           Configure both DNS servers with the following settings:                           

                                           Dynamic updates for the domain set to **Nonsecure and secure**.                   

                                           Zone replication scope for the domain set to **All DNS server in this forest**.   

                                           Create all hosts listed in the *DNS Names* documentation.                         |

If you configure the DNS servers properly, all nodes from the VVD are resolvable by FQDN.

NTP
---

All components within the SDDC must be synchronized against a common time by using the Network Time Protocol (NTP) on all nodes. Important components of the SDDC, such as, vCenter Single Sign-On, are sensitive to a time drift between distributed components. See *Time Synchronization*.

Table . **NTP Server Configuration Requirements**

| Requirement | Description                                                                                                                                                                                                                          |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NTP         | NTP source, for example, on a Layer 3 switch or router, must be available and accessible from all nodes of the SDDC.                                                                                                                 

               Use the ToR switches in the management pods as the NTP servers or the upstream physical router. These switches should synchronize with different upstream NTP servers and provide time synchronization capabilities within the SDDC.  

               As a best practice, make the NTP servers available under a friendly FQDN, for example, ntp.sfo01.rainpole.local for Region A, or ntp.lax01.rainpole.local for Region B.                                                               |

 

SMTP Mail Relay
---------------

Certain components of the SDDC send status messages to operators and end users by email. 

Table . **SMTP Server Requirements**

| Requirement     | Description                                                                                                                                                                                                                                                 |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SMTP mail relay | Open Mail Relay instance, which does not require user name-password authentication, must be reachable from each SDDC component over plain SMTP (no SSL/TLS encryption). As a best practice, limit the relay function to the IP range of the VVD deployment. |

Certificate Authority (CA)
--------------------------

The majority of the components of the SDDC require SSL certificates for secure operation. The certificates must be signed by an internal enterprise Certificate Authority (CA) or by a third-party commercial CA. In either case, the CA must be able to sign a Certificate Signing Request (CSR) and return the signed certificate. All endpoints within the enterprise must also trust the root CA of the CA. 

Table . **CA Requirements for Signing Certificates of Management Applications**

| Requirement           | Description                                                                                                                                                                                                                                                                             |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Certificate Authority | CA must be able to ingest a Certificate Signing Request (CSR) from the SDDC components and issue a signed certificate.                                                                                                                                                                  

                         For this VVD, use the Microsoft Windows Enterprise CA that is available in the Windows Server 2012 R2 operating system of a root domain controller. The domain controller must be configured with the Certificate Authority Service and the Certificate Authority Web Enrollment roles.  |

 

FTP Server
----------

Dedicate space on a remote FTP server to save data backups for the NSX Manager instances in the SDDC.

Table . **FTP Server Requirements**

| Requirement | Description                                                                                                                                                                      |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FTP server  | Space for NSX Manager backups must be available on an FTP server. The server must support SFTP and FTP. The NSX Manager instances must have connection to the remote FTP server. |

Windows Host Machine
--------------------

Provide a Microsoft Windows virtual machine or physical server that works as an entry point to the data center. 

Table . **Requirements for a Windows Host Machine**

| Requirement          | Description                                                                                                                                                                                                                          |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Windows host machine | Microsoft Windows virtual machine or physical server must be available to provide connection to the data center and store software downloads. The host must be connected to the external network and to the ESXi management network.

                        For information about the Windows OS requirements for the host and the software downloads for this SDDC validated design, see *Software Requirements*.                                                                                |

Physical VLANs, IP Subnets and Application Virtual Networks
===========================================================

Before you start deploying the SDDC, you must allocate VLANs and IP subnets to the different types of traffic in the SDDC, such as ESXi management, vSphere vMotion, and others. For virtual application networks, you must plan separate IP subnets for the application nodes behind the NSX Edge devices too.

VLAN IDs and IP Subnets for System Traffic
------------------------------------------

This VMware Validated Design requires that the following VLAN IDs and IP subnets be allocated for the traffic types in the SDDC.

### VLANs and IP Subnets in Region A

According to the VMware Validated Design, you have the following VLANs and IP subnets in Region A.

Table . **VLAN and IP Subnet Configuration in Region A**

| POD            | VLAN Function                                   | VLAN | Subnet          | Gateway        |
|----------------|-------------------------------------------------|------|-----------------|----------------|
| Management Pod

                 

                 

                 

                 

                 

                 | ESXi Management                                 | 1611 | 172.16.11.0/24  | 172.16.11.253  |
|                | vSphere vMotion                                 | 1612 | 172.16.12.0/24  | 172.16.12.253  |
|                | Virtual SAN                                     | 1613 | 172.16.13.0/24  | 172.16.13.253  |
|                | VXLAN (VTEP)                                    | 1614 | 172.16.14.0/24  | 172.16.14.253  |
|                | NFS                                             | 1615 | 172.16.15.0/24  | 172.16.15.253  |
|                | vSphere Replication and vSphere Replication NFC | 1616 | 172.16.16.0/24  | 172.16.16.253  |
|                | External Management Connectivity                | 130  | 10.158.130.0/24 | 10.158.130.253 |
| Compute Pod    

                 

                 

                 

                 | ESXi Management                                 | 1621 | 172.16.21.0/24  | 172.16.21.253  |
|                | vSphere vMotion                                 | 1622 | 172.16.22.0/24  | 172.16.22.253  |
|                | Virtual SAN                                     | 1623 | 172.16.23.0/24  | 172.16.23.253  |
|                | VXLAN (VTEP)                                    | 1624 | 172.16.24.0/24  | 172.16.24.253  |
|                | NFS                                             | 1625 | 172.16.25.0/24  | 172.16.25.253  |
| Edge Pod       

                 

                 

                 

                 

                 | ESXi Management                                 | 1631 | 172.16.31.0/24  | 172.16.31.253  |
|                | vSphere vMotion                                 | 1632 | 172.16.32.0/24  | 172.16.32.253  |
|                | Virtual SAN                                     | 1633 | 172.16.33.0/24  | 172.16.33.253  |
|                | VXLAN (VTEP)                                    | 1634 | 172.16.34.0/24  | 172.16.34.253  |
|                | NFS                                             | 1635 | 172.16.35.0/24  | 172.16.35.253  |
|                | External Tenant Connectivity                    | 140  | 10.158.140.0/24 | 10.158.140.253 |

### VLAN IDs and IP Subnets in Region B

According to the VMware Validated Design, you have the following VLANs and IP subnets in Region B. 

Table . **VLAN and IP Subnet Configuration in Region B**

| Region B       | VLAN Function                                   | VLAN | Subnet          | Gateway        |
|----------------|-------------------------------------------------|------|-----------------|----------------|
| Management Pod

                 

                 

                 

                 

                 

                 | ESXi Management                                 | 1711 | 172.17.11.0/24  | 172.17.11.253  |
|                | vSphere vMotion                                 | 1712 | 172.17.12.0/24  | 172.17.12.253  |
|                | Virtual SAN                                     | 1713 | 172.17.13.0/24  | 172.17.13.253  |
|                | VXLAN (VTEP)                                    | 1714 | 172.17.14.0/24  | 172.17.14.253  |
|                | NFS                                             | 1715 | 172.17.15.0/24  | 172.17.15.253  |
|                | vSphere Replication and vSphere Replication NFC | 1716 | 172.17.16.0/24  | 172.17.16.253  |
|                | External Management Connectivity                | 150  | 10.158.150.0/24 | 10.158.150.253 |
| Compute Pod    

                 

                 

                 

                 | ESXi Management                                 | 1721 | 172.17.21.0/24  | 172.17.21.253  |
|                | vSphere vMotion                                 | 1722 | 172.17.22.0/24  | 172.17.22.253  |
|                | Virtual SAN                                     | 1723 | 172.17.23.0/24  | 172.17.23.253  |
|                | VXLAN (VTEP)                                    | 1724 | 172.17.24.0/24  | 172.17.24.253  |
|                | NFS                                             | 1725 | 172.17.25.0/24  | 172.17.25.253  |
| Edge Pod       

                 

                 

                 

                 

                 | ESXi Management                                 | 1731 | 172.17.31.0/24  | 172.17.31.253  |
|                | vSphere vMotion                                 | 1732 | 172.17.32.0/24  | 172.17.32.253  |
|                | Virtual SAN                                     | 1733 | 172.17.33.0/24  | 172.17.33.253  |
|                | VXLAN (VTEP)                                    | 1734 | 172.17.34.0/24  | 172.17.34.253  |
|                | NFS                                             | 1735 | 172.17.35.0/24  | 172.17.25.253  |
|                | External Tenant Connectivity                    | 160  | 10.158.160.0/24 | 10.158.160.253 |

Names and IP Subnets of Application Virtual Networks
----------------------------------------------------

This VMware Validated Design requires that the following IP subnets be allocated to the application virtual networks for the management applications in the SDDC.

Table . **Network Names and IP Subnets**

| Application Virtual Networks                       | Subnet Region A | Subnet Region B |
|----------------------------------------------------|-----------------|-----------------|
| vRealize Automation (vRA01)                        | 192.168.11.0/24 | 192.168.11.0/24 |
| vRealize Auomation vSphere Proxy Agents (vRA01IAS) | 192.168.12.0/24 | 192.168.13.0/24 |
| vRealize Operations Manager (vROps01)              | 192.168.21.0/24 | 192.168.21.0/24 |
| vRealize Operations Remote Collectors (vROps01RC)  | 192.168.22.0/24 | 192.168.23.0/24 |
| vRealize Log Insight (vRLI01)                      | 192.168.31.0/24 | 192.168.32.0/24 |

 

DNS Names
=========

Before you deploy the SDDC by following this VVD, you must create a DNS configuration of fully qualified domain names (FQDNs) and map them to the IP addresses of the management application nodes.

For a multi-region deployment with domain and forest structure, you must assign own IP subnets and DNS configuration to each sub-domain, sfo01.rainpole.local and lax01.rainpole.local. The only DNS entries that reside in the rainpole.local domain are the records for the virtual machines within the network containers that support disaster recovery failover between regions such as vRealize Automation and vRealize Operations Manager.

Table . List of Region A DNS Names

| SDDC Layer             | Product Group               | Region A – DNS                       

                                                        \[sfo01\]                             | Region A - IP Address

                                                                                               \[ sfo01 \]            | Description                                                                                                                                                                                         |
|------------------------|-----------------------------|--------------------------------------|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| External Services      | NTP                         | ntp.sfo01.rainpole.local             | 172.16.11.251         

                                                                                               172.16.11.252          | NTP server selected via Round Robin                                                                                                                                                                 

                                                                                                                       NTP server on a ToR switch in the management pod                                                                                                                                                     |
|                        |                             | 0.ntp.sfo01.rainpole.local           | 172.16.11.251         | NTP server on a ToR switch in the management pod                                                                                                                                                    |
|                        |                             | 1.ntp.sfo01.rainpole.local           | 172.16.11.252         | NTP server on a ToR switch in the management pod                                                                                                                                                    |
|                        | AD/DNS/CA                   | dc01rpl.rainpole.local               | 172.16.11.4           | Windows 2012 R2 host that contains the Active Directory configuration and DNS server for the rainpole.local domain, and the Microsoft Certificate Authority for signing management SSL certificates |
|                        |                             | dc01sfo.sfo01.rainpole.local         | 172.16.11.5           | Active Directory and DNS server for the sub-domains                                                                                                                                                 |
| Virtual Infrastructure | vSphere                     | mgmt01esx01.sfo01.rainpole.local     | 172.16.11.101         | ESXi host in the management pod                                                                                                                                                                     |
|                        |                             | mgmt01esx02.sfo01.rainpole.local     | 172.16.11.102         | ESXi host in the management pod                                                                                                                                                                     |
|                        |                             | mgmt01esx03.sfo01.rainpole.local     | 172.16.11.103         | ESXi host in the management pod                                                                                                                                                                     |
|                        |                             | mgmt01esx04.sfo01.rainpole.local     | 172.16.11.104         | ESXi host in the management pod                                                                                                                                                                     |
|                        |                             | comp01esx01.sfo01.rainpole.local     | 172.16.21.101         | ESXi host in the compute pod                                                                                                                                                                        |
|                        |                             | comp01esx02.sfo01.rainpole.local     | 172.16.21.102         | ESXi host in the compute pod                                                                                                                                                                        |
|                        |                             | omp01esx03.sfo01.rainpole.local      | 172.16.21.103         | ESXi host in the compute pod                                                                                                                                                                        |
|                        |                             | comp01esx04.sfo01.rainpole.local     | 172.16.21.104         | ESXi host in the compute pod                                                                                                                                                                        |
|                        |                             | edge01esx01.sfo01.rainpole.local     | 172.16.31.101         | ESXi host in the edge pod                                                                                                                                                                           |
|                        |                             | edge01esx02.sfo01.rainpole.local     | 172.16.31.102         | ESXi host in the edge pod                                                                                                                                                                           |
|                        |                             | edge01esx03.sfo01.rainpole.local     | 172.16.31.103         | ESXi host in the edge pod                                                                                                                                                                           |
|                        |                             | edge01esx04.sfo01.rainpole.local     | 172.16.31.104         | ESXi host in the edge pod                                                                                                                                                                           |
|                        |                             | mgmt01psc01.sfo01.rainpole.local     | 172.16.11.61          | Platform Services Controller for the Management vCenter Server                                                                                                                                      |
|                        |                             | mgmt01vc01.sfo01.rainpole.local      | 172.16.11.62          | Management vCenter Server                                                                                                                                                                           |
|                        |                             | comp01psc01.sfo01.rainpole.local     | 172.16.11.63          | Platform Services Controller for the Compute vCenter Server                                                                                                                                         |
|                        |                             | comp01vc01.sfo01.rainpole.local      | 172.16.11.64          | Compute vCenter Server                                                                                                                                                                              |
|                        | NSX for vSphere             | mgmt01nsxm01.sfo01.rainpole.local    | 172.16.11.65          | NSX Manager for the management cluster                                                                                                                                                              |
|                        |                             | mgmt01nsxc01.sfo01.rainpole.local    

                                                        mgmt01nsxc02.sfo01.rainpole.local     

                                                        mgmt01nsxc03.sfo01.rainpole.local     | 172.16.11.118         

                                                                                               172.16.11.119          

                                                                                               172.16.11.120          | Reserved.                                                                                                                                                                                           

                                                                                                                       NSX Controllers for the management cluster                                                                                                                                                           |
|                        |                             | comp01nsxm01.sfo01.rainpole.local    | 172.16.11.66          | NSX Manager for the compute and edge clusters                                                                                                                                                       |
|                        |                             | comp01nsxc01.sfo01.rainpole.local    

                                                        comp01nsxc02.sfo01.rainpole.local     

                                                        comp01nsxc03.sfo01.rainpole.local     | 172.16.31.118         

                                                                                               172.16.31.119          

                                                                                               172.16.31.120          | Reserved                                                                                                                                                                                            

                                                                                                                       NSX Controllers for the compute and edge clusters                                                                                                                                                    |
|                        |                             | comp01nsxm01.sfo01.rainpole.local    | 172.16.11.66          | NSX Manager for the compute and edge clusters                                                                                                                                                       |
|                        |                             | comp01nsxc01.sfo01.rainpole.local    

                                                        comp01nsxc02.sfo01.rainpole.local     

                                                        comp01nsxc03.sfo01.rainpole.local     | 172.16.31.118         

                                                                                               172.16.31.119          

                                                                                               172.16.31.120          | Reserved                                                                                                                                                                                            

                                                                                                                       NSX Controllers for the compute and edge clusters                                                                                                                                                    |
|                        |                             | vRA01-Edge.sfo01.rainpole.local      | 10.158.130.13         

                                                                                               192.168.0.11           

                                                                                               192.168.11.1           | NSX Edge device for the application virtual network of vRealize Automation                                                                                                                          |
|                        |                             | vRA01IAS-Edge.sfo01.rainpole.local   | 192.168.0.12          

                                                                                               192.168.12.1           | NSX Edge device for the application virtual network of the vRealize Automation vSphere Proxy Agents                                                                                                 |
|                        |                             | vROps01-Edge.sfo01.rainpole.local    | 10.158.130.14         

                                                                                               192.168.0.21           

                                                                                               192.168.21.1           | NSX Edge device for the application virtual network of the analytics cluster of vRealize Operations Manager                                                                                         |
|                        |                             | vROps01RC-Edge.sfo01.rainpole.local  | 192.168.0.22          

                                                                                               192.168.22.1           | NSX Edge device for the application virtual network of the remote collectors of vRealize Operations Manager                                                                                         |
|                        |                             | vRLI01-Edge.sfo01.rainpole.local     | 10.158.130.15         

                                                                                               192.168.0.31           

                                                                                               192.168.31.1           | NSX Edge device for the application virtual network of vRealize Log Insight                                                                                                                         |
|                        |                             | MgmtSFO01-Edge.sfo01.rainpole.local  | 10.158.130.240        

                                                                                               172.16.11.1            

                                                                                               172.16.21.1            

                                                                                               172.16.31.1            

                                                                                               192.168.0.1            | NSX Edge device for management network connectivity and VPN for inter-region connectivity                                                                                                           |
|                        | Site Recovery Manager       | mgmt01srm01.sfo01.rainpole.local     | 172.16.11.124         | Site Recovery Manager                                                                                                                                                                               |
|                        |                             | mgmt01vrms01.sfo01.rainpole.local    | 172.16.11.123         | vSphere Replication                                                                                                                                                                                 |
| Cloud Management       | vRealize Automation         | vra01ids01.rainpole.local            | 10.158.130.52         | Virtual IP (VIP) address of vRealize Automation Identity Appliance                                                                                                                                  |
|                        |                             | vra01svr01.rainpole.local            | 10.158.130.53         | VIP address of the vRealize Appliance                                                                                                                                                               |
|                        |                             | vra01iws01.rainpole.local            | 10.158.130.54         | VIP address of the vRealize Automation IaaS Web Server                                                                                                                                              |
|                        |                             | vra01ims01.rainpole.local            | 10.158.130.55         | VIP address of the vRealize Automation IaaS Manager Service                                                                                                                                         |
|                        |                             | vra01ims01.rainpole.local            | 192.168.11.41         | VIP address of PostgresSQL database of vRealize Automation                                                                                                                                          |
|                        |                             | vra01ids01a.rainpole.local           | 192.168.11.41         | VIP address of PostgresSQL database of vRealize Automation                                                                                                                                          |
|                        |                             | vra01ids01a.rainpole.local           | 192.168.11.46         | vRealize Automation Identity Appliance                                                                                                                                                              |
|                        |                             | vra01svr01a.rainpole.local           | 192.168.11.51         | vRealize Automation Identity Appliance                                                                                                                                                              |
|                        |                             | vra01svr01a.rainpole.local           | 192.168.11.51         | vRealize Appliance                                                                                                                                                                                  |
|                        |                             | vra01svr01b.rainpole.local           | 192.168.11.52         | vRealize Appliance                                                                                                                                                                                  |
|                        |                             | vra01iws01a.rainpole.local           | 192.168.11.54         | vRealize Automation IaaS Web Server                                                                                                                                                                 |
|                        |                             | vra01iws01b.rainpole.local           | 192.168.11.55         | vRealize Automation IaaS Web Server                                                                                                                                                                 |
|                        |                             | vra01ims01a.rainpole.local           | 192.168.11.57         | vRealize Automation IaaS Manager Service & DEM Orchestrator                                                                                                                                         |
|                        |                             | vra01ims01b.rainpole.local           | 192.168.11.58         | vRealize Automation IaaS Manager Service & DEM Orchestrator                                                                                                                                         |
|                        |                             | vra01dem01.rainpole.local            | 192.168.11.59         | vRealize Automation IaaS DEM Worker                                                                                                                                                                 |
|                        |                             | vra01dem02.rainpole.local            | 192.168.11.60         | vRealize Automation IaaS DEM Worker                                                                                                                                                                 |
|                        |                             | vra01ias01.sfo01.rainpole.local      | 192.168.12.2          | vSphere Proxy Agent                                                                                                                                                                                 |
|                        |                             | vra01ias02 .sfo01.rainpole.local     | 192.168.12.3          | vSphere Proxy Agent                                                                                                                                                                                 |
|                        | vRealize Orchestrator       | vra01vro01.rainpole.local            | 192.168.11.43         | VIP address of vRealize Orchestrator                                                                                                                                                                |
|                        |                             | vra01vro01a.rainpole.local           | 192.168.11.44         | vRealize Orchestrator Server                                                                                                                                                                        |
|                        |                             | vra01vro01b.rainpole.local           | 192.168.11.45         | vRealize Orchestrator Server                                                                                                                                                                        |
|                        | Microsoft SQL Server        | vra01mssql01.rainpole.local          | 192.168.11.27         | Microsoft SQL Server                                                                                                                                                                                |
| Business Continuity    | vSphere Data Protection     | vDP-mgmt-01.sfo01.rainpole.local     | 172.16.11.81          | vSphere Data Protection primary appliance in the management pod                                                                                                                                     |
| Service Management     | vRealize Operations Manager | vrops-cluster-01.rainpole.local      | 10.158.130.48         | Virtual IP address of external load balancer for the analytics cluster of vRealize Operations Manager                                                                                               |
|                        |                             | vrops-mstrn-01.rainpole.local        | 192.168.21.21         | Master node of vRealize Operations Manager                                                                                                                                                          |
|                        |                             | vrops-repln-02.rainpole.local        | 192.168.21.22         | Master replica node of vRealize Operations Manager                                                                                                                                                  |
|                        |                             | vrops-datan-03.rainpole.local        | 192.168.21.23         | Data node 1 of vRealize Operations Manager                                                                                                                                                          |
|                        |                             | vrops-datan-04.rainpole.local        | 192.168.21.24         | Data node 02 of vRealize Operations Manager                                                                                                                                                         |
|                        |                             | vrops-rmtcol-01.sfo01.rainpole.local | 192.168.22.25         | Remote collector 1 of vRealize Operations Manager                                                                                                                                                   |
|                        |                             | vrops-rmtcol-02.sfo01.rainpole.local | 192.168.22.26         | Remote collector 2 of vRealize Operations Manager                                                                                                                                                   |
|                        | vRealize Log Insight        | vrli-cluster-01.sfo01.rainpole.local | 192.168.31.10         | VIP address of the integrated load balancer of vRealize Log Insight                                                                                                                                 |
|                        |                             | vrli-mstr-01.sfo01.rainpole.local    | 192.168.31.10         | VIP address of the integrated load balancer of vRealize Log Insight                                                                                                                                 |
|                        |                             | vrli-mstr-01.sfo01.rainpole.local    | 192.168.31.11         | Master Node of vRealize Log Insight                                                                                                                                                                 |
|                        |                             | vrli-wrkr-01.sfo01.rainpole.local    | 192.168.31.12         | Worker node 01 of vRealize Log Insight                                                                                                                                                              |
|                        |                             | vrli-wrkr-02.sfo01.rainpole.local    | 192.168.31.13         | Worker node 02 of vRealize Log Insight                                                                                                                                                              |

Table . List of Region B DNS Names

| SDDC Layer             | Product Group               | Region B – DNS                                 

                                                        \[lax01\]                                       | Region B - IP Address

                                                                                                         \[ lax01 \]            | Description                                                                                                                                                                                         |
|------------------------|-----------------------------|------------------------------------------------|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| External Services      | NTP                         | ntp.lax01.rainpole.local                       | 172.17.11.251         

                                                                                                         172.17.11.252          | NTP server selected via Round Robin                                                                                                                                                                 

                                                                                                                                 NTP server on a ToR switch in the management pod                                                                                                                                                     |
|                        |                             | 0.ntp.lax01.rainpole.local                     | 172.17.11.251         | NTP server on a ToR switch in the management pod                                                                                                                                                    |
|                        |                             | 1.ntp.lax01.rainpole.local                     | 172.17.11.252         | NTP server on a ToR switch in the management pod                                                                                                                                                    |
|                        | AD/DNS/CA                   | dc01rpl.rainpole.local                         | 172.17.11.4           | Windows 2012 R2 host that contains the Active Directory configuration and DNS server for the rainpole.local domain, and the Microsoft Certificate Authority for signing management SSL certificates |
|                        |                             | dc01sfo.lax01.rainpole.local                   | 172.17.11.5           | Active Directory and DNS server for the sub-domains                                                                                                                                                 |
| Virtual Infrastructure | vSphere                     | mgmt01esx01.lax01.rainpole.local               | 172.17.11.101         | ESXi host in the management pod                                                                                                                                                                     |
|                        |                             | mgmt01esx02.lax01.rainpole.local               | 172.17.11.102         | ESXi host in the management pod                                                                                                                                                                     |
|                        |                             | mgmt01esx03.lax01.rainpole.local               | 172.17.11.103         | ESXi host in the management pod                                                                                                                                                                     |
|                        |                             | mgmt01esx04.lax01.rainpole.local               | 172.17.11.104         | ESXi host in the management pod                                                                                                                                                                     |
|                        |                             | comp01esx01.lax01.rainpole.local               | 172.17.21.101         | ESXi host in the compute pod                                                                                                                                                                        |
|                        |                             | comp01esx02.lax01.rainpole.local               | 172.17.21.102         | ESXi host in the compute pod                                                                                                                                                                        |
|                        |                             | omp01esx03.lax01.rainpole.local                | 172.17.21.103         | ESXi host in the compute pod                                                                                                                                                                        |
|                        |                             | comp01esx04.lax01.rainpole.local               | 172.17.21.104         | ESXi host in the compute pod                                                                                                                                                                        |
|                        |                             | edge01esx01.lax01.rainpole.local               | 172.17.31.101         | ESXi host in the edge pod                                                                                                                                                                           |
|                        |                             | edge01esx02.lax01.rainpole.local               | 172.17.31.102         | ESXi host in the edge pod                                                                                                                                                                           |
|                        |                             | edge01esx03.lax01.rainpole.local               | 172.17.31.103         | ESXi host in the edge pod                                                                                                                                                                           |
|                        |                             | edge01esx04.lax01.rainpole.local               | 172.17.31.104         | ESXi host in the edge pod                                                                                                                                                                           |
|                        |                             | mgmt01psc01.lax01.rainpole.local               | 172.17.11.61          | Platform Services Controller for the Management vCenter Server                                                                                                                                      |
|                        |                             | mgmt01vc01.lax01.rainpole.local                | 172.17.11.62          | Management vCenter Server                                                                                                                                                                           |
|                        |                             | comp01psc01.lax01.rainpole.local               | 172.17.11.63          | Platform Services Controller for the Compute vCenter Server                                                                                                                                         |
|                        |                             | comp01vc01.lax01.rainpole.local                | 172.17.11.64          | Compute vCenter Server                                                                                                                                                                              |
|                        | NSX for vSphere             | mgmt01nsxm01.lax01.rainpole.local              | 172.17.11.65          | NSX Manager for the management cluster                                                                                                                                                              |
|                        |                             | mgmt01nsxc01.lax01.rainpole.local              

                                                        mgmt01nsxc02.lax01.rainpole.local               

                                                        mgmt01nsxc03.lax01.rainpole.local               | 172.17.11.118         

                                                                                                         172.17.11.119          

                                                                                                         172.17.11.120          | Reserved                                                                                                                                                                                            

                                                                                                                                 NSX Controllers for the management cluster                                                                                                                                                           |
|                        |                             | comp01nsxm01.lax01.rainpole.local              | 172.17.11.66          | NSX Manager for the compute and edge clusters                                                                                                                                                       |
|                        |                             | comp01nsxc01.lax01.rainpole.local              

                                                        comp01nsxc02.lax01.rainpole.local               

                                                        comp01nsxc03.lax01.rainpole.local               | 172.17.31.118         

                                                                                                         172.17.31.119          

                                                                                                         172.17.31.120          | Reserved                                                                                                                                                                                            

                                                                                                                                 NSX Controllers for the compute and edge clusters                                                                                                                                                    |
|                        |                             | comp01nsxm01.lax01.rainpole.local              | 172.17.11.66          | NSX Manager for the compute and edge clusters                                                                                                                                                       |
|                        |                             | comp01nsxc01.lax01.rainpole.local              

                                                        comp01nsxc02.lax01.rainpole.local               

                                                        comp01nsxc03.lax01.rainpole.local               | 172.17.31.118         

                                                                                                         172.17.31.119          

                                                                                                         172.17.31.120          | Reserved                                                                                                                                                                                            

                                                                                                                                 NSX Controllers for the compute and edge clusters                                                                                                                                                    |
|                        |                             | vRA01-Edge.lax01.rainpole.local                | 10.158.150.13         

                                                                                                         192.168.1.11           

                                                                                                         192.168.11.1           | NSX Edge device for the application virtual network of vRealize Automation                                                                                                                          |
|                        |                             | vRA01IAS-Edge.lax01.rainpole.local             | 192.168.1.13          

                                                                                                         192.168.13.1           | NSX Edge device for the application virtual network of the vRealize Automation vSphere Proxy Agents                                                                                                 |
|                        |                             | vROps01-Edge.lax01.rainpole.local              | 10.158.150.14         

                                                                                                         192.168.1.21           

                                                                                                         192.168.21.1           | NSX Edge device for the application virtual network of the analytics cluster of vRealize Operations Manager                                                                                         |
|                        |                             | vROps01RC-Edge.lax01.rainpole.local            | 192.168.1.23          

                                                                                                         192.168.23.1           | NSX Edge device for the application virtual network of the remote collectors of vRealize Operations Manager                                                                                         |
|                        |                             | vRLI01-Edge.lax01.rainpole.local               | 10.158.150.15         

                                                                                                         192.168.1.32           

                                                                                                         192.168.32.1           | NSX Edge device for the application virtual network of vRealize Log Insight                                                                                                                         |
|                        |                             | MgmtLAX01-Edge.lax01.rainpole.local            | 10.158.150.240        

                                                                                                         172.17.11.1            

                                                                                                         172.17.21.1            

                                                                                                         172.17.31.1            

                                                                                                         192.168.1.1            | NSX Edge device for management network connectivity and VPN for inter-region connectivity                                                                                                           |
|                        | Site Recovery Manager       | mgmt01srm01.lax01.rainpole.local               | 172.17.11.124         | Site Recovery Manager                                                                                                                                                                               |
|                        |                             | mgmt01vrms01.lax01.rainpole.local              | 172.17.11.123         | vSphere Replication                                                                                                                                                                                 |
| Cloud Management       | vRealize Automation         | Update 'A' record to Region B VIP on failover. | 10.158.150.52         | Virtual IP (VIP) address of vRealize Automation Identity Appliance                                                                                                                                  |
|                        |                             | Update 'A' record to Region B VIP on failover. | 10.158.150.53         | VIP address of the vRealize Appliance                                                                                                                                                               |
|                        |                             | Update 'A' record to Region B VIP on failover. | 10.158.150.54         | VIP address of the vRealize Automation IaaS Web Server                                                                                                                                              |
|                        |                             | Update 'A' record to Region B VIP on failover. | 10.158.150.55         | VIP address of the vRealize Automation IaaS Manager Service                                                                                                                                         |
|                        |                             | -                                              | -                     | VIP address of PostgresSQL database of vRealize Automation                                                                                                                                          |
|                        |                             | -                                              | -                     | VIP address of PostgresSQL database of vRealize Automation                                                                                                                                          |
|                        |                             | -                                              | -                     | vRealize Automation Identity Appliance                                                                                                                                                              |
|                        |                             | -                                              | -                     | vRealize Automation Identity Appliance                                                                                                                                                              |
|                        |                             | -                                              | -                     | vRealize Appliance                                                                                                                                                                                  |
|                        |                             | -                                              | -                     | vRealize Appliance                                                                                                                                                                                  |
|                        |                             | -                                              | -                     | vRealize Automation IaaS Web Server                                                                                                                                                                 |
|                        |                             | -                                              | -                     | vRealize Automation IaaS Web Server                                                                                                                                                                 |
|                        |                             | -                                              | -                     | vRealize Automation IaaS Manager Service & DEM Orchestrator                                                                                                                                         |
|                        |                             | -                                              | -                     | vRealize Automation IaaS Manager Service & DEM Orchestrator                                                                                                                                         |
|                        |                             | -                                              | -                     | vRealize Automation IaaS DEM Worker                                                                                                                                                                 |
|                        |                             | -                                              | -                     | vRealize Automation IaaS DEM Worker                                                                                                                                                                 |
|                        |                             | vra01ias01.lax01.rainpole.local                | 192.168.13.2          | vSphere Proxy Agent                                                                                                                                                                                 |
|                        |                             | vra01ias02 .lax01.rainpole.local               | 192.168.13.3          | vSphere Proxy Agent                                                                                                                                                                                 |
|                        | vRealize Orchestrator       |                                                | -                     | VIP address of vRealize Orchestrator                                                                                                                                                                |
|                        |                             |                                                | -                     | vRealize Orchestrator Server                                                                                                                                                                        |
|                        |                             |                                                | -                     | vRealize Orchestrator Server                                                                                                                                                                        |
|                        | Microsoft SQL Server        |                                                | -                     | Microsoft SQL Server                                                                                                                                                                                |
| Business Continuity    | vSphere Data Protection     | vDP-mgmt-01.lax01.rainpole.local               | 172.17.11.81          | vSphere Data Protection primary appliance in the management pod                                                                                                                                     |
| Service Management     | vRealize Operations Manager | Update 'A' record to Region B VIP on failover. | 10.158.150.48         | Virtual IP address of external load balancer for the analytics cluster of vRealize Operations Manager                                                                                               |
|                        |                             | -                                              | -                     | Master node of vRealize Operations Manager                                                                                                                                                          |
|                        |                             | -                                              | -                     | Master replica node of vRealize Operations Manager                                                                                                                                                  |
|                        |                             | -                                              | -                     | Data node 1 of vRealize Operations Manager                                                                                                                                                          |
|                        |                             |                                                | -                     | Data node 02 of vRealize Operations Manager                                                                                                                                                         |
|                        |                             | vrops-rmtcol-01.lax01.rainpole.local           | 192.168.23.25         | Remote collector 1 of vRealize Operations Manager                                                                                                                                                   |
|                        |                             | vrops-rmtcol-02.lax01.rainpole.local           | 192.168.23.26         | Remote collector 2 of vRealize Operations Manager                                                                                                                                                   |
|                        | vRealize Log Insight        | vrli-cluster-01.lax01.rainpole.local           | 192.168.32.10         | VIP address of the integrated load balancer of vRealize Log Insight                                                                                                                                 |
|                        |                             | vrli-mstr-01.lax01.rainpole.local              | 192.168.32.10         | VIP address of the integrated load balancer of vRealize Log Insight                                                                                                                                 |
|                        |                             | vrli-mstr-01.lax01.rainpole.local              | 192.168.32.11         | Master Node of vRealize Log Insight                                                                                                                                                                 |
|                        |                             | vrli-wrkr-01.lax01.rainpole.local              | 192.168.32.12         | Worker node 01 of vRealize Log Insight                                                                                                                                                              |
|                        |                             | vrli-wrkr-02.lax01.rainpole.local              | 192.168.31.13         | Worker node 02 of vRealize Log Insight                                                                                                                                                              |

Time Synchronization
====================

Synchronized systems over NTP are essential for <span id="GUID-0073F0C0-2987-492F-9B6B-4E998E4DBC1" class="anchor"></span>vCenter Single Sign-On certificate validity, and for the validity of other certificates. Consistent system clocks are critical for the proper operation of the components in the SDDC because in certain cases they rely on vCenter Single Sign-on.

NTP also makes it easier to correlate log files from multiple sources during troubleshooting, auditing, or inspection of log files to detect attacks.

Requirements for Time Synchronization
-------------------------------------

All management components need to be configured with NTP.

Apply the following approach to reduce the impact of time synchronization issues in the SDDC.

-   Configure two time sources per region that are external to the SDDC. These sources can be physical radio or GPS time servers, or even NTP servers running on physical routers or servers.

-   Ensure that the external time servers are synchronized to different time sources to ensure desirable NTP dispersion.

-   Configure a DNS CNAME that maps the two time sources to one DNS name.

Table . **NTP Server FQDN and IP Configuration **

| NTP Server FQDN            | Mapped IP Address | Region   |
|----------------------------|-------------------|----------|
| ntp.sfo01.rainpole.local   | 172.16.11.251     

                              172.16.11.252      | Region A |
| ntp.lax01.rainpole.local   | 172.17.11.251     

                              172.17.11.252      | Region B |
| 0.ntp.sfo01.rainpole.local | 172.16.11.251     | Region A |
| 1.ntp.sfo01.rainpole.local | 172.16.11.252     | Region A |
| 0.ntp.lax01.rainpole.local | 172.17.11.251     | Region B |
| 1.ntp.lax01.rainpole.local | 172.17.11.252     | Region B |

-   Synchronize the time with the NTP servers on the following systems:

<!-- -->

-   ESXi hosts

-   AD domain controllers

-   Virtual appliances of the management applications

<!-- -->

-   Configure each system with the two regional NTP server aliases

<!-- -->

-   ntp.sfo01.rainpole.local

-   ntp.lax01.rainpole.local

<!-- -->

-   Verify that the default configuration on the Windows VMs is active, that is, the Windows VMs are synchronized with the NTP servers. 

-   As a best practice, for time synchronization on virtual machines, enable NTP-based time synchronization instead of the VMware Tools periodic time synchronization because NTP is an industry standard and ensures accurate timekeeping in the guest operating system.

    1.  Configure NTP-Based Time Synchronization on Windows Hosts
        ---------------------------------------------------------

On Windows, enable NTP-based synchronization.

1.  Open the command prompt as Administrator.

2.  Run the following console command to enable time synchronization with the NTP servers on the ToR switches.

> w32tm /config /manualpeerlist:"ntp.sfo01.rainpole.local
>
> ntp.lax01.rainpole.local" /syncfromflags:manual /reliable:YES /update

1.  Restart the Windows Time service to apply the changes.

> net stop w32time
>
> net start w32time

1.  Verify the time synchronization configuration. 

    1.  Run the following console.

> w32tm /query /status

1.  Verify that the **ReferenceId**: attribute in the output contains one of these servers in each region: 172.16.11.251, 172.16.11.252, 172.17.11.251 or 172.16.17.252. 

2.  If the ReferenceId: attribute contains LOCL instead of the IP address of at least one of the 4 NTP servers, run the following command and wait for the re-synchronization to complete.

> w32tm /resync

1.  Query the status of the Windows Time service again:

> w32tm /query /status

Active Directory Users and Groups
=================================

Before you deploy and configure the SDDC from this VVD, you must provide a specific configuration of Active Directory users and groups. In a multi-region environment that has parent and child domains in a single forest, store service accounts in the parent domain and user accounts in each of the child domains. By using the group scope attribute of Active Directory groups, you manage resource access across domains.

Active Directory Administrator Account
--------------------------------------

Certain installation and configuration tasks require a domain administrator account that is referred to as *ad\_admin\_acct *of the Active Directory domain.

Active Directory Groups
-----------------------

To grant user and service accounts the access that is required to perform their task, create Active Directory groups according to the following rules:

1.  Add user and service accounts to universal groups in the parent domain.

2.  Add the universal groups to local groups in each child domain.

3.  Assign access right and permissions to the local groups in the child domains according to their role.

    1.  Universal Groups in the Parent Domain
        -------------------------------------

In the **rainpole.local** domain, create the following universal groups.

Table . **Universal Groups in the rainpole.local Parent Domain** 

| Group Name               | Group Scope | Description                                                                                                                 |
|--------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------|
| ug-SDDC-Admins           | Universal   | Administrative group for the SDDC                                                                                           |
| ug-SDDC-Ops              | Universal   | SDDC operators group                                                                                                        |
| ug-ITAC-TenantAdmins     | Universal   | Tenant administrators group                                                                                                 |
| ug-ITAC-TenantArchitects | Universal   | Tenant architects group                                                                                                     |
| ug-vCAdmins              | Universal   | Read-only accounts for vCenter Server administrators for monitoring vCenter Server instances in vRealize Operations Manager |
| ug-vCenterAdmins         | Universal   | Group with accounts that are assigned vCenter Server administrator privileges.                                              |
| ug-vROAdmins             | Universal   | Groups with vRealize Orchestrator Administrator priviledges                                                                 |

Global Groups in the Child Domains
----------------------------------

In each child domain, **sfo01.rainpole.local **and **lax01.rainpole.local**, add the role-specific universal group from the parent domain to the relevant role-specific global group in the child domain.

Table . **Local Groups in the sfo01.rainpole.local and lax01.rainpole.local Child Domains** 

| Group Name            | Group Scope | Description                                                                            | Member of Groups                   |
|-----------------------|-------------|----------------------------------------------------------------------------------------|------------------------------------|
| SDDC-Admins           | Global      | Administrative group for the SDDC                                                      | RAINPOLE\\ug-SDDC-Admins           |
| SDDC-Ops              | Global      | SDDC operators group                                                                   | RAINPOLE\\ug-SDDC-Ops              |
| ITAC-TenantAdmins     | Global      | Tenant administrators group                                                            | RAINPOLE\\ug-ITAC-TenantAdmins     |
| ITAC-TenantArchitects | Global      | Tenant architects group                                                                | RAINPOLE\\ug-ITAC-TenantArchitects |
| vCAdmins              | Global      | Read-only group for monitoring vCenter Server instances in vRealize Operations Manager | RAINPOLE\\ug-vCAdmins              |
| vCenterAdmins         | Global      | Group with accounts that are assigned vCenter Server administrator privileges          | RAINPOLE\\ug-vCenterAdmins         |

1.  Active Directory Users
    ----------------------

    1.  ### Service Accounts

A service account provides components of the SDDC with non-interactive and non-human access to services and APIs. A service account is a standard Active Directory account that you configure in the following way:

-   The password never expires.

-   The user cannot change the password.

-   The account must have the right to join computers to the Active Directory domain. 

    1.  ### Service Accounts in the Parent Domain

Create the following service accounts in the parent Active Directory domain rainpole.local to provide centralized authentication of SDDC products.

Table . **Service Accounts in the rainpole.local Parent Domain** 

| User Name      | Description                                                                                                                                                                                           | Service Account | Member of Groups           |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|----------------------------|
| svc-loginsight | Read-only service account for using the Active Directory as an authentication source in vRealize Log Insight and for forwarding log information from vCenter Server and ESXi to vRealize Log Insight. | Yes             |                            |
| svc-vrops      | Read-only service account for access to the Management vCenter Server and Compute vCenter Server from vRealize Operations Manager.                                                                    | Yes             | RAINPOLE\\ug-vCAdmins      |
| svc-vra        | Service account for using the Active Directory as an authentication source and for accessing the nodes of vRealize Automation.                                                                        | Yes             | RAINPOLE\\ug-vCenterAdmins

                                                                                                                                                                                                                                            RAINPOLE\\ug-vROAdmins      |
| svc-vro        | Service account for accessing the nodes of vRealize Orchestrator.                                                                                                                                     | Yes             |                            |
| svc-nsxmanager | Service account for registering NSX Manager with vCenter Single Sign-on on the Platform Services Controller and vCenter Server for the management cluster and for the compute and edge clusters.      | Yes             | RAINPOLE\\ug-vCenterAdmins |

### User Accounts in the Parent Domain

Create the following user accounts in the parent Active Directory domain rainpole.local.

Table . **User Accounts in the rainpole.local Parent Domain** 

| User Name            | Description                                                                                                                                                                                                                                                                                          | Service Account | Member of Groups                   |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------------------------|
| ITAC-TenantAdmin     | Tenant administrator role in the IT Automation Cloud for configuring <span id="GUID-01F9D264-9940-4526-BC2D-B0553F08023" class="anchor"></span>vRealize Automation for the needs of your organization including user and group management, tenant branding and notifications, and business policies. | No              | RAINPOLE\\ug-ITAC-TenantAdmins     

                                                                                                                                                                                                                                                                                                                                                 RAINPOLE\\ug-vROAdmins              |
| ITAC-TenantArchitect | Tenant architect role in the IT Automation Cloud for creating the blueprints that tenants request from the service catalog.                                                                                                                                                                          | No              | RAINPOLE\\ug-ITAC-TenantArchitects |

### Users Accounts in the Child Domains

Create the following accounts for user access in each of the child Active Directory domain, **sfo01.rainpole.local** and **lax01.rainpole.local**, to provide centralized user access to the SDDC. In the Active Directory, you do not assign any special rights to these accounts other than the default ones.

Table . **User Accounts in the sfo01.rainpole.local and lax01.rainpole.local Child Domains** 

| User Name       | Description                                                                                                                                                                                                                                | Service Account | Member of Groups                               |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------------------------------------|
| SDDC-Admin      | Global administrative account across the SDDC.                                                                                                                                                                                             | No              | RAINPOLE\\ug-SDDC-Admins                       |
| vROPS-Admin     | Administrator account for vRealize Operations Manager.                                                                                                                                                                                     | No              | RAINPOLE\\ug-SDDC-Admins,RAINPOLE\\ug-SDDC-Ops |
| vROPS-Power     | Power user for vRealize Operations Manager that has privileges to perform the actions of the administrator role except for user management and cluster management.                                                                         | No              | RAINPOLE\\ug-SDDC-Ops                          |
| vROps-user-01   | Test custom account for using vRealize Operations Manager.                                                                                                                                                                                 | No              | RAINPOLE\\ug-SDDC-Ops                          |
| vRLI-SuperAdmin | Super admin account that can access the full functionality of <span id="GUID-84346270-13D8-49AD-A589-161C368FE3F" class="anchor"></span>vRealize Log Insight, administer vRealize Log Insight, and manage the accounts of all other users. | No              | RAINPOLE\\ug-SDDC-Ops                          |
| vRLI-ReadOnly   | Read-only operator account that can view log events.                                                                                                                                                                                       | No              | RAINPOLE\\ug-SDDC-Ops                          |
| vRLI-user-01    | Test user account for vRealize Log Insight.                                                                                                                                                                                                | No              | RAINPOLE\\ug-SDDC-Ops                          |

NFS Exports for Management Components
=====================================

For certain features of the SDDC components, such as backup and restore, log archiving and content library, you must provide NFS exports as storage. 

The management applications in the SDDC use NFS exports with the following paths.

Table . **NFS Export Configuration** 

| VLAN | Server        | Export                   | Size | Map As                                                  | Region   | Cluster            | Component               |
|------|---------------|--------------------------|------|---------------------------------------------------------|----------|--------------------|-------------------------|
| 1615 | 172.16.15.251 | /V2D\_vRLI\_MgmtA\_1TB   | 1TB  | NFS datastore for log archiving in vRealize Log Insight | Region A | Management cluster | vRealize Log Insight    |
| 1615 | 172.16.15.251 | /V2D\_vDP\_MgmtA\_4TB    | 4TB  | SFO01A-NFS01-VDP01                                      | Region A | Management cluster | vSphere Data Protection |
| 1625 | 172.16.25.251 | /V2D\_vRA\_ComputeA\_1TB | 1TB  | SFO01A-NFS01-VRALIB01                                   | Region A | Compute cluster    | vRealize Automation     |
| 1715 | 172.17.15.251 | /V2D\_vRLI\_MgmtB\_1TB   | 1TB  | NFS mount for log archiving in vRealize Log Insight     | Region B | Management cluster | vRealize Log Insight    |
| 1715 | 172.17.15.251 | /V2D\_vDP\_MgmtB\_4TB    | 4TB  | LAX01A-NFS01-VDP01                                      | Region B | Management cluster | vSphere Data Protection |
| 1725 | 172.17.25.251 | /V2D\_vRA\_ComputeB\_1TB | 1TB  | LAX01A-NFS01-VRALIB01                                   | Region B | Compute cluster    | vRealize Automation     |

 

<span id="_Ref442087723" class="anchor"></span>

Virtual Machine Template Specifications
=======================================

Consider the specifications of the following VM templates that reside in the vSphere environment of the SDDC.

Table . **Specifications for the VM Templates Required in the VMware Validated Design**

| SDDC Layer       | Required by VMware Component | VM Template Name          | Guest OS                              | CPUs | Memory GB | Virtual Disk, GB | SCSI Controller | Virtual Machine Network Adapter |
|------------------|------------------------------|---------------------------|---------------------------------------|------|-----------|------------------|-----------------|---------------------------------|
| Cloud Management | vRealize Automation          | redhat6-enterprise-64     | Red Hat Enterprise Server 6.7(64-bit) | 1    | 6         | 20               | LSI Logic SAS   | VMXNET3                         |
|                  |                              | windows-2012r2-64         | Windows Server 2012 R2 (64-bit)       | 1    | 4         | 50               | LSI Logic SAS   | VMXNET3                         |
|                  |                              | windows-2012r2-64-sql2012 | Windows Server 2012 R2 (64-bit)       | 1    | 8         | 100              | LSI Logic SAS   | VMXNET3                         |
