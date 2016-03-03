---
layout:     post
title:      "IT Governance and the Software-Defined Datacenter: The Virtualization Policy"
subtitle:   ""
date:       2012-09-21 12:00:00
author:     "Ryan Johnson"
header-img: "img/post-bg-06.jpg"
---

As an organization matures in its journey towards IT-as-a-Service, it becomes increasingly apparent that this is unachievable without increased workload virtualization.

An organization must adapt its IT Governance and adopt a "<em>virtualization first"</em> policy for application workloads. Only then will they be on the path tp realize the full potential of the software-defined datacenter.

This governance process is one in which through which all workloads (net-new, or refreshed) will be deployed as or on virtual machines unless exempted through an virtualization candidate criteria or through an exception process with appropriate override authorization. Any workload, is subject to the governance process - for example, Mission Critical, Business Critical, Business Important or Supporting Function workloads.

An example candidacy governance process and criteria are depicted and discussed below.

<a href="http://tenthirtyam.org/assets/Candidate-Workloads.png"><img class=" wp-image-990 alignnone" title="Candidate Workloads" src="http://tenthirtyam.org/assets/Candidate-Workloads-1024x813.png" alt="" width="544" height="431" /></a>
<h3>Non-Candidate Workloads</h3>
While most current platforms natively exceed the requirements for application workloads (e.g. VMware vSphere 5.1) the capabilities and the capacity for the as-is deployed platform needs to be considered.

Any workload identified beyond the supportable attributres should be
<ul>
	<li>reviewed for options deployment methods (e.g. scale out vs scale up),</li>
	<li>be reconsidered as a viable application platform or</li>
	<li>not be virtualized and incur the additional risk and cost(s).</li>
</ul>
Example:
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="190"><strong>Attribute</strong></td>
<td valign="top" width="10"><strong> </strong></td>
<td valign="top" width="400"><strong>Value</strong></td>
</tr>
<tr>
<td valign="top" width="190">CPU</td>
<td valign="top" width="10"></td>
<td valign="top" width="400">&gt; 64 CPU</td>
</tr>
<tr>
<td valign="top" width="190">RAM</td>
<td valign="top" width="10"></td>
<td valign="top" width="400">&gt; 1 TB</td>
</tr>
<tr>
<td valign="top" width="190">Storage</td>
<td valign="top" width="10"></td>
<td valign="top" width="400">&gt; 64 TB</td>
</tr>
<tr>
<td valign="top" width="190">Hardware: Proprietary</td>
<td valign="top" width="10"></td>
<td valign="top" width="400">Non-USB License Dongles
Hardware Encryption Devices
I/O Boards (Serial Cards, etc)</td>
</tr>
</tbody>
</table>
<h3>Qualified Candidate</h3>
Workloads which are not automatic can fall into qualified based on atributes supported by the native platform and deployment architectures.

For example:
<ul>
	<li>Required CPUs</li>
	<li>Average CPU Usage</li>
	<li>Required Memory</li>
	<li>Average Memory Usage</li>
	<li>Required Storage</li>
	<li>Average Storage I/O</li>
	<li>Required Network Interfaces</li>
	<li>Average Network I/O</li>
	<li>Operating System and Edition</li>
	<li>Application Support Status</li>
	<li>etc...</li>
</ul>
<h3>Application Support</h3>
In order for an application workload to be fully supported on a virtualization platform, a support statement from the vendor is desirable.

For example, with VMware, their ISV team can provide specific statements from the vendors themselves or equests for specific vendor statements can be submitted to the VMware ISV team by visiting: <a href="http://www.vmware.com/go/isvsupport"><em>http://www.vmware.com/go/isvsupport</em></a>.  Alternatively, an organization's VMware Technical Account Manager is able to provide support statements and work with vendors to ascertain or establish support statements.

In general, vendor support statements fall into general categories described in this section.

[infobox]Organizations should consider leveraging virtualization for any application which fall into the ‘Yes’ categories.
<h3 style="padding-left: 30px;">Yes.</h3>
<p style="padding-left: 30px;"><em>&lt;COMPANY NAME&gt; will support &lt;APPLICATION NAME&gt; in a virtualized environment provided recommended requirements are met and best practices are followed.                           </em>

<h3 style="padding-left: 30px;">Yes, by Default.</h3>
<p style="padding-left: 30px;"><em>&lt;COMPANY NAME&gt; states there is no virtualization specific support statement. </em>
<p style="padding-left: 30px;"><em>With that being said &lt;COMPANY NAME&gt; does support &lt;APPLICATION NAME&gt; running on a platform with our stated systems requirements, &lt;SYSTEM REUIREMENTS HERE&gt;. As long as the system requirements are met &lt;APPLICATION NAME&gt; is supported by the vendor and any other issues which are determined to be outside of &lt;APPLICATION NAME&gt; are supported by other vendors. </em>

