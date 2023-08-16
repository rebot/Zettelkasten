---
<%* tag = await tp.system.prompt("Most important tag", "") -%>
<%* name = tp.date.now("YYYY-MM-DD") + " Daily note" -%>
<% tp.file.rename(name) -%>
title: Today <% tp.date.now("YYYY-MM-DD") %>
slug: <% tp.date.now("YYYY-MM-DD") %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags: <% tag %><% tp.file.cursor(1) %>
template: <% tp.config.template_file.title %>
public: true
---
# <% tp.date.now("dddd MMMM Do, YYYY") %>
#note/daily #mood/<% tp.system.suggester(["Happy", "Sad", "Confused", "Boring", "Indifferent", "Eager"], ["happy", "sad", "confused", "boring", "indifferent", "eager"], placeholder="indifferent") %> #<% tag %>

## <% tp.file.cursor(2) %>

## What's going on?
The following list contains an overview of all **today** notes that have been created within a timespan of  **3 days before and after** the creation of this **daily note**. 

```dataview
list
from "Today"
where file.ctime >= date(<% tp.date.now("YYYY-MM-DD", -3) %>) and file.ctime <= date(<% tp.date.now("YYYY-MM-DD", 3) %>) 
```

## Similar story?
The following list contains an overview of all **journals** that have been created with the **same tags** assigned.
```dataview
list
from #<% tag %>
```