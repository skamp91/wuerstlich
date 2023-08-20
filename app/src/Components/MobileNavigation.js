import Link from 'next/link'
import React from 'react'

export default function MobileNavigation() {
	const mainNavRef = React.useRef()
	const [isOpen, setIsOpen] = React.useState(false)
	const navLinks = ['stores', 'catering', 'events', 'news']

	function handleToggle() {
		setIsOpen(!isOpen)
	}

	return (
		<div className='main-nav-container'>
			<div className='main-nav-fixed'>
				<button
					onClick={handleToggle}
					className={`open-main-nav ${isOpen && 'is-open'}`}
				>
					<span className='burger'></span>
				</button>
				<Link href='/'>
					<img
						className='main-nav-logo'
						alt=''
						src='/wuerstlich.png'
					/>
				</Link>
			</div>
			<nav className={`main-nav ${isOpen && 'is-open'}`} ref={mainNavRef}>
				<ul>
					{navLinks.map((link) => {
						return (
							<li onClick={handleToggle}>
								<Link href={link}>{link.toUpperCase()}</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</div>
	)
}
