---
layout:         post
title:          "On the Principals of Data Management"
subtitle:       ""
date:           2012-09-15 12:00:00
author:         "Ryan Johnson"
header-img:     "img/post-bg-06.jpg"
---

To be clear, this is not an article about <em>technology</em>. Rather, it is about the organizational, cultural and strategic factors that must be considered to improve the management of data, or information, within organisations.

There are two types of data: <em>structured</em> data and <em>unstructured</em> data.  Structured data refers to data that is kept and managed through database management systems.  Unstructured data refers to data refers to information that either does not have a pre-defined data model and/or does not fit well into relational tables. Unstructured information is typically text-heavy, but may contain data such as dates, numbers, and facts as well.

Effective information management is not simple, but this article draws together a number of ‘critical success factors’ for management of structured data for business transaction processing at or on behalf of an organization. These do not provide an exhaustive list, but do offer a series of principles that can be used to guide the planning and implementation of data management activities. While there is some overlap with business intelligence best practices, these principles do not universally apply to data kept for analytical processing in data warehouses.
<
h3>Data Assets</h3>

Data will be safeguarded, protected, and managed as a valuable asset.  The organization will maximize the value of data to the enterprise while protecting the confidentiality of valuable personal information.

<ul>
	<li>Rationale – Data has value to the enterprise and to the people who share their data with us.  As stewards of the public trust, the business has a responsibility to actively manage and safeguard data throughout its entire lifecycle from inception to disposition.  Decisions should maximize the benefit of data to the enterprise and the people of Florida.</li>
</ul>
<h3>Data Ownership</h3>
All data is owned by the business.   For management purposes, a Data Owner will be identified and will have accountability for data within a defined business function.  A Data Steward will also be identified within each business function and will be able to provide hands-on management expertise and guidance for specific data subject areas.
<ul>
	<li>Rationale – The organization has a corporate goal to ensure strong corporate governance and fiscal prudence.  In order to prudently manage data as an asset, the enterprise must appoint people with managerial responsibility, business acumen, and data expertise to actively manage and be accountable for data.</li>
</ul>

<h3>Data Control</h3>

The enterprise will maintain possession and/or control of data.

<ul>
	<li>Rationale – In order to maintain trust and faith in enterprise data, the enterprise must have control over databases.  The business controls who has access to data resources, what operations can be performed on the data resources, where they are stored, how they are secured, and how they are made available.</li>
</ul>
<h3>Requirements Driven Data</h3>
Data will be driven by business requirements and aligned with business processes.
<ul>
	<li>Rationale – In addition to ensuring corporate governance and fiscal prudence, The organization has a corporate goal to ensure appropriate capability and reliability of business systems.  It costs money and takes time to design data structures, and to collect, store, maintain, report, and archive data.  Therefore, any data maintained by the enterprise must be appropriate for meeting a legitimate business need.</li>
</ul>
<h3>Data Utility</h3>
Data will be managed to provide maximum utility to the business.  Data will be stored and presented in a manner that is useful for the business.
<ul>
	<li>Rationale – It cannot be a huge hassle for the business to access its own data.  In order to be useful to the business, data must be stored using appropriate technologies and data structures so that it can be easily used by the business and understandably presented to users.</li>
</ul>

<h3>Data Timeliness</h3>

The timeliness (also currency or latency) of data must be explicitly documented in data design documents and be acceptable to the business.  Data timeliness measures the expected frequency rate at which data elements within a database will be refreshed.  Data timeliness defines the “lifetime” of a data value before it expires or needs to be updated.

<ul>
	<li>Rationale – To have business value, data must be accurate for the timeframe reflected by a database record.  If the enterprise has a long term interest in maintaining information about something, database records about it should be periodically validated and refreshed to ensure that the data is still accurate.</li>
</ul>

<h3>Data Sharing</h3>

Data is shared across the enterprise and is made available to all projects and personnel that need it for a legitimate business purpose.  Data owners, data stewards, and data architects will work to incorporate the needs to all business stakeholders when designing databases.

<ul>
	<li>Rationale – When data is maintained within organizational or applications silos, these silos tend to independently develop multiple sources of the same or similar data which often does not agree.  By sharing data, the cost and effort of developing maintaining redundant data sources is eliminated.  In addition, users will have consistent data across the enterprise to enable business functions and for making decisions.  By incorporating the needs of many stakeholders into the design of a database, the business will reduce the desire to develop redundant sources of data.</li>
</ul>

<h3>Semantic Consistency</h3>

