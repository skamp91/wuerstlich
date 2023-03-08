// import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import useContentful from '../utils/useContentful.js';
import './header.css';

export default function Header() {
	const [headerUrl, setHeaderUrl] = useState({});
	const [headerSlogan, setHeaderSlogan] = useState('');

	const { getHeader } = useContentful();

	useEffect(() => {
		getHeader().then((res) => {
			setHeaderSlogan(res.slogan);
			setHeaderUrl(res.headerImage.fields.file.url);
		});
	}, []);

	function jumpToMenu() {
		const menu = document.getElementById('locations');
		menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	return (
		<header className='header'>
			<div className='header-overlay' />
			<picture className='header-picture'>
				<img
					loading='lazy'
					src={headerUrl ? headerUrl : ''}
					className='header-image'
					alt='logo'
				/>
			</picture>
			<div className='header-buttons'>
				<button onClick={jumpToMenu} className='header-button'>
					Zu den Stores
				</button>
				<button className='header-button'>News</button>
			</div>
			<img className='header-logo' alt='' src='/wuerstlich.png' />
			<p className='header-slogan'>{headerSlogan}</p>
		</header>
	);
}
