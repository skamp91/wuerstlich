import Content from '../../src/Components/Content.js'
import BackToTopButton from '../../src/Components/BackToTopButton.js'
import { useState, useEffect, useRef, useCallback } from 'react'
import React from 'react'
import useWindowSize from '../../src/utils/useWindowSize.js'

const LocationsPage = () => {
	const [scrollPosition, setSrollPosition] = useState(() => 0)
	const [showGoTop, setShowGoTop] = useState('goTopHidden')

	const refScrollUp = useRef()

	const { height } = useWindowSize()

	const handleVisibleButton = useCallback(() => {
		const position = window.pageYOffset
		setSrollPosition(position)

		if (scrollPosition > height) {
			return setShowGoTop('goTop')
		} else if (scrollPosition < height) {
			return setShowGoTop('goTopHidden')
		}
	}, [height, scrollPosition])

	const handleScrollUp = () => {
		refScrollUp.current.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		window.addEventListener('scroll', handleVisibleButton)
	}, [handleVisibleButton])

	return (
		<>
			<div ref={refScrollUp}> </div>
			<Content />
			<BackToTopButton showGoTop={showGoTop} scrollUp={handleScrollUp} />
		</>
	)
}

// return (
//   <ul>
//     <li>
//       <Link href="/">Home</Link>
//     </li>
//     <li>
//       <Link href="/about">About Us</Link>
//     </li>
//     <li>
//       <Link href="/blog/hello-world">Blog Post</Link>
//     </li>
//   </ul>
// )

export default LocationsPage
