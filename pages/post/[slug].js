import Head from 'next/head'
import Image from "next/image"

import Navbar from "../../components/Navbar"

import { getPostDetails, getPosts } from "../../services"

export default function PostDetailPage({ post }) {
    return (<>
        <Head>
            <title>{`KaLok's Blog | ${post.title}`}</title>
            <meta name="description" content="Personal Blog Page by KaLok" />
            <meta name="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=no" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <div className='pt-navbar pb-navbar max-w-container mx-auto'>
            <div className="relative">
                <Image priority src={post.bannerImage.url} alt={post.slug} width={500} height={400}
                className="w-full h-1/5 bg-slate-100 max-h-[500px] object-cover"/>
                <a className='absolute text-xs font-bold text-white opacity-60 bottom-2 right-0 pr-wrapper underline decoration-2' href="http://www.freepik.com">Designed by Freepik</a>
            </div>
            <div className="px-wrapper xl:px-0 pt-4">
                <p className="text-cardDate">{post.date}</p>
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <div className="pt-4 prose md:prose-xl markdown" dangerouslySetInnerHTML={{__html: post.content.html}}></div>
            </div>
        </div>
    </>)
}

export async function getStaticProps({ params }) {
    const post = await getPostDetails(params.slug)
    const date =  new Intl.DateTimeFormat('zh-MO', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Macau' }).format(new Date(post.createdAt))

    return {
        props: {
            post: {
                ...post,
                date: date
            }
        },
        revalidate: 60
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