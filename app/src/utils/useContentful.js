import { createClient } from 'contentful'

const useContentful = () => {
	const client = createClient({
		accessToken: process.env.ACCESS_TOKEN,
		space: process.env.SPACE_ID,
		host: 'cdn.contentful.com',
	})

	const getHeader = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'header',
				select: `fields`,
			})
			return entries.items[0]?.fields
		} catch (err) {
			console.log(err)
		}
	}
	const getLocations = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'location',
				select: `fields`,
			})
			return entries
		} catch (err) {
			console.log(err)
		}
	}
	return { getHeader, getLocations }
}

export default useContentful
