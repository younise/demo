---
layout:         page
title:          "Search"
published:      true
permalink:      /search/
search_omit:    true
---

<div id="search-container">

</div>

  <!-- Search results placeholder -->
  <p data-search-found>
    <span data-search-found-count></span> result(s) found for &ldquo;<span data-search-found-term></span>&rdquo;.
  </p>
  <div data-search-results></div>

  <!-- Search result template -->
  <script type="text/x-template" id="search-result">
    <p><a href="##Url##">##Title##</a></br>Posted on ##Date##</p>
    <p>##Excerpt##</p>
  </script>

  <!-- jQuery - required but can be moved to the <head> -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

  <!-- Search script - Must appear after template -->
  <script src="/assets/js/search.js"></script>
