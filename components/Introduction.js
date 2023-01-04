import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

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

	return (
		<section id="introduction" className="px-wrapper xl:px-0 overflow-x-hidden">
			<div className="pt-12 pb-16 flex gap-8 justify-between md:justify-center">
				{/* Left Part */}
				<div className="space-y-4 md:text-center">
					<h2 className='text-4xl font-bold md:text-5xl'>
						{/* <span className="font-thin">{"<こんにちは />"}</span> */}
						<span className="font-thin md:font-bold">{text}</span>
						<Cursor cursorColor="#32A8EB"/>
					</h2>
					<h1 className='w-2/3 md:w-full text-3xl font-bold font-mono'>
						I'm KaLok!
					</h1>
					<p className='w-2/3 md:w-full font-thin md:font-normal md:text-xl'>有時學完新野或者睇完書，過一排就會發現啲記憶好模糊。所以就諗住寫下筆記放係呢到。</p>
				</div>

				{/* Right Part */}
				<div className="absolute right-4 md:hidden grow max-w-[300px] -z-10">
					<Image priority className='md:w-full' src={'/kalok-figure.png'} alt={'kalok figure'} width={120} height={400}/>
				</div>
			</div>
		</section>
	)
}