---
layout:     post
title:      "vSphere 5.x Datastore Cluster Allocated Space in the C# Client"
subtitle:   "Well, that's odd."
date:       2014-06-03 12:00:00
author:     "Ryan Johnson"
header-img: "img/post-bg-06.jpg"
---

<p>I ran across a wonky, albeit cosmetic, storage reporting error for Datastore Clusters on vSphere 5.x when using the vSphere Client (C#).

<p>When reviewing a Datastore Cluster in  the “Summary” tab under “Datastores and Datastore Clusters” it correctly reports a "Capacity." However, when viewing the “Hosts and Clusters” tab under “Datastores and Datastore Clusters” the vSphere Client will incorrectly reports how much has been "Allocated."

<p><strong>For Example:</strong>

<p>If you have a ESXi cluster of 5 ESXi hosts and the cluster has access to 3 x 1TB Datastores in a Datastore Cluster, the <strong>Summary</strong> tab under <strong>Datastores and Datastore Clusters</strong> will correctly report a <em>Capacity</em> of 3TB.

<p>However, the <strong>Hosts and Clusters</strong> tab under <strong>Datastores and Datastore Clusters</strong> incorrectly reports that 15 TB of  <em>Allocated Space</em>.

<p>Basically, the <em>Allocated Space</em> incorrectly multiplies the size of the Datastore Cluster by the host factor.

<p><img class="alignnone wp-image-2106" src="http://tenthirtyam.org/assets/DS-AllocatedSpace-vSphereClient1.jpg" alt="" width="800" height="458" />

<p><img class="alignnone wp-image-2107" src="http://tenthirtyam.org/assets/DS-AllocatedSpace-vSphereClient2-1024x153.jpg" alt="" width="800" height="120" />

<p><img class="alignnone wp-image-2108" src="http://tenthirtyam.org/assets/DS-AllocatedSpace-vSphereClient3.jpg" alt="" width="800" height="500" />

<p>Note however, that this DOES NOT appear in the vSphere Web Client  as it only shows the correct <em>Capacity</em>.

<p>Nor does it appear in does Get-DatastoreCluster &lt;DatastoreClusteName&gt; when using PowerCLI.

<img src="{{ site.baseurl }}/img/post-sample-image.jpg" alt="Post Sample Image">