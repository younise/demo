---
layout:         post
title:          "Shutdown and Startup a vSphere with Kubernetes Workload Domain"
subtitle:       ""
date:           2020-07-20 10:30:00
author:         "Ryan Johnson"
tags:           [SDDC, K8s, vK8s, VVD, VCF]
published:      true
---

In the last couple of days I've been doing some testing for a VMware Validated Design 6.0.x deployment which, of course, consumes VMware Cloud Foundation 4.0.x. By now, most have heard of vSphere 7 with Kubernetes and Tanzu Kubernetes Cluster [which can be deployed in the design](https://docs.vmware.com/en/VMware-Validated-Design/6.0/sddc-deployment-of-a-vsphere-with-kubernetes-workload-domain-in-the-first-region/GUID-7AC3C06E-D7D4-40C0-88E0-E90A0F3EE8AD.html) - but do you known how do you gracefully shutdown a workload domain and perform a graceful startup from a cold state?

After quite a bit of testing, I'm happy to share the process that I use to perform the processes.

## Shutdown a vSphere with Kubernetes Workload Domain
1.  In the shell for of the Workload Domain vCenter Server Appliance, stop the WCP services.

	`vmon-cli -k wcp`

2. In the shell for of the Workload Domain vCenter Server Appliance, verify that WCP services are `STOPPED`.

	`vmon-cli -s wcp`

3. Shutdown the vCenter Server for the Workload Domain
	* Shutdown Guest OS for the virtual machine from vSphere Client of Management Domain vCenter Server

4. Connect to the ESXi hosts using the vSphere Host Client and shut down the "SupervisorControlPlaneVM" virtual machines.
	 * Shutdown Guest OS for the virtual machines one at a time.
	 * Ensure that the virtual machines is powered of before proceeding to the next.

5. Connect to the ESXi hosts using the vSphere Host Client and shut down the TKG Control Plane and Worker virtual machines.
	* Shutdown Guest OS for the virtual machines one at a time.
	* Ensure that the virtual machine is powered off before proceeding to the next.

6. Connect to the ESXi hosts using the vSphere Host Client and power off all all VMware CRX pods.
	* These can not be shutdown as they do not have VMware Tools.
7. Connect to the ESXi hosts using the vSphere Host Client and shut down all other workload virtual machines.
	* Shutdown the Guest OS for the virtual machines.

8. Connect to the ESXi hosts using the vSphere Host Client and shut down all NSX Edge virtual machines.
	* Shutdown the NSX Edge virtual machines for the Workload Domain

9. Shutdown the NSX Manager virtual machines for the Workload Domain
	* Shutdown Guest OS for the virtual machines one at a time from vSphere Client of Management Domain vCenter Server.
	*  Shutdown the NSX Manager virtual machine of the cluster one at a time. Ensure that the node is powered off before proceeding to the next.

10. Enter Maintenance Mode and Power Off the ESXi Hosts

	* Enter Maintenance Mode, run: 
	
		`esxcli system maintenanceMode set -e true -m noAction`
	
	* Check Maintenance Modem run: 
	
		`esxcli system maintenanceMode get`
	
	* Ready Power Off, run: 
	
		`power off`
	
	* Power off the host remotely using out-of-band management (i.e. iDRAC, ILO, RSA, other) or physically.

> 	**Note:** The shutdown of the Management Domain will follow.

## Startup a vSphere with Kubernetes Workload Domain

> 	**Note:** The startup of the Management Domain will preceed.

1. Power On the ESXi Hosts and Exit Maintenance Mode 
	* Power on the host remotely using out-of-band management (i.e. iDRAC, ILO, RSA, other) or physically.
	* Exit Maintenance Mode, run: 
	
		`esxcli system maintenanceMode set -e false`

> **Important:** The hosts need to come online before vCenter Server.
 
2. Power on the vCenter Server for the Workload Domain
	* Power on from vSphere Client of Management Domain vCenter Server
	* Once services are online, logout from the vSphere Client and login again.

3. In the shell for of the Workload Domain vCenter Server Appliance, verify that WCP services are `STARTED`.

	`vmon-cli -s wcp`

4. Start Up the NSX Manager virtual machines for the Workload Domain
	* Power on from vSphere Client of Management Domain vCenter Server.
	* Power on the NSX Manager virtual machine of the cluster for the workload domain one at a time.
	* Ensure that the node is powered on before proceeding to the next.

5. Start Up the NSX Edge virtual machines for the Workload Domain
	* Power on from vSphere Client of Management Domain vCenter Server.
	* Power on the NSX Edge virtual machines for the workload domain.

6. "SupervisorControlPlaneVM" virtual machines will auto-start via EAM.

7. Tanzu K8s Clusters will auto-start based on declarative intent once the SupervisorControlPlaneVM" virtual machines are started.

8. Workload pods will auto-start based on declarative intent once the Tanzu Kubernetes Clusters are started.

9. If enabled, the Harbor registry will auto-start based on declarative intent.

