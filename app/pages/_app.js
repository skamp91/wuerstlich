import Head from 'next/head'
import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'
import React from 'react'
import '../src/reset.less'
import '../src/Components/backToTopButton.less'
import '../src/Components/content.less'
import '../src/Components/header.less'
import '../src/Components/stores.less'
import '../src/Components/menu.less'
import '../src/Components/mobileNavigation.less'
import '../src/Components/intro.less'
import '../src/Components/footer.less'
import '../public/font/Montserrat/fonts/webfonts/Montserrat.css'
import '../src/Components/catering.less'

export default function MyApp({ Component, pageProps }) {
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
			<Header />
			<Component {...pageProps} />
			<div className='flame-overlay' />
			<Footer />
		</>
	)
}