<h3 style="padding-left: 30px;">Yes, but Fuzzy.</h3>
<p style="padding-left: 30px;"><em>&lt;COMPANY NAME&gt; approach to virtualization is to treat each as a transparent layer. &lt;COMPANY NAME&gt; products are built, tested and supported on the native operating system (e.g., Windows, Linux, etc.). &lt;COMPANY NAME&gt; will continue to provide support to a client whether an approved virtualization platform is present or they are running on the native OS, however, issues believed to be related to virtualization may be required to be reproduced in a physical environment. Because <em>&lt;COMPANY NAME&gt;</em> does not test products with virtualization, the support is based on the virtualization vendor providing complete transparency.</em>

<h3 style="padding-left: 30px;">Yes, with Qualifying Support Statement</h3>
<p style="padding-left: 30px;"><em>&lt;COMPANY NAME&gt; will support products on irrespective of whether they are running in virtualization environments or not. &lt;COMPANY NAME&gt; supports specific operating systems, not specific hardware configurations.</em>
<p style="padding-left: 30px;"><em>&lt;COMPANY NAME&gt; will not require customers to recreate and troubleshoot every issue in a non-virtualized environment; however, &lt;COMPANY NAME&gt; may reserve the right to request that an organization diagnose certain issues in a native, bare-metal operating system environment. &lt;COMPANY NAME&gt; will only make this request when there is reason to believe that the virtual environment is a contributing factor to the issue. </em>
<p style="padding-left: 30px;"><em>Any time spent on investigation of problems that may, in the sole opinion of &lt;COMPANY NAME&gt; be related to virtualization, will be handled in the following fashion: </em>

<ol style="padding-left: 30px;">
	<li style="padding-left: 30px;"><em>&lt;COMPANY NAME&gt; will provide standard support to all &lt;COMPANY NAME&gt; products.
</em></li>
	<li style="padding-left: 30px;"><em>If a problem is encountered while &lt;COMPANY NAME&gt; products are running in a virtualization environment, the organization may be required to recreate the problem on physical instance, at which time &lt;COMPANY NAME&gt; will provide regular support.
</em></li>
	<li style="padding-left: 30px;"><em>The organization  can authorize &lt;COMPANY NAME&gt; to investigate the related items at normal time and materials rates. If such investigation shows that the problem is virtualization related, the organization may contract &lt;COMPANY NAME&gt; to provide a software change to resolve the issue if such a resolution is possible.
</em></li>
	<li style="padding-left: 30px;"><em>Regardless of the problem type or source, if the problem is determined to be a virtualization related time spent on investigation and resolution will be covered as part of regular maintenance, and support will be provided as usual. </em></li>
</ol>
<h3 style="padding-left: 30px;">Yes, with Unqualified Support</h3>
<p style="padding-left: 30px;"><em>&lt;COMPANY NAME&gt; confirms support for &lt;APPLICATION NAME and VERSION&gt; for supported operating systems in a virtualization environment. &lt;COMPANY NAME&gt; will provide unqualified support for &lt;APPLICATION NAME and VERSION&gt; running in a virtualization environment in an identical manner as with &lt;APPLICATION NAME and VERSION&gt; running on any other major x86 based systems without initially requiring reproduction of issues on native hardware. </em>
<p style="padding-left: 30px;"><em>Should &lt;COMPANY NAME&gt; suspect that the virtualization layer is the root cause of an incident; the organization will be required to contact the appropriate provider to resolve the virtualization issue. While &lt;APPLICATION NAME and VERSION&gt; is expected to function properly in virtualization, there may be performance implications which can invalidate sizing and other recommendations.</em>

<h3 style="padding-left: 30px;">No</h3>
<p style="padding-left: 30px;"><em>&lt;COMPANY NAME&gt; does not support &lt;APPLICATION NAME&gt; running in a virtualization.[/infobox]</em><em></em>

<h3>Licensing Considerations</h3>
Organizations should recognize that many software vendors have different approaches to software licensing when applied to a virtualization. Several of these approaches are not “virtualization friendly” and unfortunately may require difficult vendors discussions. Organizations should work with software vendors who support the virtualization and avoid vendors who do not employ fair licensing practices in a virtual environment.
<h4>"Virtualization-Friendly" Licensing</h4>
Software vendors which treat a virtual machine as a physical machine and require the same licensing on either a physical or virtual platform have virtualization-friendly licensing. For example, if a software product is licensed based on the number of processors, and a physical machine with 2 processors is the same as a virtual machine with 2 virtual processors, this is a virtualization-friendly license scheme.
<h4>Other Licensing</h4>
Software vendors which tie licenses to the underlying physical hardware, regardless of the virtual environment that software is running can result in substantial increases in software licensing (e.g. Oracle). For example, if software is licensed based on the number of physical processors or cores, regardless of the virtual environment, a software product executing on a virtual machine with one virtual processor will have to pay for a software license covering each of the processors or cores in the underlying physical hardware. Some software vendors will require licenses for each processor or core that the software may end up executing on. In a software-define data center where workloads are mobility is dynamic, this can result in the need to license each processor or core . Organizations should avoid these licensing schemes and are strongly encouraged to seek out vendors who have virtualization-friendly licenses.
<h4>Licensing Statements</h4>
Virtualization candidate workloads should obtain licensing requirements from software vendors to ensure that licensing in the virtual environment is supported by the vendor and does not introduce a penalty for virtualization of the software.
<h3>Exception Process and Approvals</h3>
Workloads which are identified as candidates may be exempted from policy through override sponsorship by IT Governance only.

