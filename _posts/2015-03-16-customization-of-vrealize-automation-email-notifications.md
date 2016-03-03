---
layout:         post
title:          "Enhancing User Experience: Customization of vRealize Automation 6.2.x Email Notifications"
subtitle:       ""
date:           2015-03-16 10:30:00
author:         "Ryan Johnson"
published:      true
categories:     [vRealize Automation]
tags:           [vRealize Automation]
---

User Experience ("UX") focuses on the intimate understanding of your users. What is it that they need or desire, what do they value, what are their abilities, as well as their limitations?

As you embark upon the journey to the software-defined data center (SDDC), think and architect in terms of the user experience in addition to "boxes and arrows."
<ul>
	<li>What are the desired UX outcomes for those consuming the service(s)?</li>
	<li>Have you considered the UX in terms of its usefulness, usability, desirability, accessibility, credibility, and its value?</li>
</ul>
In addition to fundamental tenant and business group designs, entitlements and service catalogue designs, one such area for UX consideration is the messages provided to those consuming services of the software-defined data center.

For a moment, imagine you are providing automated infrastructure delivery to multiple business segments of a large media and entertainment organization, each with their own distinct brand. The segments are <i>built upon their individual brand and identity</i>.
<ul>
	<li>Do you centrally brand the service that you offer or do you tailor the service to each tenant business segment?</li>
	<li>How would this change if instead the services were used to provide automated infrastructure delivery only to your IT Operations team and not direct end users?</li>
</ul>
The messages that appear in the inbox of the user are part of the experience. VMware vRealize Automation can send automatic notifications for several types of events, such as, the successful completion of a catalogue request or a required approval workflow.  System Administrators can configure global email servers, senders and recipients that process email notifications.

Tenant Administrators can override those defaults, or add their own servers, senders and recipients if no global attributes are specified. They may even select which events will cause notifications to be sent to their users. Each component, such as the service catalog or infrastructure-as-a-service, can define events that can trigger notifications.

<img class="alignnone size-large wp-image-16717" alt="scenarios" src="http://blogs.vmware.com/vsphere/files/2015/03/scenarios1-1024x300.png" width="625" height="183" />

Additionally, each user can choose if they wish to receive notifications. Users either receive all notifications configured by the Tenant Administrator or no notifications.

Notification may also have links that allow the user to perform interactively. For example, a notification about a request that requires approval can have one link for approving the request and one for rejecting it. When a user clicks one of the links, a new email opens with content that is automatically generated. The user can send the email to complete the approval.

Messages can be easily and beautifully customized using a simple, powerful template engine. These may be customized per-locale, per-tenant, and per-notification scenario. You have the ability to define and craft the desired user experience for any notification.

<!--more-->
<h2><b>Getting Started with Message Templates</b></h2>
vRealize Automation uses a folder structure to determine the appropriate template to user based on the context of the tenant. Templates files are written in Apache Velocity, an easy to use Java-based template engine. Learn more about the simple directives used in the .vm template files in the <a href="http://velocity.apache.org/engine/devel/user-guide.html#Directives" >Apache Velocity User Guide</a>.
<h3><b>Deploy the Sample Templates</b></h3>
To use message templates in vRealize Automation, you must first obtain the sample templates, customize those templates that you need, and save the templates in the file system of your vRealize Automation appliance(s).

These templates are provided in VMware <a href="http://kb.vmware.com/kb/2088805" >KB 2088805</a>. Download and copy the vrealize_automation.tar.gz to root "/" the vRealize Automation appliance file system.
<ul>
	<li>From Windows, SCP the file to the vRealize Automation appliance with a utility like WinSCP.</li>
</ul>
<ul>
	<li>From Mac or Linux, open and terminal and run the following commands.
