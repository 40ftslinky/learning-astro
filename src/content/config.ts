// 1. Import the z utility from `astro:content`
//    With Zod, Astro is able to validate every file’s frontmatter within a collection 
//    and provide automatic TypeScript types when you go to query content
import { z, defineCollection } from "astro:content";


// 2. Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      uniqueID: z.string(),
      title: z.string(),
      pubDate: z.date(),
      head: z.string(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
        width: z.string(),
        height: z.string(),
      }),
      tags: z.array(z.string()),
      // contentImgs: z.array(z.object({        
      //   src: z.string(),
      //   width: z.string(),
      //   height: z.string(),
      //   alt: z.string(),
      // })).optional(),
    })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    projects: projectsCollection,
};

const projectImages = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    cover: image(),
  }),
  // z.object({
    title: z.string(),
    // folder: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
      width: z.string(),
      height: z.string(),
    }),
    
  // })
});
// Export a single `collections` object to register your collection(s)
export const imageCollections = {
  projects: projectImages,
};