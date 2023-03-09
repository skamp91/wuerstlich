import { useState, useEffect } from 'react'
import useContentful from '../utils/useContentful.js'
import Link from 'next/link'
import Image from 'next/image.js'
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
		<>
			<header className='header'>
				<div className='header-overlay' />

				{headerUrl && (
					<picture
						style={{
							width: '100%',
							height: '100%',
						}}
						className='header-picture'
					>
						<Image
							src='https://images.ctfassets.net/ostox4u62dny/6bxfqSgXnpHlAJpSUFU68K/51421473964f6d6f459abffcacae4cd6/danny-gallegos-onTGVHxgRJA-unsplash.jpg'
							className='header-image'
							alt='logo'
							fill={true}
							priority={true}
						/>
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
		</>
	)
}