<pre>scp vcac.tar.gz root@&lt;vRA-VA-FQDN&gt;:/</pre>
</li>
</ul>
​From either Windows, Mac or Linux, SSH to the vRealize Automation appliance(s) and run the following commands to extract the contents to the root of the file system and set the appropriate permissions on the templates.
<pre>ssh root@&lt;vRA-VA-FQDN&gt;
cd /
tar -xvzf vcac.tar.gz
find /vcac -type d -exec chmod o+rx {} \;
find /vcac -type f -exec chmod o+r {} \;</pre>
Restart the VMware vRealize Automation appliance services by running this command:
<pre> service vcac-server restart</pre>
Before we start crafting the custom messages that for the user experience, let's examine the structure and contents of these loaded sample templates.

<span style="line-height: 1.714285714; font-size: 1rem;">There are three main folders in sample templates:</span>
<ul>
	<li>/vcac/templates/email/html/<b>core</b>/:
Contains core templates for messages.</li>
	<li>/vcac/templates/email/html/<b>forms</b>/​:
Contains templates for form layouts.</li>
	<li>/vcac/templates/email/html/<b>extensions</b>/​:
Contains templates, which are being used to display fields in IaaS forms.</li>
</ul>
Below is the file structure:
<pre> /vcac/
 /vcac//vcac/templates/
 /vcac/templates/email/
 /vcac/templates/email/html/<b>core</b>/
 /vcac/templates/email/html/core/defaults/
 /vcac/templates/email/html/core/tenants/
 /vcac/templates/email/html/<b>extensions</b>/
 /vcac/templates/email/html/extensions/defaults/
 /vcac/templates/email/html/extensions/tenants/
 /vcac/templates/email/html/<b>forms</b>/
 /vcac/templates/email/html/forms/defaults/
 /vcac/templates/email/html/forms/tenants/
 /vcac/templates/email/i18n.vm</pre>
In the core, extensions, and forms subfolders, there is a folder called defaults. The templates, represented as .vm files, in this folder are used by vRealize Automation when tenant specific templates are <b><i>not</i></b> specified.
<h3><b>Understanding Contents of /core/defaults/</b></h3>
Inside the /vcac/templates/email/html/core/defaults/ folder the there are five (5) template files that defined the default message structure.
<ul>
	<li>​main.vm: Required.
This is the main message and is defined by including / parsing additional template files.</li>
	<li>styles.vm: Optional.
Included in the samples to define the CSS &lt;/style&gt; element consumed by main.vm.</li>
	<li>header.vm: Optional.
Included in the samples to define the HTML &lt;/header&gt; element consumed by main.vm.</li>
	<li>links.vm: Optional.
Included in the samples to define a set of URLs presented in main.vm.</li>
	<li>footer.vm: Optional.
Included in the samples to define a footer message presented in main.vm.</li>
</ul>
As a reminder, these files are built using an Apache Velocity template engine. Learn about the directives used and available that may be used in the <a href="http://velocity.apache.org/engine/devel/user-guide.html#Directives">Apache Velocity User Guide</a>.

Let's take a look at the structure of the ​main.vm.

<span style="line-height: 1.714285714; font-size: 1rem;">In the main.vm you can see the basic standard building blocks of an HTML document similar to:</span>
<pre>&lt;html&gt;     
     &lt;header&gt;&lt;/header&gt;
     &lt;head&gt;
         &lt;title&gt;&lt;/title&gt;
         &lt;style&gt;&lt;/style&gt;
     &lt;/head&gt;
     &lt;body&gt;
     &lt;/body&gt;
&lt;/html&gt;</pre>
<span style="line-height: 1.714285714; font-size: 1rem;">Inside the code blocks, Apache Velocity #parse directives call additional.vm template files, for example:</span>
<pre>&lt;head&gt;
     #parse( 'core/styles.vm' )
&lt;/head&gt;</pre>
Pretty simple, right? Plus, there is tons of room to get creative, as you will see later in this post.

If you can follow standard HTML and basic Apache Velocity directives you are already well on your way. When you create your own .vm files and place them into the defaults folder remember to include the core/ before the template name in the #parse directive.

