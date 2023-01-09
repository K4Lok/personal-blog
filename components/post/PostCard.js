import Link from "next/link"

export default function PostCard({ title, slug, categories, date}) {
    return (
        <li className="flex flex-col p-3 post-card">
            <Link href={`/post/${slug}`}>
                <p className='text-cardDate text-xs'>{date}</p>
                <h3 className='pt-1 text-lg font-bold leading-6 line-clamp-2'>{title}</h3>
                <div className="pt-2 flex space-x-2 items-center">
                    {categories.map(category => (
                        <div key={category.slug} className="p-[6px] rounded-md cursor-pointer" style={{ backgroundColor: category.color.hex }}>
                            <p className='text-white text-xs font-bold'>{category.name}</p>
                        </div>
                    ))}
                </div>
            </Link>
        </li>
    )
}
