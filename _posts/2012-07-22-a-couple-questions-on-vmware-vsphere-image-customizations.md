---
layout:         post
title:          "A Couple Questions on VMware vSphere 5 Image Customizations"
subtitle:       ""
date:           2012-07-22 12:00:00
author:         "Ryan Johnson"
published:      true
categories:     [Technology, VMware]
tags:           []
permalink:      
header-img:     "img/post-bg-01.jpg"
---

One of my peers was working with a service provider this week. The service provider is planning an upgrade to VMware vSphere 5.0 and is using Image Builder CLI to create a customization of the ESXi image for all supported hardware platforms (e.g. <em>HP</em> and <em>Dell</em>.) They had a few best practice questions on the process as they wanted to ensure they had the smallest image possible without losing any functionality and ensuring all relevant vendor specific management functions. This customer is jumping in the sattle and moving in the right direction - but first, let's address these questions.

[quote]Is there any way to know what packages are needed for a particular hardware? The VMware provided image profiles have more than 50 VIBs and I am pretty sure a number of them are not needed for HP or Dell hardware that we use.[/quote]

[quote]Can the tools-light package be safely removed from am image without impacting functionality? The VIB is more than 150MB and occupies the most space. If it is excluded, how do VMs update the VMware Tools during normal operations?[/quote]

[quote] VMware’s standard profiles provide drivers that are a few versions older than the HP specific drivers. What is the recommendation in this case? Use VMware’s drivers or HP drivers?[/quote]

[quote]Can some packages be safely removed from the ISO without impacting any functionality? Example, we do not use Qlogic hardware, so is it possible to remove scsi-qla2xxx and scsi-qla4xxx safely from the ISO?[/quote]

First things first, what is a VIB? VIB stands for vSphere Installation Bundle. At a conceptual level a VIB is somewhat similar to a tarball or ZIP archive in that it is a collection of files packaged into a single archive to facilitate distribution. Read more about <a href="http://blogs.vmware.com/esxi/2011/09/whats-in-a-vib.html" target="_blank"><em>What is a VIB</em></a> in an article from <a href="http://twitter.com/VMwareESXi">Kyle Gleed</a> from VMware Technical Marketing.

In short, yes. Kyle confirmed that you can remove packages that are not used. However, other than the <em>tools-light</em> VIB it is not recommend that any other VIBs be removed. The Image Builder CLI is meant to enable customers to add additional drivers/VIBs to image profiles and not so much remove default VIBs bundled with the image. All the VIBs are tested and digitally signed by VMware so there's no risk with leaving them in place. With the exception of the <em>tools-light</em> VIB which is ~150 MB, all the VIBs are pretty small - so, at most there would be a savings of ~6MB in a custom image.

If the <em>tools-light VIB</em> is excluded from the images then a shared tools repository on shared storage must be configured to host the VMware Tools packages. Each host must then be configured to use this repository for installs and updates - if not, VMware Tools will not be able to be installed/updated in the VMs. Kyle has posted <a href="http://blogs.vmware.com/vsphere/2012/03/setting-up-a-shared-vmware-tools-directory.html" target="_blank"> an excellent article</a> on this configuration.

Outside of the tools-light VIB, there's really no benefit to removing any of the other VIBs. Keep in mind the more customization that is done the more work needed each time there is an update, patch, upgrade as the custom image profile has to be recreated.

Regarding drivers, in general use VMware’s version a driver unless you are trying to address a specific issue (or new feature) that the Vendor’s version would resolve (or introduce.) The reason for using a VMware release in mainly around support. VMware Global Support Services might ask for a roll back to the VMware specific driver version. It's also worth noting that if a Vendor's driver is installed (e.g. v1.2 of Broadcom NIC) and VMware releases a updated version of the Broadcom driver (e.g. v1.3) that Update Manager will install the newer driver.

<h3>Additional Recomendations</h3>

The ESXi Software Depot that VMware provides come with two default image profiles, one with tools (<em>standard</em>) and one without (<em>no-tools</em>). The key difference being the image without tools is ~150MB where the image with tools is ~300MB.

If using Auto Deploy, where ESXi is deployed over the network, use the image profile without tools. With Auto Deploy the image is streamed over the network to each host during boot. Using a smaller image will improve host boot time and reduce the load on the Auto Deploy server.

If booting from a local disk, use the standard image. There is a dedicated disk partition created to store the tools ISOs when booting from disk so there's no storage savings by excluding them. One exception to this rule is if you have a lot of ESXi hosts and want to setup a central tools repository that is shared by all your ESXi hosts. In this case use the "no tools" image.