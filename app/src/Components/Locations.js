import { useState, useEffect } from 'react'
import useContentful from '../utils/useContentful'

import data from '../utils/data'

export default function Locations() {
	const [locations, setLocations] = useState({})
	const { getLocations } = useContentful()

	useEffect(() => {
		getLocations().then((res) => setLocations(res.items))
	}, [])

	if (!locations[0]) return null

	return (
		<>
			<div id='locations' className='locations'>
				{locations.map((location, index) => {
					console.log(data[index])
					const flexClass = index % 2 === 0 ? 'start' : 'end'
					return (
						<>
							<div className={`location ${flexClass}`}>
								<picture className='location-image'>
									<div className='location-image__polygon'>
										<img
											className='location-image__img'
											alt=''
											src={
												location.fields.image.fields
													.file.url
											}
										/>
									</div>
								</picture>
								<div
									key={location.fields.headline + index}
									className='location-content'
								>
									<h2 className='location-headline'>
										{location.fields.headline}
									</h2>
									<div className='location-adress-wrapper'>
										<h3>Hier findet ihr uns</h3>
										<div className='location-adress'>
											{location.fields.adress.map(
												(field, index) => {
													return (
														<p key={index}>
															{field}
														</p>
													)
												}
											)}
										</div>
									</div>
									{/* <Menu location={location} /> */}
									<div
										className={`location-cards ${flexClass}`}
									>
										<a
											className='location-cards-icon'
											href='https://freeicons.io/test/pdf-icon-2304'
										>
											<img alt='pdf' src='/pdf.svg' />
										</a>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='/speisekarte-2023.pdf'
										>
											<p className='location-cards-link'>
												Speisekarte
											</p>
										</a>
									</div>
									<div className='openings'>
										<h3>Öffnungszeiten</h3>
										<div>
											<h4>Montag - Freitag</h4>
											<p>{data[index]['mo-fr']}</p>
										</div>
										<div>
											<h4>Sonnabend</h4>
											<p>{data[index]['sa']}</p>
										</div>
										<div>
											<h4>Sonntag</h4>
											<p>{data[index]['so']}</p>
										</div>
									</div>
								</div>
							</div>
							<div className='parallax'></div>
						</>
					)
				})}
			</div>
		</>
	)
}
