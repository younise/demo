---
layout:			post
title:				"On Standards"
subtitle:			"10 Standards Selection Decision Criteria"
date:				2012-08-16 10:30:00
author:			"Ryan Johnson"
tags:				[Enterprise Architecture]
published:		true
---

When an individual, group or pulls the "It's a Standard" card, what's your reaction? Do you take it for face value or do you question the the "standard" and how it achieved this status?

I often find that these "standards" are defined without a clear path. Many are "de-facto standards" that have "always been that way" and others an individual or group labeled as a standard because it was confortable.

For example, I had a customer's application delivery teams select the infrastructure and management platform for a desktop virtualization solution while dismissing the organizations investment, expertise and success with technologies that run &gt;90% of enterprise application workloads. All based on their perceived comfort from the <em>brand name </em>of the vendor.

I'm of the opinion that organizations should adopt a set of baseline decision criteria that are used for the purpose and process of selecting and gaining *consensus* on architecture standards. This baseline should represent the minimum set of decision criteria needed, and this baseline can be used as the basis of a business case analysis.

When the someone or some group *(e.g. domain team, ad hoc working group, or other body/individual)* of a proposed standard applies these criteria, they can then prioritize the relative importance of each criterion by assigning weights as applicable given the technical domain for which these criteria are being considered.

Prioritizing, weighting, and applying these decision criteria ensures the same level of analysis in considering standards that a project and product manager exercises when developing a project proposal for a potential investment.

###The Rational

The two principles that I believe best drive standards selection decision criteria are:

I. **Optimum Enterprise Benefit** - Architectural decisions will maximize the overall benefit by balancing the following criteria: accessibility, consistency, cost, diversity of business needs, flexibility, functionality, manageability, precision, risk, scalability, security, supportability and value.

II. **Components** - Architecture supports technologies to meet the mission-differentiating needs of an organization and requires mature, proven interoperable technologies in support of service environments. Technical diversity that does not tie to business needs is discouraged.

###The Decision Criteria

The decision criteria that I recommend are:

I. **Existing Installed Base** – evaluates an organization experience with the technology and the use and adoption of the standard throughout organizations technology landscape. A large installed base is favorable because it suggests that the organization has the skills and competencies required to work with, support, service, or otherwise maintain the technical element. Existing installed base also indicates that the technology or product being evaluated has proven itself to be a fit for organizations needs and environment.

II. **Fit With Existing Standards, Technologies, and Systems** – evaluates any known interoperability issues a potential standard may have with existing technology standards such as compatibility with existing services and processes. Products and standards that have a track record of interoperating within an organizations environment, or within environments similar to the organization, expose organizatio to less risk than products that have yet to be proven and/or may have unknown issues, incompatibilities, or risks.

III. **Maintainability/Supportability** – evaluates the effort and specialized skill sets required to support a technology standard. For example, by minimizing the number of operating systems or database management systems, an organization can minimize the time, effort and expenditure needed to integrate applications and manage data. This will help to facilitate training and simplify staffing since skills requirements are streamlined.

VI. **Cost** – evaluates the estimated total cost of ownership if organization chooses to adopt the standard. The total cost of ownership will consider both the cost to procure the technology as well as the anticipated costs to transition, maintain, support and integrate the technology on an ongoing basis. Cost estimates based on market research statistics and independent research opinions will be used in the decision-making process.

V. **Strategic Value** – evaluates the breadth of product capabilities in order to leverage an investment. Products that offer more capabilities that could be leveraged in the future provide the an organizations with more flexibility and scalability than do products without these advantages.

VI. **Flexibility** – evaluates the breadth of the standard’s applicability to multiple stakeholders. For example, a product that meets the needs of multiple constituencies provides the organization with more enterprise-wide implementation opportunities than do “niche” products that are adaptable to only a small set of constituencies (assuming capabilities are equal).

VII. **Security** – evaluates the ability and/or effectiveness of the potential technology standard within the organizations security environment. Products that comply with existing security policy or standards, and/or do not have any known conflicts with components represent less risk (implementation risk, cost risk, and security risk) than do products or standards that have yet to be proven and/or may have unknown issues, incompatibilities, or risks.

VIII. **Compliance** – evaluates the ability and/or effectiveness of the potential technology standard within the environment to fit within the IT governance framework that organization employs or must comply.

IX. **Vendor Viability** – evaluates the health of the product vendor in terms of its stability, projected longevity, and likelihood it will exist in the future to support the product and later versions of the product. Vendor viability will be determined by its financial health, position in the market place, external research sources and any market factors that could compromise the vendor’s existence. In the case of open source standards, where financial health and market coverage are not discerning variables, project and organization history will be addressed in the evaluation as well as those vendors who provide support for these open source standards.

X. **Industrial Installed Base** – evaluates the use and adoption of the standard throughout industry in general (both commercial and public enterprises). A large installed base is an indication that personnel and supplementary tools and products are available to support, service, or otherwise maintain the technical element.

By applying the enterprise architecture decision criteria to my earlier example perhaps the best standard <em>(not necessarily a different one)</em> for the organization would have been chosen.

How woud these decision criteria improve your organizations standards selections?
