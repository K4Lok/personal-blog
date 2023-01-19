import Link from "next/link"
import PostCard from "./PostCard"

export default function PostCards({ posts, locale }) {
  return (
    <section id="posts">
        <div className="w-full">
            <ul className="flex flex-col space-y-3">
                {posts.map((post) => { 
                    const date = new Intl.DateTimeFormat('zh-MO', { dateStyle: 'long', timeZone: 'Asia/Macau' }).format(new Date(post.createdAt))
                    return (
                        <PostCard key={post.slug} ard title={post.title} slug={post.slug} categories={post.categories} date={date}/>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}
