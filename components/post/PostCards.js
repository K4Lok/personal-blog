import React from 'react'

export default function PostCards({ posts }) {
  return (
    <section id="posts">
        <div className="w-full px-wrapper xl:px-0 space-y-3">
            {posts.map((post, index) => { 
                const date = new Intl.DateTimeFormat('zh-MO', { dateStyle: 'long', timeZone: 'Asia/Macau' }).format(new Date(post.createdAt))
                return (
                <div key={index} className="flex flex-col p-3  bg-postCard rounded-lg shadow-md">
                    <p className='text-cardDate text-xs'>{date}</p>
                    <h3 className='pt-1 text-lg font-bold leading-6'>{post.title}</h3>
                    <div className="pt-2 flex space-x-2 items-center">
                        {post.categories.map(category => (
                            <div key={category.slug} className="p-[6px] rounded-md cursor-pointer" style={{backgroundColor: category.color.hex}}>
                                <p className='text-white text-xs font-bold'>{category.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )})}
        </div>
    </section>
  )
}
