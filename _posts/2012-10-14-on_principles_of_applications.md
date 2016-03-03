---
layout:     post
title:      "On Principles of Applications"
subtitle:   "Fundamental Values"
date:       2012-10-14 12:00:00
author:     "Ryan Johnson"
categories:
- Enterprise Architecture
header-img: "img/post-bg-01.jpg"
---

<p>As discussed previously, principles are high level statements of the fundamental values that guide business and technology decision-making and activities and are the foundation for architecture, standards, and policy development. Principles are stable enough to withstand technological and process changes but timely enough to maintain a clear relevancy with markets, policy, program, and management changes.

Principles consist of the principle statement, rationale, and implications. Though the wording for principles should remain consistent, the rational and implications will evolve over time, as an organization responds to factors such as the current IT environment, internal initiatives, external forces and markets, and changes in mission, vision, and strategic plan.

In my prior role as an Enterprise Architect, I used the following Principles for the foundation of the Enterprise Applications. Even with the changes in the industry since I last wrote these  - public, private and hybrid cloud computing, dev-ops, etc - these principles have been steadfast.

Though, perhaps I could spend some time and update them...
<h3>Application Integration</h3>

Enterprise applications will include known, published mechanisms for integration.

<ul>
	<li><em>Rationale – </em>Better application integration will reduce redundant data entry, will decrease the number of reconciliation problems and will make accurate data available quickly.</li>
	<li><em>Implications –</em></li>
</ul>

<h3>Standards Compliance</h3>

Developers of enterprise applications will comply with all enterprise  standards in effect at the time. This principle applies to internal or outsourced development and to COTS software, although to a lesser extent.

<ul>
	<li><em>Rationale – </em>Organization policy (a) mandates the adoption of standards and (b) favors COTS applications when suitable.  Therefore, when COTS software does not fully comply with enterprise standards, a balanced evaluation is necessary.</li>
	<li><em>Implications –</em></li>
</ul>

<h3>Application Ownership</h3>

Applications will have an identified business owner and technical owner or lead.

<ul>
	<li><em>Rationale – </em>Technology is effective only when aligned with business needs. Both technical and business interests will be represented when making decisions.</li>
	<li><em>Implications –</em></li>
	<li><em>Comment – </em>Applications will have an identified business owner and technical owner or lead. The owners will share responsibility for the application, with the business owner taking the lead on business matters and the technical owner taking the lead on technical matters.</li>
</ul>

<h3>Application Documentation</h3>

Enterprise applications will be documented, both internally and externally.

<ul>
	<li><em>Rationale – </em>Poorly documented applications are expensive to maintain or modify.</li>
	<li><em>Implications – </em>Documentation standards need to be developed.</li>
</ul>

<h3>Business Alignment</h3>

Applications will have a stated business purpose. If there are multiple business purposes, they will be closely related.

<ul>
	<li><em>Rationale – </em>Technology is effective only when aligned with business needs. Also, it is easier to renew applications if there is modularity at a high level.</li>
	<li><em>Implications –</em></li>
	<li><em>Comment – </em>This principle is a well-known tenet of information engineering.</li>
</ul>

<h3>Decision Analysis for Acquisition</h3>

A decision to custom build can be made only after an analysis that considers other sources such as COTS and Open Source alternatives.

<ul>
	<li><em>Rationale – </em>Decisions that are made without considering the alternatives may be suboptimal.</li>
	<li><em>Implications – </em></li>
	<li><em>Comment – </em>No one alternative is favored for all cases.</li>
</ul>

<h3>Application Scope Definition</h3>

Enterprise Applications will meet broad needs. The requirements and design will be published prior to development, and all business units will have the opportunity to comment.

<ul>
	<li><em>Rationale – </em>Enterprise applications that consider only a subset of needs are unsuitable for enterprise-wide use. The result is a necessary proliferation of extension systems, which is inefficient.</li>
	<li><em>Implications – </em>The project plan will provide for this. Adequate communication methods will be developed.</li>
</ul>

<h3>Software Configuration and Change Management (SCCM)</h3>

The Software Configuration and Change Management (SCCM) process will be documented and all parties will adhere to it.

<ul>
	<li><em>Rationale – </em>When software is put into production without a SCCM process, reliability suffers, users are adversely affected, and extra cost is incurred to fix the problems.</li>
	<li><em>Implications – </em>Developers and maintainers of enterprise applications will have a CM process.</li>
</ul>

<h3>Systems Development Lifecycle (SDLC)</h3>

The systems development lifecycle will be documented and repeatable.

<ul>
	<li><em>Rationale – </em>Without an SDLC, software development is haphazard and risky.</li>
	<li><em>Implications – </em>Developers and maintainers of enterprise applications will have a documented SDLC.</li>
	<li><em>Comments – </em>The authors of this principle recognize that there are many well-know development methodologies. They intentionally avoided favoring one.</li>
</ul>

<h3>Reusability of Components</h3>

Applications should be assembled, in part, from reusable components or services.

<ul>
	<li><em>Rationale – </em>Reusable components lower cost of subsequent application development, but are initially more expensive to build than single-use components.</li>
	<li><em>Implications – </em>Developers should create new components as part of the implementation of new functionality.</li>
	<li><em>Comment – </em>The development of modular components and services is always favored, but not all components will or should be highly reusable.</li>
</ul>