You will also notice there is a call within the &lt;/body&gt; element for $body. This directive is calling content for the message based on the notification scenario. Content layouts for the $body element is provided in the /vcac/templates/email/html/<b>forms</b>/​ directory contents.​

Now, let's move forward and explain how to provide per-tenant, per-locale and scenario based directory structures.
<h3><b>Customizing Per-tenant Templates</b></h3>
As mentioned prior, tenant specific templates can be loaded in the tenants/&lt;tenantName&gt; folder in parallel to the defaults folder.

For example, if your tenant was named "CloudOperations" you would add a /CloudOperations/ folder under the tenants folder.
<pre>/vcac/
/vcac/templates/
/vcac/templates/email/
/vcac/templates/email/html/<b>core</b>/
/vcac/templates/email/html/core/defaults/
/vcac/templates/email/html/core/tenants/
/vcac/templates/email/html/<b>core/tenants/CloudOperations/
</b>/vcac/templates/email/html/extensions/
/vcac/templates/email/html/extensions/defaults/
/vcac/templates/email/html/extensions/tenants/
/vcac/templates/email/html/<b>extensions/tenants/CloudOperations/
</b>/vcac/templates/email/html/forms/
/vcac/templates/email/html/forms/defaults/
/vcac/templates/email/html/forms/tenants/
/vcac/templates/email/html/<b>forms/tenants/</b><b>CloudOperations/
</b>/vcac/templates/email/i18n.vm</pre>
When a new folder/file is added for customization, you must ensure it has right permissions by executing commands on the vRealize Automation appliance(s).
<pre>find /vcac -type d -exec chmod o+rx {} \;

find /vcac -type f -exec chmod o+r {} \;</pre>
You need to wait for 120 seconds to see new customizations reloaded and reflected in messages.
<h3><b>Customizing Per-locale Templates</b></h3>
Locale specific templates can be specified in defaults or tenants/&lt;tenantName&gt; folders. These folders can contain further sub-folders for locale specific templates.

When searching for locale-specific template, vRealize Automation searches by country, then language, and on the defaults. ​For example:
<pre>1. /vcac/templates/email/html/core/defaults/fr/CA/&lt;template&gt;.vm
2. /vcac/templates/email/html/core/defaults/fr/&lt;template&gt;.vm
3. /vcac/templates/email/html/core/defaults/&lt;template&gt;.vm</pre>
When searching for a tenant-specific template, vRealize Automation searches through the tenants folders before searching the defaults folder. A search through these tenant-oriented folders simultaneously inspects for locale. When no tenant information is defined, search is confined to the defaults folder alone.

For example, when searching for a &lt;template.vm&gt; in the locale fr_CA (French Canada) under the CloudOperations tenant the following sequence of paths would be checked in this order:
<ol>
	<li>
<pre>1. /vcac/templates/email/html/core/tenants/CloudOperations/fr/CA/&lt;template&gt;.vm
2. /vcac/templates/email/html/core/tenants/CloudOperations/fr/&lt;template&gt;.vm
3. /vcac/templates/email/html/core/tenants/CloudOperations/&lt;template&gt;.vm
4. /vcac/templates/email/html/core/defaults/fr/CA/&lt;template&gt;.vm
5. /vcac/templates/email/html/core/defaults/fr/&lt;template&gt;.vm
6. /vcac/templates/email/html/core/defaults/&lt;template&gt;.vm</pre>
</li>
</ol>
<h3><b>Customizing Scenario Based Templates </b></h3>
vRealize Automation 6.1 allows a scenario ID to be used to customize template content.

For example, in a .vm template you could specify a scenario such as:
<pre>#if ($scenario == "csp.catalog.notifications.resource.activated")
     &lt;p&gt;Lorem ipsum dolor amet, consectetur adipiscing elit.&lt;/p&gt;
