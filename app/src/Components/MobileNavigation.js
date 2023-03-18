import Link from 'next/link'
import React from 'react'

export default function MobileNavigation() {
	const mainNavRef = React.useRef()
	const [isOpen, setIsOpen] = React.useState(false)
	const navLinks = ['catering', 'events', 'stores', 'news']

	function handleToggle() {
		setIsOpen(!isOpen)
	}

	return (
		<div className='container'>
			<button
				onClick={handleToggle}
				className={`open-main-nav ${isOpen && 'is-open'}`}
			>
				<span className='burger'></span>
			</button>
			<nav className={`main-nav ${isOpen && 'is-open'}`} ref={mainNavRef}>
				<ul>
					{navLinks.map((link) => {
						return (
							<li onClick={handleToggle}>
								<Link
									href={`/${
										link === 'stores' ? 'locations' : link
									}`}
								>
									{link.toUpperCase()}
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</div>
	)
}
