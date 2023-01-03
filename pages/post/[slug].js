import Image from "next/image"

import { getPostDetails, getPosts } from "../../services";

export default function PostDetailPage({ post }) {
    const date = new Intl.DateTimeFormat('zh-MO', { dateStyle: 'full', timeZone: 'Asia/Macau' }).format(new Date(post.createdAt))

    return (
        <div className='pt-navbar'>
            <Image src={post.bannerImage.url} alt={post.slug} width={500} height={400}
            className="w-full h-1/5"/>
            <div className="px-wrapper xl:px-0 pt-4">
                <p className="text-cardDate">{date}</p>
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <div className="pt-4" dangerouslySetInnerHTML={{__html: post.content.html}}></div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const post = await getPostDetails(params.slug)

    return {
        props: {
            post,
        }
    }
}

export async function getStaticPaths() {
    const posts = (await getPosts()) || []

    return {
        paths: posts.map(post => {
            const slug = post.slug
            return {
                params: {slug}
            }
        }),
        fallback: false,
    }
}