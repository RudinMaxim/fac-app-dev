'use client';
import React, { useState, useEffect } from 'react';
import style from './ScrollToTopButton.module.scss';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
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
		<button
			className={`${style.scrollToTop} ${isVisible ? style.visible : ''}`}
			onClick={handleClick}>
			<FaArrowUp />
		</button>
	);
}