import React from 'react'

export default function CategoryFilter({ categories, isLatestOrder, categoryHandler, orderHandler }) {
  return (
    <section id="category-filter">
        <div className="flex w-full justify-between items-center gap-6">
            <div className="flex space-x-3 overflow-y-hidden overflow-x-auto scrollbar-hide items-center">
                <button onClick={() => categoryHandler('全部')} key={'全部'} className="px-3 py-2 rounded-full cursor-pointer active:brightness-90" style={{backgroundColor: '#909090'}}>
                    <p className='text-white text-sm font-bold break-keep select-none'>全部</p>
                </button>
                {categories.map(category => (
                    <button onClick={() => categoryHandler(category.slug)} key={category.slug} className="px-3 py-2 rounded-full cursor-pointer active:brightness-90" style={{backgroundColor: category.color.hex}}>
                        <p className='text-white text-sm font-bold select-none'>{category.name}</p>
                    </button>
                ))}
            </div>
            <button onClick={orderHandler} className="shrink-0 text-sm font-bold active:scale-105 select-none">
                <span>排序: </span>
                <span>{isLatestOrder ? '最新' : '最舊'}</span>
            </button>
        </div>
    </section>
  )
}
