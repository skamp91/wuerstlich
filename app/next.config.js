const Dotenv = require('dotenv-webpack')
const path = require('path')

require('dotenv').config()

const withLess = require('next-with-less')

module.exports = withLess({
	lessLoaderOptions: {
		/* ... */
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
				port: '',
				pathname: '/ostox4u62dny/**',
			},
		],
	},
	webpack: (config) => {
		config.plugins = config.plugins || []

		config.plugins = [
			...config.plugins,

			// Read the .env file
			new Dotenv({
				path: path.join(__dirname, '.env'),
				systemvars: true,
			}),
		]

		return config
	},
})
