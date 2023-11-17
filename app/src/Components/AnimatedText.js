import React from 'react'
import { motion } from 'framer-motion'

// Word wrapper
const Wrapper = ({ children }) => {
	// Prevent word wrapping using CSS
	return (
		<div className='word-wrapper' style={{ display: 'inline-block' }}>
			{children}
		</div>
	)
}

// Map API "type" values to JSX tag names
const tagMap = {
	paragraph: 'p',
	heading1: 'h1',
	heading2: 'h2',
}

// AnimatedCharacters
const AnimatedCharacters = ({ type, text }) => {
	// Framer Motion variant object for controlling animation
	const item = {
		hidden: {
			y: '200%',
			color: 'rgba(255, 186, 73, 0.6)',
			transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
		},
		visible: {
			y: 0,
			color: '#7e0c0c',
			transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.95 },
		},
	}

	// Split each word of text into an array
	const splitWords = text.split(' ')

	// Create an array to store words
	const words = splitWords.map((word) => [...word, '\u00A0'])

	// Get the tag name from tagMap
	const Tag = tagMap[type]

	return (
		<Tag>
			{words.map((word, wordIndex) => (
				<Wrapper key={wordIndex}>
					{word.map((element, elementIndex) => (
						<motion.span
							style={{
								overflow: 'hidden',
								display: 'inline-block',
							}}
							key={elementIndex}
							variants={item}
						>
							<>{element}</>
						</motion.span>
					))}
				</Wrapper>
			))}
		</Tag>
	)
}

export default AnimatedCharacters
