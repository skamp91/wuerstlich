import Head from 'next/head'
import Header from '../src/Components/Header'
import '../src/reset.less'
import '../src/Components/backToTopButton.less'
import '../src/Components/content.less'
import '../src/Components/header.less'
import '../src/Components/location.less'
import '../src/Components/menu.less'

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
			<Component {...pageProps} />;
		</>
	)
}
