import { useState, useEffect } from 'react'
import useContentful from '../utils/useContentful.js'
import Link from 'next/link'

export default function Header() {
	const [headerUrl, setHeaderUrl] = useState('')
	const [headerSlogan, setHeaderSlogan] = useState('')

	const { getHeader } = useContentful()

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
				<Link href='/locations' scroll={false}>
					<button className='header-button' onClick={jumpToMenu}>
						Zu den Stores
					</button>
				</Link>
				<button className='header-button'>News</button>
			</div>
			<Link href='/'>
				<img className='header-logo' alt='' src='/wuerstlich.png' />
			</Link>
			<p className='header-slogan'>{headerSlogan}</p>
		</header>
	)
}
