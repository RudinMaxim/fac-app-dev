import React from 'react';
import style from './ConnectForm.module.scss';
import { ContactForm } from './components/ContactForm';

export default function Connect() {
	return (
		<div className='container'>
			<section className={style.Connect}>
				<h1>Связатся с нами</h1>
				<ContactForm />
			</section>
		</div>
	);
}
