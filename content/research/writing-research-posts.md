---
title: Writing research posts
slug: writing-research-posts
date_published: 2021-11-03T02:33:04.000Z
date_updated: 2021-11-03T02:35:15.000Z
tags: How to, Tutorial
excerpt: This guide will go over all the details and steps required to post a research article.
cover: 'image.png'
author:
  name: Pips
  avatar: 'avatars/pips.jpg'
---

Lets talk about how to write a research post to appear on the research portal https://801labs.org/research-portal/1/

Previously, we used the platform Ghost to write and publish research articles, how tos, and anouncments. This time around in the new website, we have had the research blog function built directly in. 

All a user has to do to create an article
* go into Github
* navigate to the `/content/research` directory in the `main` branch.
* create a new file with a dash seperated name, such as `example-post.md`
* ![image](https://user-images.githubusercontent.com/5651603/140208036-1b923b0a-2791-4c1a-8928-9db18339d9c9.png)
* import the below code block into your new markdown file. This block of code instructs the website on how to display information about the post. This includes tags, a title, a cover image, an author, etc.


```
---
title: <A solid Title>
slug: a-good-slug
date_published: 2018-10-25T02:33:04.000Z
date_updated: 2018-10-25T02:35:15.000Z
tags: tag1, tag2
excerpt: A brief little discription of what your post is about.
cover: 'folder/for/image.jpg'
author:
  name: your name
  avatar: 'avatars/youravatar.jpeg'
---
```

In the markdown preview, it will look like the below.
![image](https://user-images.githubusercontent.com/5651603/140211959-819511c2-812f-4fa2-b59c-fe42f6a7ad69.png)

