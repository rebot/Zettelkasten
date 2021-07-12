---
title: Vandaag <% tp.date.now("YYYY-MM-DD") %>
slug: <% tp.date.now("YYYY-MM-DD") %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags: <% tp.file.cursor(1) %>
public: true
---

# Vandaag <% tp.date.now("YYYY-MM-DD") %>
#note/daily #mood/<% tp.system.suggester(["Happy", "Sad", "Confused", "Boring", "Indifferent", "Eager"], ["happy", "sad", "confused", "boring", "indifferent", "eager"], placeholder="indifferent") %>
<< [[<% tp.date.now("YYYYMMDD", -1) %>]] | [[<% tp.date.now("YYYYMMDD", 1) %>]] >>
## <% tp.file.cursor(2) %>

## What's going on?
The following list contains an overview of all **zettels** that have been created within a timespan of  **3 days before and after** the creation of this **daily note**. 

```dataview
list
from "Zettle"
where file.ctime >= date(<% tp.date.now("YYYY-MM-DD", -3) %>) and file.ctime <= date(<% tp.date.now("YYYY-MM-DD", 3) %>) 
```