Each data element should have a consistent meaning across the enterprise.  A consistent vocabulary should be used across the company and should be reflected in an enterprise data dictionary.   All data elements should have standard names and meaningful business definitions.  All data elements should follow consistent and meaningful naming conventions.  Data elements should have consistent metadata across the enterprise which should include datatypes, lengths, and allowable values or permissible ranges.  Every data element should have a definition that is published and available to users, developers, and management.

<ul>
	<li>Rationale – In order to share data and communicate effectively about data, data elements with the same name should mean the same thing.</li>
</ul>

<h3>Data Authenticity</h3>

Each data element must be used in a manner that is consistent with its labeling.

<ul>
	<li>Rationale – In order to have authenticity, data must be used in a manner consistent with its labeling.  For example, when someone stores personal notes in a policyholder address field, the “policyholder address” field becomes less trustworthy.  Users won’t be able to trust that they will always find appropriate data in each field.</li>
</ul>

<h3>Authoritative Data Sources</h3>

There is an authoritative source for every critical data element.  An official data source should be declared and used for important data elements.  Data should be created, updated, and deleted in the authoritative data source.   Data should be mapped from authoritative data sources to other systems.

<ul>
	<li>Rationale – In order to trust data, data should come from a trusted, authoritative, source.  In order to avoid conflicts between multiple data sources and in order to avoid the cost and time associated with maintaining multiple sources of the same data, there should be a single authoritative source of the truth.  If data is changed in a data store other than the authoritative data source, silos of disparate data will evolve.</li>
</ul>

<h3>Data Replication</h3>

Data replication is minimized and controlled.  When data is duplicated, there should be a valid business or technical reason and the methods of synchronizing the data with the authoritative source should be explicitly defined.

<ul>
	<li>Rationale – When data is replicated in an uncontrolled fashion, it can become out of synch with the authoritative data source and cause questions about its veracity.  Often data does not need to be stored redundantly and can be fetched as needed from an authoritative source via a service or query.</li>
</ul>

<h3>Data Standardization</h3>

Data standards will be created for enterprise data elements:  the most important, commonly shared, and commonly used data.  Each data standard will identify a common definition, standard metadata, an authoritative data source, data governance information, and provide a guide for proper use for an enterprise data element.

<ul>
	<li>Rationale – Data standards are a logical consequence of these data principles.  They are established to communicate how an important data element will be handled throughout the enterprise.  Data standards speed development efforts by eliminating the need for projects to “reinvent the wheel” and reduce costs by eliminating redundant data efforts.  Data Standards let project teams know where they can find important data elements, what the definition is for these data elements, how they can use these data elements effectively, and who they need to communicate when using the data elements or proposing changes to the database designs of these elements.  Data standards reduce the chances for misuse or misinterpretation of data in different parts of the enterprise.</li>
</ul>

<h3>Data Integrity</h3>

Databases should be designed and managed to ensure that any data entered is accurate, valid, and consistent.  Data architecture rules should be established to ensure entity integrity, referential integrity, and domain integrity.

<ul>
	<li>Rationale – There are generally accepted design and database management practices that help ensure records are unique in a database, that the database enforces business rules, that a deletion in one table doesn’t leave orphaned records in another table, and that entered values are from a domain of allowable values.  When these practices are not followed, databases can easily become corrupted and untrustworthy.</li>
</ul>

<h3>Data Quality</h3>

Data should have known quality rules.  The business should set expectations for the quality of data in a system so that business requirements can be met.

<ul>
	<li>Rationale – When expectations are set for data quality, mechanisms can be put in place to ensure that the expectations are met.  Data can become old and out-dated with the passage of time.  Data can also be inconsistent as different people enter and manipulate it.  However, when data quality expectations are set, appropriate resources can be dedicated to the prevention, identification, and fixing of data quality problems.</li>
</ul>

<h3>Standards, Regulations, and Laws</h3>

Projects using or creating data must comply with enterprise data standards and all applicable security, information protection, data retention, and legal requirements.

<ul>
	<li>Rationale – In order to manage data consistently throughout the enterprise, all projects must comply with data standards.  In addition, project teams have a legal and moral obligation to obey all laws governing and safeguarding data.</li>
</ul>

<h3>Data Security</h3>

Enterprise data will have integrity, will be trustworthy, and will be safeguarded from unauthorized access, whether malicious, fraudulent, or erroneous.  Data cannot be modified without authorization.

<ul>
	<li>Rationale – The organization values of public service, integrity, and respect.  It is fundamentally important that the personal data of customers be protected from tampering, unauthorized access, and theft.  In addition, partners and other decision makers must be able to trust the veracity of data in our care and know that it has not been compromised, lost, tampered with, or corrupted.</li>
</ul>