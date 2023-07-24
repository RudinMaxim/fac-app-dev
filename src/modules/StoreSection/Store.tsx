'use client';
import React, { useState } from 'react';
import PopupWindow from '@/components/Popup/Popup';
import style from './Store.module.scss';

export default function Store() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<div className='container'>
			<section className={style.Store}>
				<button onClick={handleOpen}>Open Popup</button>
				<PopupWindow isOpen={isOpen} onClose={handleClose}>
					<h2>Popup Content</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</PopupWindow>
			</section>
		</div>
	);
}
