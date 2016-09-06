---
layout:         page
title:          "Search"
published:      true
permalink:      /search/
search_omit:    true
---

<div id="search-container">
<form method="get" action="/search" data-search-form>
  <input type="search" name="q" id="q" placeholder="From the Archives." data-search-input />
</form>
</div>

  <!-- Search results placeholder -->
  <data-search-found>
    <data-search-found-count></span> result(s) found for &ldquo;<span data-search-found-term>&rdquo;.

  <!-- Search result template -->
  <div data-search-results>
  <script type="text/x-template" id="search-result">
    <a href="##Url##">##Title##</a> Posted on ##Date##
    ##Excerpt##
  </script>
  </div>

  <!-- jQuery - required but can be moved to the <head> -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

  <!-- Search script - Must appear after template -->
  <script src="/assets/js/search.js"></script>
