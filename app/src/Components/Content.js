import Locations from './Locations.js';
import './content.css';

export default function Content() {
	// const locations = ['Haldensleben'];
	return (
		<>
			<div className='parallax' />
			<section className='content'>
				<Locations />
			</section>
		</>
	);
}
