---
layout:         post
title:          "Getting Started with VMware Cloud Foundation: SDDC Manager’s Events and Alerts"
subtitle:       ""
date:           2016-11-29 10:30:00
author:         "Ryan Johnson"
tags:           [SDDC, VCF, VMware Cloud Foundation]
published:      true
---

In a previous post, [we discussed the dashboard in SDDC Manager](http://blogs.vmware.com/cloud-foundation/2016/11/22/sddc-managers-dashboard/) – a purpose driven component that provides a centralized management plane for the provisioning, monitoring and ongoing management of both the logical and physical resources of your VMware Cloud Foundation based private cloud. In this post, we delve into the events and alerts seen in System Status section of the UI. After logging into the user interface, you'll use the navigation panel on the left to move between the different areas of the interface. The Status is the second item you'll finf on the navigation panel and it provides a high-level administrative view of the what’s happening in SDDC Manager. The built-in capabilities help you perform effective operations monitoring and auditing. And using the options in system status. you can monitor and examine details of SDDC Manager’s alerts, events, as well as the status of workflows.

![vcf-system-status2](/images/post-vcf-system-status2.png)

Let's dive in and start with events.

## Events

On the Status page, the UI shows you an overview of the total count of events and audit event, and their status. From here, you can drill-down into the details for each using their  View Details option.

![vcf-events](/images/post-vcf-events.png)

In SDDC Manager, an event is simply a record of a system condition that is potentially significant or interesting to you. These could be a degradation, failure, or user-initiated configuration change. SDDC Manager classifies events in three buckets:

### Hardware Operational Events

SDDC Manager will raise events that are related to hardware operations when its determined that a condition exists. When an event is raised it simply reports the health and state information about the device, any device it’s a member of, and the event condition. For example, it could report an event pertaining to an SSD drive in an all-flash ready node, the name of the node that the drive is located in, the associated rack, and the event condition.

### Audit Events

SDDC Manager’s audit events are related to user-initiated or system-generated operations. These events are raised when it determines that auditable condition exists. When raised. the event report includes information such as the user who initiated the event, the type of operation that was performed, and whether the operation failed or succeeded.

### Lifecycle Management Events

These events are related to any patch and upgrade operations you perform in SDDC Manager. When this event type is raised, it also includes information such as the type of operation that was performed, if the operation succeeded or failed, and the event condition that was triggered. All of the events raised in SDDC Manager are forwarded to their final destination in the integrated platform – vRealize Log Insight. Under the hood, SDDC Manager uses the vRealize Log Insight agent to send the events from its logs to the vRealize Log Insight cluster.

![vcf-vrli-agent](/images/post-vcf-vrli-agent.png)

Once events have been forwarded to vRealize Log Insight, the oldest local events are queued for deletion when the event count reaches a default upper limit of 80% of 1000, or 800 events. When the upper limit of 800 is reached, the events are deleted in batches of 100 until the current event count is reduced to less than a default lower limit of 60% of 1000 events, or 600 events. When you drill-down into the event details by selecting View Details, it’ll show the events have occurred in the system. You’ll only see the events for the default time period of 14 days. Any event older than 14 days won’t be shown but will available in the vRealize Log Insight collection.

![vcf-system-events](/images/post-vcf-system-events.png)

The count at the top shows the number of events raised within last 14 days and those that haven’t been forwarded to vRealize Log Insight. Because this count doesn’t include events that have already been forwarded to vRealize Log Insight, the count may be less than the number of events listed below it. The events listed below include both the forwarded and those scheduled to be forwarded. Here you’ll see the most recent events at the top. As you scroll, more of the events that have been forwarded to vRealize Log Insight are displayed, until all events that have occurred within the past fourteen days are loaded. The UI also allows you to filter the events based on severity so you can reduce the list to a smaller subset, and you can expand each event to see its details.

![vcf-event-failure](/images/post-vcf-event-failure.png)

When selecting the View Details option for the Total Events, the System Events page allows you to launch vRealize Log Insight using the Analysis option. There you can examine log data, perform interactive analytics, create dashboards, and more. You also have an option to filter and select all pre-defined events in the event Catalog to view its severity, description, resource hierarchy, categories, and type.

![vcf-analysis-catalog](/images/post-vcf-analysis-catalog.png)

If you select the View Details option for the Audit Events, it lists of all audit events like system events does. And similarly, you can select the Analysis option to launch vRealize Log Insight at examine the events.

![vcf-event-catalog](/images/post-vcf-event-catalog.png)

## Alerts

Now that we’ve covered Events, let’s move on to Alerts. An alert is a record of a known detected problem. SDDC Manager raises an alert to warn about problematic conditions that may impact workload service level agreements (SLAs) or that require you to intervene. In turn, each alert will generate two events – one when a alert is raised and another when an alert is cleared. SDDC Manager periodically polls the status of the hardware resources and calls its built-in problem-detection service if a problem condition exists. For servers and switches, the polling interval is every 30min during which it verifies the resources are discoverable and obtains their status. For hardware inventory, the polling interval is every 24hrs during which it refreshes the hardware inventory data. If the analysis during the polling indicates that a problem condition exists, the system will raise a single alert per persistent problem. Within the UI, you can verify and resolve the reported problem, as well as clear the alert.

![vcf-alerts](/images/post-vcf-alerts.png)

Clicking View Details show the alerts and allows you to examine and clear any those that have been raised.  Expanding the alert, you’ll see details such as the time reported, and a description. And by default, the list shows all alerts that haven’t yet been cleared. Using the severity and type menus you can filter a subset the alerts and after you have addressed the issue that is causing an alert, you can simply clear the alert itself.

![vcf-severity-type](/images/post-vcf-severity-type.png)

Similar to what events provides, you have an option to open an Alert Catalog. Here you can the severity, description, resource hierarchy, categories, and type for all of SDDC Manager’s alert definitions. Or you can filter by severity and use the search functionality to find a specific alert.

![vcf-alert-catalog](/images/post-vcf-alert-catalog.png)

And there you have it, an overview of the events and alerts shown on the status section in SDDC Manager UI - a purpose driven component that provides a centralized management plane for the provisioning, monitoring and ongoing management of both the logical and physical resources of VMware Cloud Foundation. Stay tuned for more posts as we dive deeper into VMware Cloud Foundation.
