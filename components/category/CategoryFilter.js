import React from 'react'

export default function CategoryFilter({ categories }) {
  return (
    <section id="category-filter">
        <div className="flex w-full px-wrapper xl:px-0 justify-between items-center gap-6">
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide items-center">
                <div key={'全部'} className="px-3 py-2 rounded-full cursor-pointer" style={{backgroundColor: '#909090'}}>
                    <p className='text-white text-sm font-bold break-keep'>全部</p>
                </div>
                {categories.map(category => (
                    <div key={category.slug} className="px-3 py-2 rounded-full cursor-pointer" style={{backgroundColor: category.color.hex}}>
                        <p className='text-white text-sm font-bold'>{category.name}</p>
                    </div>
                ))}
            </div>
            <div className="shrink-0 text-xs font-bold">
                <span>排序: </span>
                <span>最新</span>
            </div>
        </div>
    </section>
  )
}
