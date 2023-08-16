export default function Footer() {
	return (
		<footer className='footer'>
			<div className='social-links'>
				<h3>Social Media</h3>
				<table>
					<tbody>
						<tr>
							<td>
								<a href='social-media-link-1'>Social Link 1</a>
							</td>
						</tr>
						<tr>
							<td>
								<a href='social-media-link-2'>Social Link 2</a>
							</td>
						</tr>
						{/* Add more social links here */}
					</tbody>
				</table>
			</div>
			<div className='general-links'>
				<h3>Allgemein</h3>
				<table>
					<tbody>
						<tr>
							<td>
								<a href='impressum-link'>Impressum</a>
							</td>
						</tr>
						<tr>
							<td>
								<a href='datenschutz-link'>Datenschutz</a>
							</td>
						</tr>
						<tr>
							<td>
								<a href='kontakt-link'>Kontakt</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='kontakt-info'>
				<h3>Kontakt</h3>
				<table>
					<tbody>
						<tr>
							<td style={{ fontSize: '24px' }}>📱</td>
							<td></td>
						</tr>
						<tr>
							<td style={{ fontSize: '24px' }}>📫</td>
							<td></td>
						</tr>
						<tr>
							<td style={{ fontSize: '24px' }}>🏠</td>
							<td></td>
						</tr>
						<tr>
							<td />
							<td>Magdeburg</td>
						</tr>
						<tr>
							<td />
							<td> Germany</td>
						</tr>
					</tbody>
				</table>
			</div>
		</footer>
	)
}
