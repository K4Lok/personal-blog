import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
	const [showNav, setShowNav] = useState(true);
	const navRef = useRef(null);

	let prevNavY = 0;

	const scrollHandler = () => {		
		if (window.scrollY > prevNavY) {
			prevNavY = window.scrollY;
			setShowNav(false);
			return;
		}

		prevNavY = window.scrollY;
		setShowNav(true);
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);

		return () => window.removeEventListener('scroll', scrollHandler);
	}, [])

	return (
			<div ref={navRef} className={`fixed top-0 w-full p-wrapper backdrop-blur-sm z-50 transition duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
				<Link href={'/'}><Image className='active:scale-[101%]' src={'/icon.svg'} width={200} height={50} /></Link>
			</div>
	)
}