#end</pre>
In vRealize Automation 6.2 we introduced a new, scalable, and recommended approach to scenario based notifications.
<p style="padding-left: 30px;"><i>Note: 6.2 still supports the 6.1 customization method, but it is not recommended. ​</i></p>
To customize a template file for a specific scenario, create a file named in the following format:
<pre> &lt;template.vm&gt;-&lt;scenarioId&gt;</pre>
To create a separate main.vm for the above Resource Activated scenario, create a template file with this name:
<pre> main.vm-csp.catalog.notifications.resource.activated</pre>
A list of scenarios can be found in <a href="http://kb.vmware.com/kb/208805" >KB 2088805​ </a>or in <b>Administration</b> &gt; <b>Notifications</b> <b>&gt; Scenarios</b> when logged into vRealize Automation as a Tenant Administrator.
<h3><b>Add Custom Properties</b></h3>
Only available in vRealize Automation 6.2 and later, custom properties that are part of the request form can be added in the email template in this format:
<pre>$formData.get("provider-&lt;CustomPropertyName&gt;”)</pre>
<h3><b>Customizing Scenario Subjects</b></h3>
Only available in vRealize Automation 6.2 and later, the subject line can be customized per notification scenario by creating a template with this naming convention:
<pre> s​ubject.vm-&lt;scenarioId&gt;</pre>
<span style="line-height: 1.714285714; font-size: 1rem;">To define a subject line for the Resource Activation scenario, create a template as:</span>
<pre> subject.vm-csp.catalog.notifications.resource.activated</pre>
The content of this file must be only one line of text:
<pre>[One Cloud] Your Resource Has Been Activated</pre>
<h2><b>Putting It All Together</b></h2>
Now you know how to:
<ul>
	<li>Load and Set Default Templates</li>
	<li>Template Directory Structure and Content</li>
	<li>Default Template Structure and Directives</li>
	<li>Customizing Per-Tenant Directory Structures</li>
	<li>Customizing Per-Locale Directory Structures</li>
	<li>Customizing Scenario Based Templates</li>
	<li>Customizing Scenario Based Emails</li>
</ul>
Let's take this take this to the next level with an example, and create a custom template for a tenant based on what you now know.

<address style="padding-left: 30px;"> <em>Requirements:</em></address><address style="padding-left: 30px;">Tenant:                       CloudOperations
Scenario:                    Resource Activated
Locale:                        Default
Template:                   Custom Design
Subject:                      Custom Subject</address>
<h3> Let's get started....</h3>
<ol>
	<li>Obtain the sample templates from <a href="http://kb.vmware.com/kb/2088805" >KB 2088805</a> ​.</li>
	<li>Open a terminal and run the following commands.
<pre>scp vcac.tar.gz root@&lt;vRA-VA-FQDN&gt;:/</pre>
</li>
	<li>SSH to the vRealize Automation appliance and run the following commands to extract the contents to the root of the file system and set the appropriate permissions on the sample templates.
<pre>ssh root@&lt;vRA=VA-FQDN&gt;
cd /
tar -xvzf vcac.tar.gz
find /vcac -type d -exec chmod o+rx {} \;
find /vcac -type f -exec chmod o+r {} \;</pre>
</li>
	<li>Restart the VMware vRealize Automation appliance services by running this command:
<pre>service vcac-server restart</pre>
</li>
	<li>Create a custom folder for the CloudOperations tenant in the directory structure:/vcac/templates/
<pre>/vcac/templates/email/
/vcac/templates/email/html/<b>core</b>/
/vcac/templates/email/html/core/defaults/
/vcac/templates/email/html/core/tenants/
/vcac/templates/email/html/<b>core/tenants/CloudOperations/ </b>&lt;-- My Tenant!
/vcac/templates/email/html/extensions/
/vcac/templates/email/html/extensions/defaults/ &lt;-- Will Use defaults.
/vcac/templates/email/html/extensions/tenants/
/vcac/templates/email/html/forms/
/vcac/templates/email/html/forms/defaults/ &lt;-- Will Use defaults.
/vcac/templates/email/html/forms/tenants/
/vcac/templates/email/i18n.vm</pre>
</li>
	<li>Under /vcac/templates/email/html/<b>core/tenants/CloudOperations/</b> create message and subject templates for the scenario csp.catalog.notifications.resource.activated to be called called when a new requested resource is activated. First, c​reate the file ​subject.vm-csp.catalog.notifications.resource.activated. <span style="line-height: 1.714285714; font-size: 1rem;"><span style="line-height: 1.714285714; font-size: 1rem;"><span style="line-height: 1.714285714; font-size: 1rem;">The first line of the file is edited as seen below.</span></span></span><img class="alignnone size-large wp-image-16714" alt="subject.vm-csp.catalog.notifications.resource.activated" src="http://blogs.vmware.com/vsphere/files/2015/03/subject.vm-csp.catalog.notifications.resource.activated-1024x181.png" width="625" height="110" /></li>
	<li>Next, ​under /vcac/templates/email/html/<b>core/tenants/CloudOperations/ </b>create the file main.vm-csp.catalog.notifications.resource.activated. If you choose to use custom images, fonts, etc place those resources on an easily accessible web server that the users can access during the render.</li>
	<li>
<p style="display: inline !important;">In your template, you may want to set some variables to call within the template, such as:</p>
</li>
</ol>
<pre>##     --------------------------------
##      Set variables...
##     -------------------------------- 

#set( $orgName = "VMware, Inc." )
#set( $orgStaff = "Cloud Operations" )
#set( $orgDate = "2015" )
#set( $orgSignOff = "Party on,"      )
#set( $orgPoweredBy = "Powered by VMware vRealize Automation and energy drinks." )
#set( $orgURL = "http://demo.vmware.com/" )
#set( $orgImages = "{$orgURL}images/" )
#set( $orgFonts = "{$orgURL}fonts/" )
#set( $orgLogo = "{$orgURL}{$orgImages}logo.png" )</pre>
You can call these variables within your template at any time, like so:
<pre>##     --------------------------------
##      Start the content close...
##     --------------------------------

$orgPoweredBy&lt;/br&gt;&lt;/br&gt;
Copyright &amp;copy; $orgDate $orgName 

##     -------------------------------
##      End the content close...
##     --------------------------------</pre>
<i>Now, I know what you're thinking. Can I set these as global variables in simply parse that file and call the variable when I need it? Unfortunately, not at this time, but I'm looking into a solution.</i>

What you end up with looks similar to the following.

<img class="alignnone size-large wp-image-16739" alt="main.vm-csp.catalog.notifications.resource.activated" src="http://blogs.vmware.com/vsphere/files/2015/03/main.vm-csp.catalog.notifications.resource.activated1-1024x931.png" width="625" height="568" />

And..

<span style="line-height: 1.714285714; font-size: 1rem;"><img class="alignnone size-large wp-image-16715" alt="callvariables" src="http://blogs.vmware.com/vsphere/files/2015/03/callvariables-1024x371.png" width="625" height="226" /></span>

<span style="line-height: 1.714285714; font-size: 1rem;">Once again, remember that when a new folder/file is added for customization, you must ensure it has right permissions by executing commands on the vRealize Automation appliance(s).</span>
<pre>find /vcac -type d -exec chmod o+rx {} \;

find /vcac -type f -exec chmod o+r {} \;</pre>
<span style="line-height: 1.714285714; font-size: 1rem;">​You need to wait for 120 seconds to see new customizations reloaded and reflected in your messages.</span>

Now, let's put it to work and see what happens when a user requests a new resource from the CloudOperations tenant.

<img class="alignnone size-large wp-image-16712" alt="csp.catalog.notifications.resource.activated" src="http://blogs.vmware.com/vsphere/files/2015/03/email-csp.catalog.notifications.resource.activated-897x1024.png" width="625" height="713" />

Voila! Isn't that so much better?

Get creative! Define the user experience for messages from vRealize Automation in your software-defined data center and have fun while doing it.
