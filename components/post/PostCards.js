import Link from "next/link"
import { useRouter } from "next/router"
import PostCard from "./PostCard"

export default function PostCards({ posts, locale }) {
	const router = useRouter()

	return (
		<section id="posts">
			<div className="w-full">
				<ul className="flex flex-col space-y-3">
					{posts.map((post) => {
						const { locale } = router
						const date = new Intl.DateTimeFormat(locale == 'zh' ? 'zh-MO' : locale, { dateStyle: 'long', timeZone: 'Asia/Macau' }).format(new Date(post.createdAt))
						return (
							<PostCard key={post.slug} ard title={post.title} slug={post.slug} categories={post.categories} date={date} />
						)
					})}
				</ul>
			</div>
		</section>
	)
}
