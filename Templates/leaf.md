---
<%* name = tp.date.now("YYYY-MM-DD") + " " + await tp.system.prompt("What the title of your Zettel ?", "") -%>
<% tp.file.rename(name) -%>
title: <% name %> 
slug: <% tp.date.now("YYYY-MM-DD") %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags: <% tp.file.cursor(1) %>
template: <% tp.config.template_file.title %>
public: true
---
# <% name %>
 
<% tp.file.cursor(2) %>

## Similar story?
The following list contains an overview of all **zettels** that have been created with the **same tags** assigned.
```dataview
list
from #leaf
```