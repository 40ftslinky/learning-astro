---
uniqueID: 'post'
title: My Second Blog Post
author: Astro Learner
head: My Second Blog Post
description: "After learning some Astro, I couldn't stop!"
image:
    url: "https://docs.astro.build/assets/arc.webp"
    alt: "Thumbnail of Astro arcs."
    width: '100%'
    height: '100%'
pubDate: 2022-07-08
tags: ["astro", "blogging", "learning in public", "successes"]


---


After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!

<!-- A remote image -->

![A random remote image](https://picsum.photos/1024/768)

<!-- A local image relative to the markdown file -->

![A local image](/src/assets/project-2/landscape.jpg)

<!-- A local image relative to the project root -->

![Another local image](/src/assets/project-2/landscape-02.avif)

<!-- An example of using query params -->

![A remote image with query params](https://picsum.photos/1024/768?grayscale)

<!-- An example of the `<Image />` component inside MD pages -->

<Image
  src="/src/assets/project-1/Editorial-Mockup_00.jpg"
  alt={frontmatter.alt}
/>