---
layout: home
---
    {% for post in paginator.posts%}
        <div class="post-list__meta"><time datetime="{{ post.date | date: "%-d %b %Y" }}" class="post-list__meta--date date">{{ post.date | date: "%-d %b %Y" }}</time></div>

        <h1 class="post-list__post-title post-title"><a href="{{ site.baseurl }}{{ post.url | remove_first: '/' }}" title="{{ post.title }}">{{ post.title }}</a></h1>
        <!-- <p class="excerpt">{{ post.excerpt | remove: '<p>' | remove: '</p>' }}&hellip;</p> -->

        {{ post.content | split:'<!--break-->' | first }}
    		{% if post.content contains '<!--break-->' %}
    			<a href="{{ post.url }}">read more</a>
    		{% endif %}

        <div class="post-list__meta"><time datetime="{{ post.date | date: "%-d %b %Y" }}" class="post-list__meta--date date">{{ post.date | date: "%-d %b %Y" }}</time> &#8226; <span class="post-meta__tags">on {% for tag in post.tags %}<a href="{{ site.baseurl }}tags/#{{ tag }}">{{ tag }}</a> {% endfor %}</span></div>

    {% endfor %}

  {% if paginator.previous_page or paginator.next_page %}
      {% include pagination.html %}
  {% endif %}

Any views or opinions expressed herein are strictly those of the author. Content does not necessarily represent or reflect the views or opinions of VMware or the author’s mother.
{: .notice_info}
