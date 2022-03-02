---
title: 202203011555 Obsidian setup 
slug: 2022-03-01
date: 2022-03-01
tags: blog, guide, obsidian
public: true
---

#  202203011555 Obsidian setup
#blog #guide #obsidian 
##  General idea
This *Obsidian.md* note collection is meant to be published online. It's being published to [gilles.is](https://gilles.is). The note collection is shared between my devices using a [*Github* repository](https://github.com/rebot/Zettelkasten) which is configured through *Netlify*, so whenever the repository updates, a new version of the website is build. 

### Blog @ [gilles.is](https://gilles.is/)
#netlify #gatsby
The blog is published using *Netlify*, completely free of charge. 

#### Image uploads
#cloudinary
A **CDN** or *Content Delivery Network* is used to store and optimize the images used in the notes. *Github* is not meant to store images at a large scale. Also, the storage capacity of *Github* is limited, therefor, we'll rely on the free tier of *Cloudinary* which allows us to store 25 GB of images at no charge.

To upload an image, the following command can be used. 
```bash
curl -X "POST" "https://api.cloudinary.com/v1_1/gilles-is/image/upload" \
     -H 'Content-Type: multipart/form-data; charset=utf-8; boundary=<MULTIPART-BOUNDARY>' \
     -F "file=<IMAGE-CONTENT>" \
     -F "upload_preset=obsidian"
```

The *Obsidian.md* plugin [obsidian-image-uploader](https://github.com/Creling/obsidian-image-uploader) is used and configured to use *Cloudinary* to upload images and replace the local reference with the `uri` of the uploaded file. In the *Managment Console* of *Cloudinary* a "Upload preset" is configured using the name **obsidian** and mode **Unsigned**, which means no authorization is required to upload images to *Cloudinary*. 

![[Pasted image 20220302154600.png]]

The following settings are applied in *Obsidian.md*

![[Pasted image 20220302155346.png]]  

## Similar story?
The following list contains an overview of all **zettels** that have been created with the **same tags** assigned.
```dataview
list
from #zettel
```