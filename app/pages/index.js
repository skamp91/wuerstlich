import BackToTopButton from '../src/Components/BackToTopButton.js'
import { useState, useEffect, useRef, useCallback } from 'react'
import useWindowSize from '../src/utils/useWindowSize.js'
import React from 'react'
import Intro from '../src/Components/Intro.js'

const App = () => {
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
			<Intro />
			<BackToTopButton showGoTop={showGoTop} scrollUp={handleScrollUp} />
		</>
	)
}

export default App
