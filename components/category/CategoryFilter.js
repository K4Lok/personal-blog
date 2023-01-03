import React from 'react'

export default function CategoryFilter({ categories }) {
  return (
    <section id="category-filter">
        <div className="flex w-full px-wrapper xl:px-0 space-x-3 overflow-x-auto">
            <div key={'全部'} className="px-3 py-2 rounded-full cursor-pointer" style={{backgroundColor: '#909090'}}>
                <p className='text-white text-sm font-bold'>全部</p>
            </div>
            {categories.map(category => (
                <div key={category.slug} className="px-3 py-2 rounded-full cursor-pointer" style={{backgroundColor: category.color.hex}}>
                    <p className='text-white text-sm font-bold'>{category.name}</p>
                </div>
            ))}
        </div>
    </section>
  )
}
