import { useContext } from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { TranslationContext } from '../context/TranslationContext'

export default function Introduction() {
	const [text, count] = useTypewriter({
		words: [
			"<你好 />",
			"<Hello />",
			"<こんにちは />",
			"<안녕하세요 />",
			"<Bonjour />",
			"<Hej />",
			"<Ciao />",
			"<Olá />",
		],
		loop: true,
		delaySpeed: 1000
	})

	const value = useContext(TranslationContext)
	const { t } = value

	return (
		<section id="introduction" className="px-wrapper xl:px-0 overflow-x-hidden">
			<div className="pt-12 pb-16 lg:py-32 flex gap-8 justify-between md:justify-center">
				{/* Left Part */}
				<div className="space-y-4 md:text-center">
					<div className='text-4xl font-bold md:text-5xl'>
						<span className="font-thin md:font-bold">{text}</span>
						<Cursor cursorColor="#32A8EB"/>
					</div>
					<h1 className='w-2/3 md:w-full text-3xl font-bold font-mono'>
						I'm KaLok!
					</h1>
					<h2 className='w-2/3 md:w-full font-thin md:font-normal md:text-xl font-mono'>{t('description')}</h2>
				</div>

				{/* Right Part */}
				<div className="absolute right-4 md:hidden grow max-w-[300px] -z-10">
					<Image priority className='md:w-full' src={'/kalok-figure.png'} alt={"kalok's figure"} width={128} height={261}/>
				</div>
			</div>
		</section>
	)
}