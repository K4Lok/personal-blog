import {useState, useEffec} from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import CategoryFilter from '../components/category/CategoryFilter'
import PostCards from '../components/post/PostCards'

import { getCategories, getPosts } from '../services'

export default function Home({ categories, posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [isLatestOrder, setIsLatestOrder] = useState(true);

  const categoryHandler = (selectedCategory) => {
    let newFilteredPosts = [...posts]

    if (selectedCategory === '全部') {
      if (!isLatestOrder) newFilteredPosts = newFilteredPosts.reverse()

      setFilteredPosts(newFilteredPosts)
      return
    }

    newFilteredPosts = posts.filter(post => post.categories.some(category => category.slug === selectedCategory))

    if (!isLatestOrder) newFilteredPosts = newFilteredPosts.reverse()

    setFilteredPosts(newFilteredPosts)
  }

  const orderHandler = () => {
    setIsLatestOrder(prev => !prev)
    setFilteredPosts(prev => [...prev].reverse())
  }

  // useEffec(() => {
    
  // }, []);

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
        <CategoryFilter categories={categories} isLatestOrder={isLatestOrder} categoryHandler={categoryHandler} orderHandler={orderHandler}/>
        <PostCards posts={filteredPosts}/>
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