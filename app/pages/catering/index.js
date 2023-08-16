import BackToTopButton from '../../src/Components/BackToTopButton.js'
import Catering from '../../src/Components/Catering.js'

import { useState, useEffect, useRef, useCallback } from 'react'
import React from 'react'
import useWindowSize from '../../src/utils/useWindowSize.js'

const CateringPage = () => {
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
			<div ref={refScrollUp} />
			<section className='content'>
				<Catering />
			</section>
			<BackToTopButton showGoTop={showGoTop} scrollUp={handleScrollUp} />
		</>
	)
}

export default CateringPage
