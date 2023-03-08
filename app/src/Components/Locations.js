import Menu from './Menu';
import { useState, useEffect } from 'react';
import useContentful from '../utils/useContentful';
import './location.css';

import data from '../utils/data';

export default function Locations() {
	const [locations, setLocations] = useState({});
	const { getLocations } = useContentful();

	useEffect(() => {
		getLocations().then((res) => setLocations(res.items));
	}, []);

	if (!locations[0]) return null;

	return (
		<>
			<div id='locations' className='locations'>
				{locations.map((location, index) => {
					const flexClass = index % 2 === 0 ? 'start' : 'end';
					return (
						<>
							<div className={`location ${flexClass}`}>
								<picture className='location-image'>
									<img
										alt=''
										src={
											location.fields.image.fields.file
												.url
										}
									/>
								</picture>
								<div
									key={location.fields.headline + index}
									className='location-content'
								>
									<h2 className='location-headline'>
										{location.fields.headline}
									</h2>
									<div className='location-adress-wrapper'>
										<h3>Hier findet ihr uns:</h3>
										<div className='location-adress'>
											{location.fields.adress.map(
												(field, index) => {
													return (
														<p key={index}>
															{field}
														</p>
													);
												}
											)}
										</div>
									</div>
									{/* <Menu location={location} /> */}
									<div className='location-cards'>
										<a href='/speisekarte-2023.pdf'>
											Speisekarte
										</a>
									</div>
								</div>
							</div>
							<div className='parallax'></div>
						</>
					);
				})}
			</div>
		</>
	);
}
