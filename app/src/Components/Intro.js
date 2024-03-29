import Link from 'next/link'
import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Intro() {
	const ref = useRef(null)
	const [isInView, setIsInView] = useState(false)

	useEffect(() => {
		const element = ref.current

		console.log(element)
		if (!element) return

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0]
				if (entry.isIntersecting) {
					setIsInView(true)
					observer.unobserve(element) // Stop observing once it's in view
				}
			},
			{
				threshold: 0.8, // Trigger when 100% of the element is visible
			}
		)

		observer.observe(element)

		return () => {
			observer.disconnect()
		}
	}, [])

	const text = [
		{ type: 'heading1', text: 'Schlemmen wie die Fürsten' },
		{
			type: 'heading2',
			text: 'bei Würstlich!',
		},
	]

	const container = {
		visible: {
			transition: {
				staggerChildren: 0.025,
			},
		},
	}

	useEffect(() => {
		console.log('Element is in view: ', isInView)
	}, [isInView])

	return (
		<section id='content' className='intro'>
			<motion.div
				className='intro-headline locations-headline'
				initial='hidden'
				variants={container}
				animate={isInView ? 'visible' : 'hidden'}
				ref={ref}
			>
				<div className='container'>
					{text.map((item, index) => {
						return <AnimatedText {...item} key={index} />
					})}
				</div>
			</motion.div>
			<svg
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
			<div className='intro-container'>
				<picture className='intro-image'>
					<img src='./intro-image.png' alt='intro-image' />
				</picture>
				<div className='intro-text-wrapper'>
					<h3>
						Euch nagt der Hunger zwischendurch oder ihr m&ouml;chtet
						zu Mittag lecker satt werden?
					</h3>
					<p>
						Dann besucht W&Uuml;RSTLICH in{' '}
						<Link href='/stores'>
							Magdeburg, Oschersleben oder Haldensleben
						</Link>
						. Gem&uuml;tliche H&auml;uschen laden euch in einer
						angenehmen und modernen Atmosph&auml;re zum Schlemmen
						und Verweilen ein.
					</p>

					<p>
						Wechselnde Mittagsgerichte, wie Gehacktesstippe mit
						selbstgemachtem Kartoffelbrei, ein k&ouml;stliches
						Wurstgulasch, Soljanka oder ein kr&auml;figer Eintopf
						mit Bockwurst, versprechen Genuss f&uuml;r den
						verw&ouml;hnten Gaumen. <br />
						<Link href='/stores'>Zu den Speisekarten</Link>
					</p>

					<p>
						Probieren solltet ihr unbedingt unsere super leckere
						Curryso&szlig;e, nat&uuml;rlich selbstgemacht nach dem
						original W&Uuml;RSTLICH-Geheimrezept, oder vielleicht
						einen unserer schmackhaften Burger.
					</p>

					<p>
						Selbstverst&auml;ndlich werden alle Gerichte frisch
						zubereitet und vorwiegend Lebensmittel aus der Region
						verwendet.
					</p>

					<p>
						Um Wartezeiten zu vermeiden, k&ouml;nnt Ihr Eure
						Lieblingsspeisen telefonisch vorbestellen. Die
						Telefonnummer findet ihr bei den einzelnen{' '}
						<Link href='/stores'>Stores</Link>.
						<br />
						Die Zubereitung dauert je nach Bestellzeitraum zwischen
						15 bis 30 Minuten.
					</p>

					<p>Sebastian Ebeling</p>
				</div>
			</div>
		</section>
	)
}
