import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useContentful from '../utils/useContentful.js'
import Link from 'next/link'
import React from 'react'
import MobileNavigation from './MobileNavigation.js'

export default function Header() {
	const [headerUrl, setHeaderUrl] = useState('')
	const [headerSlogan, setHeaderSlogan] = useState('')
	const splittedHeaderSlogan = headerSlogan.split('# ')
	const router = useRouter()

	const { getHeader } = useContentful()

	const pageSloganMapping = {
		'/': headerSlogan,
		'/stores': 'Unsere Stores',
		'/catering': 'Unser Catering',
	}
	const currentPath = router.pathname

	const [sloganPart1, sloganPart2] = headerSlogan.split('#')

	useEffect(() => {
		getHeader().then((res) => {
			setHeaderSlogan(res.slogan)
			setHeaderUrl(res.headerImage.fields.file.url)
		})
	}, [])

	function jumpToMenu() {
		const menu = document.getElementById('locations')
		menu?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
			<div className='header-buttons'>
				<Link href='/stores' scroll={false}>
					<button className='header-button' onClick={jumpToMenu}>
						Zu den Stores
					</button>
				</Link>
				<Link href='/catering' scroll={false}>
					<button className='header-button'>Zum Catering</button>
				</Link>
			</div>
			<h1 className='header-slogan'>
				{currentPath === '/' ? (
					<>
						<p>{sloganPart1}</p>
						<p>{sloganPart2}</p>
					</>
				) : (
					pageSloganMapping[currentPath] || headerSlogan
				)}
			</h1>
			<MobileNavigation />
		</header>
	)
}
