import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
	const [showNav, setShowNav] = useState(true);
	const navRef = useRef(null);

	let prevNavY = 0;

	const scrollHandler = () => {
		if (window.scrollY < navRef.current.clientHeight || window.scrollY < prevNavY) {
			prevNavY = window.scrollY;
			setShowNav(true);
			return;
		}

		prevNavY = window.scrollY;
		setShowNav(false);
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);

		return () => window.removeEventListener('scroll', scrollHandler);
	}, [])

	return (
        <header>
			<div ref={navRef} className={`fixed top-0 w-full py-wrapper bg-white/90 z-50 transition duration-500 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
				<div className="max-w-container mx-auto px-wrapper xl:px-0 flex justify-between items-baseline">
					<Link href={'/'}>
						<Image priority className='active:scale-[101%]' src={'/icon.svg'} alt={'icon'} width={200} height={50} />
						</Link>
					<Link href={'https://github.com/k4lok'} target={'_blank'}>
						<Image priority className='active:scale-[101%] hover:brightness-110' src={'/github.svg'} alt={'github icon'} width={40} height={40} />
					</Link>
				</div>
			</div>
		</header>
	)
}