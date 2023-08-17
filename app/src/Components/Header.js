import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useContentful from '../utils/useContentful.js'
import Link from 'next/link'
import React from 'react'
import MobileNavigation from './MobileNavigation.js'

export default function Header({ isHomepage }) {
	const [headerUrl, setHeaderUrl] = useState('')
	const [headerSlogan, setHeaderSlogan] = useState('')
	const { pathname } = useRouter()

	const { getHeader } = useContentful()

	const pageSloganMapping = {
		'/': headerSlogan,
		'/stores': 'Unsere Stores',
		'/catering': 'Unser Catering',
	}

	const [sloganPart1, sloganPart2] = headerSlogan.split('#')

	useEffect(() => {
		getHeader().then((res) => {
			setHeaderSlogan(res.slogan)
			setHeaderUrl(res.headerImage.fields.file.url)
		})
	}, [])

	function jumpToMenu() {
		const content = document.getElementById('content')
		content?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<header className='header'>
			{headerUrl && (
				<picture
					style={{
						width: '100%',
						height: '100%',
					}}
					className='header-picture'
				>
					<a
						style={{ position: 'absolute' }}
						href='https://www.freepik.com/free-photo/flat-lay-burger-ingredients-wooden-table_5051915.htm#query=header%20background%20burger&position=46&from_view=search&track=ais'
					>
						Image by Freepik
					</a>
					<div className='parallax'></div>
				</picture>
			)}
			{isHomepage ? (
				<>
					<div className='header-buttons'>
						<Link href='/stores' scroll={false}>
							<button className='header-button'>
								Zu den Stores
							</button>
						</Link>
						<Link href='/catering' scroll={false}>
							<button className='header-button'>
								Zum Catering
							</button>
						</Link>
					</div>
					<h1 className='header-slogan header-slogan-homepage'>
						<>
							<p>{sloganPart1}</p>
							<p>{sloganPart2}</p>
						</>
					</h1>
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
							className='go-to-headline'
							fill='#ffba49'
							onClick={jumpToMenu}
						>
							<path d='M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z' />
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
							className='go-to-headline go-to-headline-upper'
							fill='#ffba49'
							onClick={jumpToMenu}
						>
							<path d='M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z' />
						</svg>
					</>
				</>
			) : (
				<>
					<h1 className='header-slogan'>
						{pageSloganMapping[pathname] || headerSlogan}
					</h1>
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
							className='go-to-headline'
							fill='#ffba49'
							onClick={jumpToMenu}
						>
							<path d='M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z' />
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
							className='go-to-headline go-to-headline-upper'
							fill='#ffba49'
							onClick={jumpToMenu}
						>
							<path d='M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z' />
						</svg>
					</>
				</>
			)}
			<MobileNavigation />
		</header>
	)
}
