import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<Main>
					<noscript>
						You need to enable JavaScript to run this app.
					</noscript>
					<div id='root' />
				</Main>
				<NextScript />
			</body>
		</Html>
	)
}
