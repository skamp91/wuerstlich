import React from 'react'

export default function MobileNavigation() {
	const mainNavRef = React.useRef()
	const [isOpen, setIsOpen] = React.useState(false)

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
					<li>
						<a href='#'>Catering</a>
					</li>
					<li>
						<a href='#'>Events</a>
					</li>
					<li>
						<a href='#'>Stores</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
