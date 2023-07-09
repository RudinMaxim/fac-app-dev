import React from 'react';
import style from '../AboutSection.module.scss';
import Image from 'next/image';
import { possibilities } from '../data';

export default function Possibilities() {
	return (
		<div className={style.Possibilities}>
			{possibilities.map((date) => (
				<div key={date.id} className={style.card}>
					<Image src={date.src} alt={date.title} width={100} height={100} />

					<h4>{date.title}</h4>
					<p>{date.subtitle}</p>
				</div>
			))}
		</div>
	);
}
