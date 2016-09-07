---
layout:         post
title:          "VMware Validated Design for Software-Defined Data Center 3.0 & Reference Poster"
subtitle:       ""
date:           2016-09-07 10:30:00
author:         "Ryan Johnson"
tags:           [SDDC, VVD, Posters]
published:      true
---

Without a consistent and repeatable approach to building a Software-Defined Data Center (SDDC), you’ll likely suffer through the pain of combinatorics.   Combinatorics, the branch of mathematics that studies the enumeration, combination and permutations of variables, can be applied to the process of designing a data center. The more variables and permutations of those variables you create, the greater the opportunity for failure in your design. Failure may be minor or spectacular. As each new variation appears, your ability to adequately understand and account for all permutations becomes increasingly difficult.  Combinatorics are the natural enemy of scale and stability for any large scale system.  At VMware, the approach we’re taking to solve this problem is to build an SDDC that is consistent, thoroughly documented, tested from end-to-end, and continually improved.  With the VMware Validated Designs, this approach is built into the release process. It ensures a regular rhythm of extensively tested releases that include standardized and regimented validation processes applied to real world customer configurations.  The processes take into account the entire SDDC stack, ensuring product version compatibility, continual testing of product releases, upgrade testing, and validation. Not only does this enhance our product interoperability, testing, and supportability, but it streamlines the design and deployment of the SDDC and ensures that what you deploy today can be upgraded to the next version in the future.As a result, the VMware Validated Designs provide the most comprehensive and extensively-tested blueprints to build and operate a private cloud. They deliver holistic data center-level designs that span across compute, storage, networking, and management.  This defines the standard for how to deploy and configure the complete VMware SDDC stack for a wide range of use-cases. 

Organizations are shifting their focus toward use-cases. VMware Validated Designs are a critical part of that shift. VMware Validated Designs provides an agile platform to achieve a wide variety of desired outcomes delivered by the SDDC (e.g. Micro-segmentation, IT Automation.)
Using a standardized model for the VMware SDDC stack results in a significant reduction of the time it takes an organization to deploy and begin using an SDDC. Customers can accelerate their design and implementations from months to mere weeks. 
The designs also include detailed guidance that synthetizes best practices on how to deploy and optimally operate a VMware SDDC. Each typically includes:* Release Notes
* Solution Overview – including:
	* Release Overview
	* Design Objectives
	* Software Components and Versions
* Architecture Guide – including:
	* Architecture Overview
	* Detailed Design
* Planning and Preparation Guide 
* Deployment Guide
* Operational Guidance ## Hello, 3.0.In the last year since VMware announced the VMware Validated Designs at VMworld 2015, they've delivered on two iterations of the VMware Validated Design for SDDC. The first release, VMware Validated Design for SDDC 1.0, became available as a special offering through VMware Professional services in the spring of 2015.  That was then followed by the first generally available release, VMware Validated Designs for SDDC 2.0, which was available in mid-Summer.  Announced at VMworld, the  the next iteration of the VMware Validated Design for Software-Defined Data Center 3.0 will be coming soon.

The engineering team has been doing a tremendous job incorporating feedback from early adopters to extend the applicability of the designs and add more elements and capabilities.

This generally available release will include all the features and capabilities of the existing 2.0 release along with some additional improvements and updates.

Let's take a look at some of the key improvements being incorporated into the 3.0 design.

### Flexible Deployment with Distributed Management and Workload Architecture

This VMware Validated Design for SDDC 3.0 simplifies the initial startup, reduces startup hardware cost, and provides flexibility for future growth by transitioning to a flexible distributed management and workload architecture. In prior versions, the functional roles of the pods were separated into: management, edge, and compute (also referred to as workload) pods. While this is a tremendously scalable architecture many customers and partners wanted to see the option to start smaller and have the ability to grow without requiring the fully distributed architecture at startup. This has been accomplished by collapsing the Edge Pod and first Compute Pod into a Shared Edge and Compute Pod.

![Flexible Distributed Management and Workload](/images/post-vvd-sddc-3x-pods.png)

In 3.0 the Management Pod instantiates all the management, automation and operations solutions for the Sotware-Defined Data Center. These include*:

* vSphere
* Virtual SAN
* NSX
* vRealize Operations w/ Management Packs
* vRealize Log Insight w/ Content Packs
* vRealize Automation
* vRealize Orchestrtor
* vRealize Business for Cloud
* Site Recovery Manager
* vSphere Data Protection**

The Shared Edge and Compute Pod provides north-south routing and advanced networking services to workloads in the SDDC. It also provides an location to run the initial workloads in the SDDC. As an SDDC grows, additional Compute Only Pods are added to run more business workloads. And, if desired, the edge services in the SDDC can be separated and powered by a dedicated Edge Pod in the future.

![3.0 Deployment Topology](/images/post-vvd-sddc-3x-deployment.png)

![3.0 Core and Pod Topology](/images/post-vvd-sddc-3x-core-pod.png)

### Dual-Region Deployment and Operational Guidance

The release includes the expansion from single-region deployment and operations guidance to dual-region. 

A dual-region deployment allows an organization to implement an SDDC across two geographical locations, providing portability of applications, and enabling disaster recovery capability of SDDC management, automation and operations solutions between regions.
Think San Francisio and Los Angeles, as an example.

In addition, with the announcement of this upcoming design VMware Validated Design for Software-Defined Data Center 2.0 it is my pleasure to share the [VMware Validated Design for Software-Defined Data Center 3.x Reference Poster]() for this incredible release.

This poster depicts many portions of the fundamental architecture for both quick reference and discussion

[![VMware Validated Design for Software-Defined Data Center 3.x Poster](/images/poster-vvd-sddc-3x-poster.png)](https://communities.vmware.com/docs/DOC-32783)

Before the 3.0 release, get a sneak peek of this design, and to stay updated on what we are cooking up, please join the VMware Validated Designs community at [vmware.com/go/vvd-community](vmware.com/go/vvd-community) where you can also get answers to your questions and provide feedback on the designs.

* Provide general feedback or ask a question on VMware Validated Designs, by selecting the "Start a Discussion" button on the [VMware Vaidated Designs communities](http://www.vmware.com/go/vvd-community)/

* Follow the community by selecting the "Following in" button in the community banner. You'll receive general notifications when new content is available.

Also, check out the following:

* Videos and demos on the [VMware Validated Design YouTube Playlist](http://vmware.com/go/vvd-videos).

* VMware Validated Design for Software-Defined Data Center 2.0 Release Notes: [http://pubs.vmware.com/Release_Notes/en/vvd/20/vmware-validated-design-20-release-notes.html](http://pubs.vmware.com/Release_Notes/en/vvd/20/vmware-validated-design-20-release-notes.html)

* Download the VMware Validated Design for Software-Defined Data Center 2.0 [http://www.vmware.com/go/vvd-sddc](http://www.vmware.com/go/vvd-sddc)

**Refer to the documentaiton for the complete software bill of materials.*
**Optional Component*