Examples:
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="100"><strong>Decision</strong></td>
<td valign="top" width="10"></td>
<td valign="top" width="200"><strong>Override</strong></td>
<td valign="top" width="10"></td>
<td valign="top" width="300"><strong>Description</strong></td>
</tr>
<tr>
<td valign="top" width="100">Automatic</td>
<td valign="top" width="10"></td>
<td valign="top" width="200"><a title="On Enterprise Architecture Roles and Responsibilities." href="http://tenthirtyam.org/2012/on-enterprise-architecture-roles-and-responsibilities/">IT Governance Committee</a></td>
<td valign="top" width="10"></td>
<td valign="top" width="300">This workload represents the majority of servers within an environment. It represents applications that do not tax systems extensively and have no technical reason not to be virtualized. If a department wishes for these to be physical, they must obtain the defined level of override sponsorship.</td>
</tr>
<tr>
<td valign="top" width="100">Qualified</td>
<td valign="top" width="10"></td>
<td valign="top" width="200"><a title="On Enterprise Architecture Roles and Responsibilities." href="http://tenthirtyam.org/2012/on-enterprise-architecture-roles-and-responsibilities/">EA Governance Committee</a></td>
<td valign="top" width="10"></td>
<td valign="top" width="300">These workloads have been used within a virtual environment and appear to be working adequately. Outstanding issues which may not qualify them for automatic consideration for virtualization may be a large workload or an untested application moving forward. These workloads typically require further analysis and testing in a virtualized environment.</td>
</tr>
<tr>
<td valign="top" width="100">Non-Qualified</td>
<td valign="top" width="10"></td>
<td valign="top" width="200"><a title="On Enterprise Architecture Roles and Responsibilities." href="http://tenthirtyam.org/2012/on-enterprise-architecture-roles-and-responsibilities/">EA Governance Committee</a></td>
<td valign="top" width="10"></td>
<td valign="top" width="300">These workloads require resources that are higher than the current VMware Infrastructure has been designed for, or require special considerations. It is not to say that they cannot be virtualized, but that standard rules most likely do not apply. For this reason a director should be made aware of the request for physical hardware, and special efforts may need to be taken in order to ensure that service levels are to be met.</td>
</tr>
</tbody>
</table>
<h3>Non-Candidate Workarounds and Approaches</h3>
Workloads which are identified as non-candidates based on the criteria in may be able to become virtualized through several approaches which may be offered over time or desirable and justifiable as point-solutions.

Examples:
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="190"><strong>Contraint</strong></td>
<td valign="top" width="10"><strong> </strong></td>
<td valign="top" width="400"><strong>Workaround | Approach</strong></td>
</tr>
<tr>
<td valign="top" width="190">Resource Limitations</td>
<td valign="top" width="10"></td>
<td valign="top" width="400">The platform service continues to expand on the maximum configurations permitted with each new release.</td>
</tr>
<tr>
<td valign="top" width="190">Hardware: Fax and Voice Cards</td>
<td valign="top" width="10"></td>
<td valign="top" width="400">Many telephony and fax solutions are moving to support the offloading of fax and voice processing to a separate, networked hardware device and communicating via IP. Contact your vendor to investigate this possibility for current and future versions of the solution.</td>
</tr>
<tr>
<td valign="top" width="190">Hardware: Modems and other Serial Port Connections.</td>
<td valign="top" width="10"></td>
<td valign="top" width="400">Many modem devices can be replaced with the use of a serial-over-IP solution which presents to the Virtual Machine guest operating system as a serial port and redirects traffic via IP to the modem. This approach is generally transparent to the application.</td>
</tr>
<tr>
<td valign="top" width="190">Hardware: Security Dongles</td>
<td valign="top" width="10"></td>
<td valign="top" width="400">Many applications which have required a physical hardware dongle in the past now also support the use of distributed licensing control mechanisms.</td>
</tr>
<tr>
<td valign="top" width="190">Software: Unsupported Operating System</td>
<td valign="top" width="10"></td>
<td valign="top" width="400">Consider migration to another application or operating system where appropriate.</td>
</tr>
<tr>
<td valign="top" width="190">Software: Unsupported Application</td>
<td valign="top" width="10"></td>
<td valign="top" width="400">Many vendors are moving to support virtualization platform services with their applications. Contact your vendor to investigate this possibility for current and future versions of the solution. VMware, for example, also maintains a team which works with vendors to introduce support statements for products on VMware. Consider this as a criterion for product selection when current licensing agreements expire.</td>
</tr>
</tbody>
</table>
Does your organization have a “<em>virtualization first</em>” IT Governance process? If so, how's it helping you in your journey to IT-as-a-Service; how are you working with business, partners and vendors to drive adoption?

<a href="http://tenthirtyam.org/ask/">Send me your thoughts</a>.