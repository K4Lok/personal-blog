import {useState, useEffec} from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import CategoryFilter from '../components/category/CategoryFilter'
import PostCards from '../components/post/PostCards'

import { getCategories, getPosts } from '../services'
import { getQuote, getQuoteImage } from '../services/quotes'

export default function Home({ categories, posts, imageUrl, quote }) {
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

      <main className='max-w-container mx-auto space-y-4 pt-navbar pb-navbar px-wrapper xl:px-0'>
        <Introduction />
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
          {/* Category Filter Bar and PostCards Section */}
          <div className="space-y-4 grow">
            <CategoryFilter categories={categories} isLatestOrder={isLatestOrder} categoryHandler={categoryHandler} orderHandler={orderHandler}/>
            <PostCards posts={filteredPosts}/>
          </div>
          {/* Side Panel */}
          <aside className='hidden lg:block basis-80'>
            <div className="w-full flex flex-col space-y-4">
              {/* Quote Card */}
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                {/* Styles: Top bar */}
                <div className="absolute top-0 z-10 h-8 w-full bg-blue-200/60 backdrop-blur-lg" />
                <Image className='bg-slate-200 brightness-[60%]' src={imageUrl} width={80 * 4} height={80 * 4}/>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <div className="w-2/3">
                    <h4 className='text-xl font-mono font-bold text-white tracking-widest'>{quote.content}</h4>
                    <p className='text-end text-xl font-mono font-bold text-white'>- {quote.author}</p>
                  </div>
                </div>
              </div>
              {/* <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <div className="absolute top-0 z-10 h-8 w-full bg-blue-200/60 backdrop-blur-lg" />
                <div className='bg-zinc-200 w-80 h-80' />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <div className="w-2/3">
                    <h4 className='text-xl font-mono font-bold text-white tracking-widest'>{quote.content}</h4>
                    <p className='text-end text-xl font-mono font-bold text-white'>- {quote.author}</p>
                  </div>
                </div>
              </div> */}
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const categories = (await getCategories()) || []
  const posts = (await getPosts()) || []
  const imageUrl = await getQuoteImage(600, 600, 'sky,fantastic, pure')
  const quote = await getQuote()

  return {
    props: {
      categories,
      posts,
      imageUrl,
      quote
    },
    revalidate: 60 * 60 * 24, // Revalidate once a day
  }
}