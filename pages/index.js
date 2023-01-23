import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import CategoryFilter from '../components/category/CategoryFilter'
import PostCards from '../components/post/PostCards'

import { getCategories, getPosts } from '../services'
import { getQuote, getQuoteImage } from '../services/quotes'
import { TranslationContext } from '../context/TranslationContext'

export default function Home({ categories, posts, imageUrl, quote, locale }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [isLatestOrder, setIsLatestOrder] = useState(true);
  
  const t = useTranslations('home')

  const categoryHandler = (selectedCategory) => {
    let newFilteredPosts = [...posts]

    if (selectedCategory === 'all') {
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

  return (
    <TranslationContext.Provider value={{t: t}}>
      <Head>
        <title>KaLok's Time Chamber - Personal Blog</title>
        <meta name="description" content="Welcome to the personal blog of Sam KaLok, a passionate web developer and tech enthusiast, from front-end to back-end development..." />
        <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className='max-w-container mx-auto space-y-4 pt-navbar pb-navbar px-wrapper xl:px-0'>
        <Introduction/>
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Category Filter Bar and PostCards Section */}
          <div className="space-y-4 min-w-0">
            <CategoryFilter categories={categories} isLatestOrder={isLatestOrder} categoryHandler={categoryHandler} orderHandler={orderHandler}/>
            <PostCards posts={filteredPosts} locale={locale}/>
          </div>
          {/* Side Panel */}
          <aside className='hidden lg:block basis-80 min-w-[20rem] shrink-0'>
            <div className="w-full flex flex-col space-y-4">
              {/* Quote Card */}
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                {/* Styles: Top bar */}
                <div className="absolute top-0 z-10 w-full bg-blue-200/60 backdrop-blur-lg flex">
                  <p className='px-4 py-2 text-lg font-bold text-white select-none'>{t('quote_title')}</p>
                </div>
                <Image className='bg-slate-200 brightness-[60%] object-cover h-full w-full' src={imageUrl} width={80 * 4} height={80 * 4}/>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <div className="w-4/5">
                    <h4 className='text-xl font-mono font-bold text-white tracking-widest'>{quote.content}</h4>
                    <p className='text-end font-mono font-bold text-white'>- {quote.author}</p>
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
    </TranslationContext.Provider>
  )
}

export async function getStaticProps({locale}) {
  const categories = (await getCategories()) || []
  const posts = (await getPosts(locale)) || []
  const imageUrl = await getQuoteImage(600, 600, 'sky,fantastic, pure')
  const quote = await getQuote()

  return {
    props: {
      categories,
      posts,
      imageUrl,
      quote,
      messages: (await import(`../lang/${locale}.json`)).default
    },
    revalidate: 60 * 60 * 24, // Revalidate once a day
  }
}