---

uniqueID: 'post'
title: 'My First Blog Post'
pubDate: 2023-12-30
# publishDate: 2019-12-01 00:00:00
head: 'My First Blog Post'
description: 'This is the first post of my new Astro projects.'
author: 'Astro Learner'
image:
    # url: 'https://docs.astro.build/assets/full-logo-light.png'
    url: '/src/assets/color-green.jpg'
    alt: 'The full Astro logo.'
    width: '100%'
    height: '100%'

video: 
    url: '/video/studio-dumbar-demo-typography.mp4'
    width: '100%'
    height: '100%'
    

tags: ["astro", "blogging", "learning in public"]

contentImgs:
  - url: 'src/assets/project-1/Editorial-Mockup_00.jpg'
    alt: "Image description 1"
    width: 600
    height: 400
  - url: 'src/assets/project-1/Editorial-Mockup_01.jpg'
    alt: "Image description 2"
    width: 600
    height: 400

---

import { Image } from 'astro:assets';
import rocket from '../assets/rocket.png';

Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

## What I've accomplished

1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.

2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.

3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.