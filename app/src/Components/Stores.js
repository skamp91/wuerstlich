import { useState, useEffect, useRef } from 'react'
import useContentful from '../utils/useContentful'
import data from '../utils/data'
import { InView } from 'react-intersection-observer'
import useWindowSize from '../utils/useWindowSize'
import Link from 'next/link'

import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'

export default function Locations() {
	const [locations, setLocations] = useState({})
	const { getLocations } = useContentful()
	const [bgClass, setBgClass] = useState(false)
	const { width } = useWindowSize()

	const observerRef = useRef(null)
	const [isInView, setIsInView] = useState(false)

	useEffect(() => {
		const element = observerRef.current

		if (!element) return

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0]
				if (entry.isIntersecting) {
					setIsInView(true)
					observer.unobserve(element) // Stop observing once it's in view
				}
			},
			{
				threshold: 0.8, // Trigger when 100% of the element is visible
			}
		)

		observer.observe(element)

		return () => {
			observer.disconnect()
		}
	}, [observerRef.current])

	useEffect(() => {
		getLocations().then((res) => setLocations(res.items))
	}, [])

	const text = [
		{ type: 'heading1', text: '5 Standorte' },
		{
			type: 'heading2',
			text: 'Voller Genuss!',
		},
	]

	const container = {
		visible: {
			transition: {
				staggerChildren: 0.025,
			},
		},
	}

	useEffect(() => {
		console.log('Element is in view: ', isInView)
	}, [isInView])

	if (!locations[0]) return null

	return (
		<section>
			<motion.div
				className='intro-headline locations-headline'
				initial='hidden'
				variants={container}
				animate={isInView ? 'visible' : 'hidden'}
				ref={observerRef}
			>
				<div className='container'>
					{text.map((item, index) => {
						return <AnimatedText {...item} key={index} />
					})}
				</div>
			</motion.div>
			<div id='locations' className={`locations bg-color-${bgClass}`}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					width='100%'
					height='100'
					viewBox='0 0 100 102'
					preserveAspectRatio='none'
					fill='#ffba49'
				>
					<path d='M0 0 C 50 100 80 100 100 0 Z' />
				</svg>

				{locations.map((location, index) => {
					const flexClass = index % 2 === 0 ? 'start' : 'end'
					return (
						<InView
							threshold={width < 1024 ? 0.7 : 0.85}
							key={index}
						>
							{({ inView, ref, entry }) => {
								if (inView && flexClass === 'start') {
									setBgClass('red')
								} else if (inView) {
									setBgClass('orange')
								}

								return (
									<>
										<div ref={ref}>
											<div
												className={`location ${flexClass}`}
											>
												<picture className='location-image'>
													<img
														className='location-image__img'
														alt=''
														src={
															location.fields
																.image.fields
																.file.url
														}
													/>
												</picture>
												<div
													key={
														location.fields
															.headline + index
													}
													className='location-content'
												>
													<h2 className='location-headline'>
														{
															location.fields
																.headline
														}
													</h2>
													<div className='location-adress-wrapper'>
														<h3>
															Hier findet ihr uns:
														</h3>
														<div className='location-adress'>
															{location.fields.adress.map(
																(
																	field,
																	index
																) => {
																	if (
																		field
																			.trim()
																			.startsWith(
																				'01'
																			)
																	) {
																		return (
																			<Link
																				href={`tel:${field}`}
																			>
																				<p
																					key={
																						index
																					}
																				>
																					{
																						field
																					}
																				</p>
																			</Link>
																		)
																	} else {
																		return (
																			<p
																				key={
																					index
																				}
																			>
																				{
																					field
																				}
																			</p>
																		)
																	}
																}
															)}
														</div>
													</div>
													<div
														className={`location-cards ${flexClass}`}
													>
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='/speisekarte-2023.pdf'
														>
															<button className='location-cards-link'>
																Zur Speisekarte
															</button>
														</a>
													</div>
													<div className='openings'>
														<h3>Öffnungszeiten:</h3>
														<div className='openings-entry'>
															<h4>
																Montag - Freitag
															</h4>
															<p>
																{
																	data[index][
																		'mo-fr'
																	]
																}
															</p>
														</div>
														<div>
															<h4>Sonnabend</h4>
															<p>
																{
																	data[index][
																		'sa'
																	]
																}
															</p>
														</div>
														<div>
															<h4>Sonntag</h4>
															<p>
																{
																	data[index][
																		'so'
																	]
																}
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</>
								)
							}}

							{/* <div className='parallax'></div> */}
						</InView>
					)
				})}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					width='100%'
					height='100'
					viewBox='0 0 100 102'
					preserveAspectRatio='none'
					fill='#ffba49'
				>
					<path d='M0 0 C 50 100 80 100 100 0 Z' />
				</svg>
			</div>
		</section>
	)
}
