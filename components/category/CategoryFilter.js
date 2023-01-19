import { useContext } from 'react'

import { TranslationContext } from '../../context/TranslationContext'

export default function CategoryFilter({ categories, isLatestOrder, categoryHandler, orderHandler }) {
	const value = useContext(TranslationContext)
	const { t } = value

	return (
		<section id="category-filter">
			<div className="flex w-full justify-between items-center gap-6">
				<div className="flex space-x-3 overflow-y-hidden overflow-x-auto scrollbar-hide items-center">
					<button onClick={() => categoryHandler('all')} key={'all'} className="px-3 py-2 rounded-full cursor-pointer active:brightness-90" style={{ backgroundColor: '#909090' }}>
						<p className='text-white text-sm font-bold break-keep select-none'>{t('tag_all')}</p>
					</button>
					{categories.map(category => (
						<button onClick={() => categoryHandler(category.slug)} key={category.slug} className="px-3 py-2 rounded-full cursor-pointer active:brightness-90" style={{ backgroundColor: category.color.hex }}>
							<p className='text-white text-sm font-bold select-none'>{category.name}</p>
						</button>
					))}
				</div>
				<button onClick={orderHandler} className="shrink-0 text-sm font-bold active:scale-105 select-none">
					<span>{`${t('sorting_title')}: `}</span>
					<span>{isLatestOrder ? t('order_new') : t('order_old')}</span>
				</button>
			</div>
		</section>
	)
}
