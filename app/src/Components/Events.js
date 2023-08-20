import React, { useState, useEffect } from 'react'
import useContentful from '../utils/useContentful'

export default function Events() {
	const { getEvents } = useContentful()

	const [events, setEvents] = useState([])

	useEffect(() => {
		getEvents().then((res) => setEvents(res.items))
	}, [])

	return (
		<div className='events'>
			{events.map((event, index) => {
				const {
					fields: { headline = '', description = '', date },
				} = event
				return (
					<div className='event' key={index}>
						<div className='date'>{date}</div>
						<div className='event-text'>
							<h3>{headline}</h3>
							<div
								dangerouslySetInnerHTML={{
									__html: description,
								}}
							/>
						</div>
					</div>
				)
			})}
		</div>
	)
}
