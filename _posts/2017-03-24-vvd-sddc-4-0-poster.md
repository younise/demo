---
layout:         post
title:          "VMware Validated Design for SDDC 4.0 Architecture Reference Poster"
subtitle:       ""
date:           2017-03-24 10:30:00
author:         "Ryan Johnson"
tags:           [SDDC, VVD]
published:      true
---

On March 2nd 2017 VMware [released](http://pubs.vmware.com/Release_Notes/en/vvd/40/vmware-validated-design-40-release-notes.html) the [VMware Validated Design for Software-Defined Data Center 4.0](http://vmware.com/go/vvd-docs). A milestone release in our commitment to delivering our customers standardized, proven, and robust data-center level designs for the Software-Defined Data Center.

The excitement from our customers and partners for this release has been phenomenal – from the wave of [product updates](http://pubs.vmware.com/Release_Notes/en/vvd/40/vmware-validated-design-40-release-notes.html#components), new advanced day-two operations, [streamlined online access](http://pubs.vmware.com/vmware-validated-design-40/index.jsp), and the release of the Solution Enablement Toolkit for partners.

As we talk to customers and partners on a daily basis, there are many questions about the design. We wanted a way to provide a quick architecture reference as you get started with the design.

It is my pleasure to share the architecture reference poster for the VMware Validated Design for Software-Defined Data Center 4.0.

![/images/post-vvd-sddc-40-poster.png](http://vmware.com/go/vvd-sddc-poster)

This poster depicts many portions of the fundamental architecture for both quick reference and discussion.

## Sections
The poster has six major sections. Let’s highlight these below.

- Logical Components Architecture – This section illustrates the logical architecture and the how the solutions are deployed and integrated across a full-stack, dual-region Software-Defined Data Center. From vCenter Servers and load-balanced Platform Services Controllers, to cross-region and cross-vCenter NSX, through cloud operations and automation with the vRealize Suite, this section touches it all.

- Core and Pod Architecture – This section illustrates the pods used in the design and how they are constructed and deployed to provide a common set of scalable building blocks for your Software-Defined Data Center.
Distributed Logical Networking and Application Virtual Networks – This section illustrates the design’s use of distributed logical routing across a dual-region Software-Defined Data Center by incorporating VMware NSX into the management stack. It also depicts the deployment of the full-stack of SDDC solutions with Application Virtual Networks and network services provided by NSX.

- Storage – This section illustrates the use of vSAN and NFS in the design. VMware Validated Designs are designed and tested with VMware vSAN in the management & shared edge and compute pods for primary storage and NFS for secondary storage (templates, archives, and backups.) VMware vSAN is required for the management pod; however, the choice of storage used in the shared edge and compute pod, and additional compute only pods is always at the discretion of the customer. We highly recommend using VMware vSAN Ready Nodes for the management pod, the VMware Validated Designs may use systems on the VMware Compatibility Guide for vSAN.

- Pods and Clusters – This section illustrates, at a high-level, how the design pulls together the pods, solutions, and the use of distributed logical routing.

- Region Protection and Disaster Recovery – This section illustrates how the design protects vRealize Automation, vRealize Orchestrator, vRealize Operations, and vRealize Business for Cloud in management stack using Site Recovery Manager along with NSX.

## Download
[VMware Validated Design for SDDC 4.0 Architecture Reference Poster](http://vmware.com/go/vvd-sddc-poster)

If you’d like to see the poster hanging on your office wall, the PDF size is 51in x 31in. Stay tuned for more coming soon, but in the mean time you can find all VMware posters at [vmware.com/go/posters](http://vmware.com/go/poster).

If you have any questions or have feedback, reach out to me on Twitter as [@tenthirtyam](http://tenthirtyam.org/tenthirtyam).

## Additional Resources
- VMware Validated Design for SDDC 4.0 [Release Notes](http://pubs.vmware.com/Release_Notes/en/vvd/40/vmware-validated-design-40-release-notes.html)
- What’s New in the VMware Validated Design for SDDC 4.0 [Video](https://www.youtube.com/watch?v=U01POpwnzlo) and [Blog](https://blogs.vmware.com/cloud-foundation/2017/03/08/vmware-validated-design-sddc-4-0-generally-available/)
- Read the documentation at [vmware.com/go/vvd-docs](http://vmware.com/go/vvd-docs)
