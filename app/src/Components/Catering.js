import Link from 'next/link'
import React, { useState } from 'react'

export default function Catering() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [request, setRequest] = useState('')
	const [consent, setConsent] = useState(false)

	const handleNameChange = (event) => {
		setName(event.target.value)
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}

	const handleRequestChange = (event) => {
		setRequest(event.target.value)
	}

	const handleConsentChange = () => {
		setConsent(!consent)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			if (!consent) {
				// Handle case where consent checkbox is not checked
				return
			}

			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					to: 'patrick.skamrahl@gmail.com',
					subject: 'Catering Anfrage',
					html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Anfrage Nachricht: ${request}</p>
          `,
				}),
			})

			const data = await response.json()
			console.log(data) // Log response data
			if (data.success) {
				// Email sent successfully, perform necessary actions
				// ...
			} else {
				// Handle error scenario
				// ...
			}
			// Clear form fields after successful submission
			setName('')
			setEmail('')
			setRequest('')
			setConsent(false)
		} catch (error) {
			console.error('Error sending email:', error)
			// Handle error scenario here, show error message to the user, etc.
		}
	}

	return (
		<div className='catering'>
			<h2 className='locations-headline intro-headline'>
				<span>Der mobile Gaumenschmaus für euer Event!</span>
			</h2>
			<svg
				className='locations'
				xmlns='http://www.w3.org/2000/svg'
				version='1.1'
				width='100%'
				height='100'
				viewBox='0 0 100 102'
				preserveAspectRatio='none'
				fill='#ffba49'
			>
				<path d='M0 0 C 50 100 80 100 100 0 Z' />
			</svg>
			<div className='catering-container'>
				<picture className='catering-image'>
					<img src='./foodtruck-image.png' alt='foodtruck-image' />
				</picture>
				<div className='catering-text-wrapper'>
					<h3>
						Ihr sucht für eure Party, egal ob Geburtstag,
						Firmenfeier, Abschlussparty oder Hochzeit, das passende
						Catering?
					</h3>
					<ul>
						<p>
							Lasst uns gemeinsam starten – Füllt einfach das{' '}
							<Link href='#catering-form-container'>
								Formular
							</Link>{' '}
							unten aus und wir legen los! Gebt in das
							Beschreibungsfeld alles ein:
						</p>
						<li>Um was für ein Event handelt es sich?</li>
						<li>Wie viele Leute nehmen ungefähr daran teil?</li>
						<li>
							Alle weiteren Sachen, die Ihr wissen wollt oder uns
							mitteilen wollt.
						</li>
					</ul>
					<p>
						Mit unserem Würstlich Food Truck oder mit unserem
						schicken Würstlich Burger-Pavillion, oder auch in der
						Kombination beider sind wir in der Lage, euer Event
						kulinarisch optimal auszugestalten.
					</p>
					<p>
						Wir bauen auf eurem Event oder eurer Party unsere
						leckeren Burger. Die Burgerkarte gestalten wir gemeinsam
						mit euch nach euren Wünschen aus unserem umfangreichen
						Angebot.
					</p>
					<p>
						Eine rechtzeitige Buchung eurerseits, die sorgfältige
						Vorbereitung unsererseits und schon könnt ihr eure Party
						oder euer Event entspannt genießen und nach Herzenslust
						schlemmen wie die Fürsten.
					</p>
					<p>Würstliche Grüße</p>
				</div>
			</div>
			<div
				id='catering-form-container'
				className='catering-form-container'
			>
				<div className='catering-form-wrapper'>
					<h3 className='catering-form-headline'>Anfrageformular</h3>
					<form className='catering-form' onSubmit={handleSubmit}>
						<label htmlFor='name'>Dein Name:</label>
						<input
							type='text'
							id='name'
							name='name'
							value={name}
							onChange={handleNameChange}
							required
						/>

						<label htmlFor='email'>Deine Email:</label>
						<input
							type='email'
							id='email'
							name='email'
							value={email}
							onChange={handleEmailChange}
							required
						/>

						<label htmlFor='request'>Beschreibung</label>
						<textarea
							id='request'
							name='request'
							value={request}
							onChange={handleRequestChange}
							rows='4'
							required
							placeholder='Hier kannst du alle Eckdaten und Weiteres zu deinem Event reinschreiben.'
						></textarea>
						<label htmlFor='consent'>
							<input
								type='checkbox'
								id='consent'
								name='consent'
								checked={consent}
								onChange={handleConsentChange}
								required
							/>
							<span>Ich stimme der Datenverarbeitung zu.</span>
						</label>
						<button className='location-cards-link' type='submit'>
							Abschicken
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
