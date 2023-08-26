'use client';
import React, { useState, useEffect } from 'react';
import style from './ScrollToTopButton.module.scss';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from '@/UI/exportUI';

export default function ScrollToTopButton(): React.JSX.Element {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<span className={`${style.scrollToTop} ${isVisible ? style.visible : ''}`}>
			<Button onClick={handleClick} shape='circle'>
				<FaArrowUp />
			</Button>
		</span>
	);
}
