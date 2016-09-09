---
layout:         post
title:          "VMware Validated Design for Software-Defined Data Center Hand-on Lab"
subtitle:       ""
date:           2016-09-09 10:30:00
author:         "Ryan Johnson"
tags:           [SDDC, VVD]
published:      true
---

In my [last post](/2016/09/07/vvd-sddc-3x-poster/), I discussed the upcoming release of the [VMware Validated Design](http://vmware.com/go/vvd) for SDDC 3.0 that was announced at VMworld 2016 in Las Vegas. Recall that the design provides a prescriptive and extensively-tested blueprint to deploy and operate an entire Software-Defined Data Center by synthesizing the full stack into a standardized, streamlined and scalable architecture, and it provides detailed guidance for an optimal deployment and efficient on-going operations. But, how do you get started learning about the design in an interactive way ***before*** delving into the [comprehensive documentation](http://vmware.com/go/vvd-sddc)? For that, we've publicly released Hands-on Lab [HOL-1706-SDC-6](http://labs.hol.vmware.com) that debuted at VMworld.

VMware Hands-on Labs is a free online learning portal by VMware which provides access to the latest products in a tested and documented cloud based virtual lab environment. Our labs are focused on showing the latest in product features and capabilities, as opposed to prescriptive guidance on Software-Defined Data Center architectures. As such, we keep our labs as lean as possible – ensuring maximum performance and scale while providing everyone the best possible experience in the learning environment. So, how did we create a lab that shows the architecture of the VMware Validated Design for SDDC? 
Since the full design itself is not conducive to a nested lab, we've used a new concept that was introduced for many of our labs this year - *interactive simulations*. These interactive simulations allow us to present a lab simulation that follows along with the lab manual and any educational content. The response to the simulations has been overwhelmingly positive. The labs not only start up quickly, but they simulate a real production environment and include a guided lab manual. In fact, the modules I recorded for the lab this Summer were done in one of my physical testbeds and then converted to these simulations.
The lab manual for [HOL-1706-SDC-6](http://labs.hol.vmware.com) includes modules and lab simulations for the following:

![HOL-1706-SDC-6 Modules](/images/post-vvd-sddc-hol.png)

In addition, we've included a ton of extra education contents about the architectue in the lab. Such as architecture detail and diagrams that you can refer to during the lab. Or, if you like, you can just jump to the simulation straight away.

## Don't Have Time to Take the Lab or a Visual Learner?

I recognize that some individuals may not either have time to take the lab or simply prefer to learn in more visual way. With that in mind, I took the same simulations and created demo videos for each of the modules. And they're available, now.

* [Core Platform Architecture](https://youtu.be/Z51KdPteRHM)
* [Software-Defined Storage with Virtual SAN](https://youtu.be/IkbdvKvk4aU)
* [Software-Defined Networking with NSX](https://youtu.be/RCW4VMFSz70)
* [Cloud Operations Monitoring and Alering with vRealize Operations](https://youtu.be/pWPVZr9-DIs)
* [Cloud Operations Logging and Analytics with vRealize Log Insight](https://youtu.be/B-VX-OETX_o)
* [Cloud Management and Automation with vRealize Automation](https://youtu.be/Wgnw_2hgvOY)
## Don't Forget
In addition, with the announcement of this upcoming design VMware Validated Design for Software-Defined Data Center 3.0 we've the [VMware Validated Design for Software-Defined Data Center 3.x Reference Poster](https://communities.vmware.com/docs/DOC-32783) available for this upcoming release over in the VMware Communities. This poster depicts many portions of the fundamental architecture for both quick reference and discussion

[![VMware Validated Design for Software-Defined Data Center 3.x Poster](/images/poster-vvd-sddc-3x.png)](https://communities.vmware.com/docs/DOC-32783)

Over in the communities you can also get a sneak peek of the design before the release and stay updated on what we are cooking up. Join the VMware Validated Designs community at [vmware.com/go/vvd-community](vmware.com/go/vvd-community) and provide feedback on the designs.

Any views or opinions expressed herein are strictly those of the author. Content does not necessarily represent or reflect the views or opinions of VMware or the author’s mother.
{: .notice_info}
