import Head from 'next/head'

import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import CategoryFilter from '../components/category/CategoryFilter'
import PostCards from '../components/post/PostCards'

import { getCategories, getPosts } from '../services'

export default function Home({ categories, posts }) {
  return (
    <>
      <Head>
        <title>KaLok's Blog</title>
        <meta name="description" content="Personal Blog Page by KaLok" />
        <meta name="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className='max-w-container mx-auto space-y-4 pt-navbar pb-navbar'>
        <Introduction />
        <CategoryFilter categories={categories} />
        <PostCards posts={posts}/>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const categories = (await getCategories()) || [];
  const posts = (await getPosts()) || [];

  return {
    props: {
      categories,
      posts,
    },
    revalidate: 60 * 60 * 24, // Revalidate once a day
  }
}