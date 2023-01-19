import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
	const [showNav, setShowNav] = useState(true)
	const navRef = useRef(null)

	const router = useRouter()

	let prevNavY = 0

	const scrollHandler = () => {
		if (window.scrollY < navRef.current.clientHeight || window.scrollY < prevNavY) {
			prevNavY = window.scrollY
			setShowNav(true)
			return
		}

		prevNavY = window.scrollY
		setShowNav(false)
	}

	const languageSwitchHandler = (locale) => {
		const { pathname, asPath, query } = router
		router.replace({ pathname, query }, asPath, { locale: locale, shallow: true })
      .then(() => router.reload())
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler)

		return () => window.removeEventListener('scroll', scrollHandler)
	}, [])

	return (
        <header>
			<div ref={navRef} className={`fixed top-0 w-full py-wrapper bg-white/90 z-50 transition duration-500 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
				<div className="max-w-container mx-auto px-wrapper xl:px-0 flex justify-between items-baseline">
					{/* Logo */}
					<Link href={'/'}>
						<Image priority className='active:scale-[101%]' src={'/icon.svg'} alt={'icon'} width={200} height={50} />
					</Link>
					{/* Right Menu */}
					<div className="flex justify-between space-x-4 lg:space-x-4 items-center">
							<Link className='hidden md:block' href={'https://github.com/k4lok'} target={'_blank'}>
								<Image priority className='active:scale-[101%] hover:brightness-110' src={'/github.svg'} alt={'switch language'} width={40} height={40} />
							</Link>
							{
								router.locale == 'zh'
								? (
									<a className='cursor-pointer active:scale-[101%] hover:brightness-110' onClick={() => languageSwitchHandler('en')}>
									<Image priority src={'/language.svg'} alt={'switch language'} width={40} height={40} />
								</a>
								)
								: (
									<a className='cursor-pointer active:scale-[101%] hover:brightness-110' onClick={() => languageSwitchHandler('zh')}>
									<Image priority src={'/language.svg'} alt={'switch language'} width={40} height={40} />
								</a>
								)
							}
					</div>
				</div>
			</div>
		</header>
	)
}