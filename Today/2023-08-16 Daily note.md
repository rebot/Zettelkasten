---
title: Today 2023-08-16
slug: 2023-08-16
date: 2023-08-16
tags: garden
template: undefined
public: true
---
# Wednesday August 16th, 2023
#note/daily #mood/happy #garden

## Exploring my *digital garden* 🌳

To my understanding, a [[2023-08-16 Digital Garden|Digital garden]] is simply a free mess of thoughts, **loosly coupled** with *tags*, *references* (a.k.a *hyperlinks*). As a note taking app, I fell in love with [Obsidian](https://obsidian.md/) 🧡. To get rolling, I used the following **plugins**. 

| Plugin          | Usage                                                                         | Reference                                                        |
| --------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Advanced Tables | A *no-brainer*, provides automatic **table formatting** and even formulas! 🪄 | [Github](https://github.com/tgrosinger/advanced-tables-obsidian) |
| Dataview        | **Query engine** for your Obsidian vault, like threating it as a *database*   | [Github](https://github.com/blacksmithgu/obsidian-dataview)      |
| Templater       | Define **note templates** to be used automatically used on *note creation* 📚                                                                              | [Github](https://github.com/SilentVoid13/Templater)                                                                 |

The **3 plugins** above for the **backbone** of my *note taking method*. However, other plugins are selected to further support my note taking expirience, e.i. [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin), [MAKE.md](https://www.make.md/) and [Style settings](https://github.com/mgmeyers/obsidian-style-settings).

### Launcher

I stick to [Alfred](https://www.alfredapp.com/) for almost a decade now. It's my go-to *Launcher* for *MacOS*. I'm still using it just because I'm used to it. Certainly **not** because of it's feature (which I'm not using at its full potential), and not of it's *UI*, considering it's recent rival, [Raycast](https://www.raycast.com/) which looks much nicer. **Both** have an [Obsidian](https://obsidian.md/) integration.   

### Daily notes

I read a [blogpost](https://quail.ink/goldengrape/p/write-diary-with-chatgpt-en) that shares some expierence on a clever *prompt engineering* techique to make a nice *essay* from a set of **unstructured small notes** you take during the using, by means of a [[2023-08-16 Large Language Model (LLM)|Large Language Model (LLM)]]. 

### Publishing

Their are plenty of tools to **publish** your *notes*. Some of them are:
- [Quail](https://docs.quail.ink/)
- [Obsidiosaurus](https://github.com/CIMSTA/obsidiosaurus) 🦖

## What's going on?
The following list contains an overview of all **today** notes that have been created within a timespan of  **3 days before and after** the creation of this **daily note**. 

```dataview
list
from "Today"
where file.ctime >= date(2023-08-13) and file.ctime <= date(2023-08-19) 
```

## Similar story?
The following list contains an overview of all **journals** that have been created with the **same tags** assigned.
```dataview
list
from #garden
```