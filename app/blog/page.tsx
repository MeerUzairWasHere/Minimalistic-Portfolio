import Link from 'next/link'
import BlurFade from '../../components/ui/blur-fade'
import { getBlogPosts } from '../../data/blog'

export const metadata = {
   title: 'Blogs',
   description: 'My thoughts on software development, life, and more.',
}

const BLUR_FADE_DELAY = 0.04

export default async function BlogPage() {
   const posts = await getBlogPosts()

   return (
      <section>
         <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="mb-8 text-2xl font-medium tracking-tighter">Blogs</h1>
         </BlurFade>
         {posts
            .sort((a, b) => {
               if (
                  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
               ) {
                  return -1
               }
               return 1
            })
            .map((post, id) => (
               <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
                  <Link
                     className="mb-4 flex flex-col space-y-1"
                     href={`/blog/${post.slug}`}
                  >
                     <div className="flex w-full flex-col">
                        <p className="tracking-tight">{post.metadata.title}</p>
                        <p className="h-6 text-xs text-muted-foreground">
                           {post.metadata.publishedAt}
                        </p>
                     </div>
                  </Link>
               </BlurFade>
            ))}
      </section>
   )
}
