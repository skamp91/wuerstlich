import sgMail from '@sendgrid/mail'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const { to, subject, html } = req.body

			sgMail.setApiKey(process.env.SENDGRID_API_KEY)
			const msg = {
				to,
				from: 'skampilein@gmail.com',
				subject,
				html,
			}

			await sgMail.send(msg)

			res.status(200).json({
				success: true,
				message: 'Email sent successfully',
			})
		} catch (error) {
			console.error('Error sending email:', error)
			res.status(500).json({
				error: 'An error occurred while sending the email',
			})
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' })
	}
}
