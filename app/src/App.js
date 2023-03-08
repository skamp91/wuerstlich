import Header from './Components/Header.js';
import Content from './Components/Content.js';
import BackToTopButton from './Components/BackToTopButton.js';
import { useState, useEffect, useRef, useCallback } from 'react';
import useWindowSize from './utils/useWindowSize.js';
import './App.css';

const App = () => {
	const [scrollPosition, setSrollPosition] = useState(() => 0);
	const [showGoTop, setShowGoTop] = useState('goTopHidden');

	const refScrollUp = useRef();

	const { height } = useWindowSize();

	const handleVisibleButton = useCallback(() => {
		const position = window.pageYOffset;
		setSrollPosition(position);

		if (scrollPosition > height) {
			return setShowGoTop('goTop');
		} else if (scrollPosition < height) {
			return setShowGoTop('goTopHidden');
		}
	}, [height, scrollPosition]);

	const handleScrollUp = () => {
		refScrollUp.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', handleVisibleButton);
	}, [handleVisibleButton]);

	return (
		<>
			<div ref={refScrollUp}> </div>
			<Header />
			<Content />
			<BackToTopButton showGoTop={showGoTop} scrollUp={handleScrollUp} />
		</>
	);
};

export default App;
