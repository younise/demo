---
layout:         post
title:          "Getting Started with VMware Cloud Foundation: SDDC Manager’s Dashboard"
subtitle:       ""
date:           2017-11-22 10:30:00
author:         "Ryan Johnson"
tags:           [SDDC, VCF, VMware Cloud Foundation]
published:      true
---

VMware Cloud Foundation's unified SDDC platform together with the new VMware SDDC Manager drastically simplifies the deployment, configuration and on-going operations of a Software-Defined Data Center (SDDC). A key element of the solution, and its simplified user experience is SDDC Manager - a purpose driven component that provides a centralized management plane for the provisioning, monitoring and ongoing management of both the logical and physical resources that make up your [VMware Cloud Foundation](http://www.vmware.com/products/cloud-foundation) based private cloud.  In this post I will introduce you to the SDDC Manager Dashboard and give you a quick tour. After logging into the modern user interface, you use the navigation panel on the left to navigate between the different areas of the interface.

![vcf-dashboard](http://blogs.vmware.com/cloud-foundation/files/2016/11/vcf-dashboard.png) The dashboard is the first item on the list and provides a high-level administrative view of both the logical and physical resources across the system, including available CPU, memory, and storage capacity and how they are allocated within the Software-Defined Data Center. Let's dive into the dashboard.

## Physical Resources

At login, the dashboard displays high-level information about the system's physical resources, such as, the number of physical racks, hosts and switches. By selecting View Details, you can drill into more specific details the available capacity in the VMware Cloud Foundation instance. Here the Map View displays the physical racks that have been deployed. For an alternative text or list-based view you can select the List View option.

![vcf-physical-resources](http://blogs.vmware.com/cloud-foundation/files/2016/11/vcf-physical-resources.png)

Selecting the name of a rack in either view will present the Rack Details. Here the information about the switches and ready nodes contained within the rack will be presented - for example, in the screen shot below we see the out-of-band management switch, a pair top-of-rack switches and nodes. By selecting the name of any of these objects, you can drill-down to view details and perform actions.

![vcf-rack-details](http://blogs.vmware.com/cloud-foundation/files/2016/11/vcf-rack-details.png)

SDDC Manager monitors each of the hardware components and displays the health status using a set of simple, intuitive icons. These icons are presented on the Rack Details view, as well as when you drill-down to the details of each resource. The hardware health state of the resource is calculated based on the current set of alerts that SDDC Manager has raised for the resource and the severities of those alerts. A complete list of current alerts sorted by severity for a resource is available when you select the resource and then click on any View Alerts option.

## Switch Details and Operations

The Rack Details shows the role of each switch in that rack. This includes the out-of-band management switch, top-of-rack switches, and spine switches. As with other objects in the user interface, selecting the switch name, presents the switch's detailed information.

![vcf-switch-details](http://blogs.vmware.com/cloud-foundation/files/2016/11/vcf-switch-details.png)

## Host Details and Operations

The Rack Details view also shows a "node number" for each ready node in that rack. Here again, selecting object name will present information about the node.

![vcf-host-details](http://blogs.vmware.com/cloud-foundation/files/2016/11/vcf-host-details.png)

Here the information presented for each host includes:

*   Node Number (e.g. N0)
*   Power State
*   CPU, Memory, and Storage
*   SSD Capacity
*   HDD Capacity
*   Management IP
*   Management Network
*   Rack Assignment
*   Workload Domain Assignment
*   vCenter Server Instance + vSphere Web Client Launch
*   Cluster Assignment + vSphere Web Client Launch to Cluster
*   Hardware Health Status

In addition, the Host Details view shows the available operations you can perform on a host, These are presented as icon in upper right corner, Some operations that you can initiate directly on a host include: decommissioning, turning off, and power cycling a node.

## Workload Domains

On the main dashboard, you can run an Add Workload Domain. Workload domains are logical units of compute, network, and storage resources carved out of your VMware Cloud Foundation private cloud. Examples include the special-purpose management workload domain where we run the SDDC infrastructure components, as well as workload domains for running business workloads and hosting end-user computing services. By selecting this option, the type of workload domain selected is configured with various parameters that specify its resource requirements, software components to be deployed, network configuration details, and more.

![vcf-add-workload-domain](http://blogs.vmware.com/cloud-foundation/files/2016/11/vcf-add-workload-domain.png)

The main dashboard page displays high-level information about the configured workload domains. This includes the number of workload domains and their type. Here again, selecting the View Details you can drill into more specific details.

![vcf-workload-domains](http://blogs.vmware.com/cloud-foundation/files/2016/11/vcf-workload-domains.png)

Here the Map View displays all the workload domains that have been deployed. For an alternative text or list-based view you can select the List View option. Selecting the name of a workload domain in either view will present the Domain Detail. Here you'll find some general information the workload domain under a General Info section.

![vcf-domain-details](http://blogs.vmware.com/cloud-foundation/files/2016/11/vcf-domain-details.png) Here you see that this includes:

*   Workload Domain Type (Management, VI, or VDI)
*   CPU, Memory, Storage
*   Owner
*   Cluster Details (Resources, Number of Hosts from Racks)

The Domain Details includes an additional section to list information based on the type of workload domain. For example, here we see a management domain and a Management Info section that provides specific information for the workload domain's configuration.

![vcf-management-info](http://blogs.vmware.com/cloud-foundation/files/2016/11/vcf-management-info-803x1024.png)

An addition item that appears in the Domain Details is the capability to expand workload domains. Expanding a domain allows you to specify the amount of additional resources you want added to an existing workload domain.

## Resources

The last area of the dashboard is the Resources section. At the bottom of the dashboard, a set of graphs displays the total, allocated and consumed capacity. This includes the metrics for CPU, memory and storage capacity across entire VMware Cloud Foundation instance.

![vcf-resources](http://blogs.vmware.com/cloud-foundation/files/2016/11/vcf-resources.png)

Using these sets of graphs, you can easily monitor and track the capacity allocations. Plus, it helps guide your capacity allocation settings when creating new workload domains And there you have it, an overview of the dashboard user experience and capabilities in SDDC Manager - the solution that provisions, manages, monitors, and updates both the logical and physical resources of VMware Cloud Foundation. Stay tuned for more posts as we dive into VMware Cloud Foundation.
