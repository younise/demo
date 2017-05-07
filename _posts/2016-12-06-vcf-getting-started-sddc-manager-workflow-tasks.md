---
layout:         post
title:          "Getting Started with VMware Cloud Foundation: SDDC Manager’s Workflow Tasks"
subtitle:       ""
date:           2016-12-06 10:30:00
author:         "Ryan Johnson"
tags:           [SDDC, VCF, VMware Cloud Foundation]
published:      true
---

In a previous post, we discussed the events and alerts found in SDDC Manager’s System Status. In this post, we delve further into the System Status and focus on SDDC Manager’s workflow tasks. Workflow Tasks is found in the **Status** item on the navigation.

![vcf-system-status](/images/post-vcf-system-status.png)

SDDC Manager breaks things down into: workloads, workflows, and tasks. So, before we jump into the UI, I’ll provide a brief overview of these. **Workloads** are applications that run in our Software-Defined Data Center.  In VMware Cloud Foundation, workloads run inside _"Workload Domains"_.  Different types of workload domains are used to host different types of workloads.  For example, the management workload domain is where the SDDC infrastructure components run.  Different types of workload domains can be created to host the different types of business workloads and end-user computing services. Each workload domain is configured with unique configuration parameters that specify the resource requirements as well as availability and performance settings. **Workflows** represent a group of related tasks that are executed to perform an action. For example, creating a workload domain, expanding a workload domain, deleting a workload domain and as well as patching and upgrading a workload domain. **Tasks** represent a unit of work _within a workflow_. Tasks may perform calculations, allocate resources, and even request resources. Task may contain a single step or include multiple steps. Tasks are ordered and executed in sequence, with each task picking up where the previous task left off.  If a task fails, it may be resumed from right before its point of failure, and since a task may include multiple steps, the step that follows the last successful step in the task can be the point where the task is resumed for retry. Summed up, a task is a unit of work that’s performed by SDDC Manager. A workflow is a series of orchestrated tasks that perform an overall goal, such as creating, expanding, updating, or deleting a workload domain. In Cloud Foundation, the SDDC Manager is responsible for defining and executing tasks and workflows.  It is through the automation of  tasks and workflows, that SDDC Manager is able to simplify the provisioning, monitoring and ongoing management of both the logical and physical resources of your VMware Cloud Foundation based private cloud. With that introduction, let’s look at how tasks and workflows are viewed and managed in the SDDC Manager’s UI. On the System Status page, you can see the total count of workflows and tasks at a glance, as well as a listing of tasks by state: new, running, failed, resuming, and successful. As a result, you get immediate insight on the progress.

![vcf-workflow-tasks](/images/post-vcf-workflow-tasks.png)

Using the filter option, the UI will display the workflow and task counts during the time frame within which they were reported.

![vcf-filter](/images/post-vcf-filter.png)

When you select **View Details**, you can drill-down into the details on the workflows and their sub tasks. Here the workflows page lists all of the workflows that have been started in SDDC Manager. You can search for a specific workflow based on a keyword, and filter the list based on the workflow state and time frame.

![vcf-workflows](/images/post-vcf-workflows.png)

You can select and expand a workflow to view a list of its tasks and detailed information. In this example, you see the “_VI – Resource Pool – Lab-TMM_” workload that launch when I created a new workload domain in my lab. _**But what really happened during the workflow run?**_ For that can, you expand a workflow and select the **View Sub Tasks** to see the lists of tasks that are built into the workflow. In this example, you can see a portion of the many sub tasks that were orchestrated to create my workload domain based on the configuration parameters I provided when it was requested.

![vcf-sub-tasks](/images/post-vcf-sub-tasks.png)

This workflow and its tasks did all the heavy lifting for me and automated the entire configuration. For me, it was zero-touch and at a high-level it:

*   Updated the VLANs on the Top-of-Rack Switches
*   Configured Forward and Reverse DNS
*   Deployed and Configured the vCenter Server Instance
*   Applied Licensing to Solutions
*   Created the Distributed Switch and Port Groups
*   Prepared and Configured All Hosts
*   Created the vSphere Cluster with Required Availability
*   Enabled vSAN with Performance and Availability Requirements
*   Deployed and Configured NSX
*   Integrated Components with vRealize Log Insight
*   Integrated Components with vRealize Operations
*   Backed Up All Hosts Configurations

If any of the many tasks in the workflow had moved into a failed state, they can be rerun it by simply clicking a **restart task** option where it’ll pick back up just before the failure. And, of course, you can easily expand an individual sub task from the lists the tasks involved in that workflow to drill into the task details. Here for example, we see that the each of the three NSX Controllers nodes have been deployed were successfully deployed for the new workload domain.

![vcf-sub-task-nsxc](/images/post-vcf-sub-task-nsxc.png)

And there you have it, an overview of the workflow tasks shown on the status section in SDDC Manager UI - a purpose driven component that provides a centralized management plane for the provisioning, monitoring and ongoing management of both the logical and physical resources of VMware Cloud Foundation. Stay tuned for more posts as we dive deeper into VMware Cloud Foundation.
