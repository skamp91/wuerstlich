import Head from 'next/head'
import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'
import React, { useState, useEffect } from 'react'
import '../src/reset.less'
import '../src/Components/backToTopButton.less'
import '../src/Components/content.less'
import '../src/Components/header.less'
import '../src/Components/stores.less'
import '../src/Components/menu.less'
import '../src/Components/mobileNavigation.less'
import '../src/Components/intro.less'
import '../src/Components/footer.less'
import '../src/Components/catering.less'
import '../public/font/Montserrat/Montserrat.css'
import { useRouter } from 'next/router'
import useContentful from '../src/utils/useContentful.js'

export default function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter()
	const isHomepage = pathname.split('/')[1] === ''
	const { getHeader } = useContentful()

	const [isSnowflakesEnabled, setIsSnowflakesEnabled] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(true)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		getHeader().then((res) => {
			setIsSnowflakesEnabled(res.snowflakesEnabled)
		})
	}, [])

	const handleLogin = () => {
		const validUsername = process.env.USERNAME
		const validPassword = process.env.PASSWORD

		if (username === validUsername && password === validPassword) {
			setIsLoggedIn(true)
		}
	}

	if (!isLoggedIn) {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<h2>Login</h2>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleLogin}>Login</button>
			</div>
		)
	}

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='favicon.ico' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta name='theme-color' content='#000000' />
				<meta
					name='description'
					content='Web site created using create-react-app'
				/>

				<link rel='manifest' href='/manifest.json' />
				<title>Würstlich</title>
			</Head>
			<Header isHomepage={isHomepage} />
			<Component {...pageProps} />
			<div className='flame-overlay' />
			{isSnowflakesEnabled && (
				<div className='snowfall'>
					<div className='left' />
					<div className='right' />
				</div>
			)}
			<Footer />
		</>
	)
}
