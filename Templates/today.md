---
title: Vandaag <% tp.date.now("YYYY-MM-DD") %>
slug: <% tp.date.now("YYYY-MM-DD") %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags: 
public: true
---

# Vandaag <% tp.date.now("YYYY-MM-DD") %>
#note/daily
<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>
<% tp.web.daily_quote() %>