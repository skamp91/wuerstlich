export default function BackToTopButton(props) {
	return (
		<>
			<div className={props.showGoTop} onClick={props.scrollUp}>
				<div className='goTop'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 448 512'
						className='goTop__text'
						fill='#ffba49'
					>
						<path d='M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z' />
					</svg>
				</div>
			</div>
		</>
	)
}
