import style from '../AboutSection.module.scss';
import React from 'react';
import { history } from '../data';

export default function CompanyHistory(): React.JSX.Element {
	return (
		<div>
			<h2>История ФАЦ</h2>
			<ul className={style.timeline}>
				{history.map((item, index) => (
					<li key={index}>
						<span>{item.date}</span>
						<p>{item.event}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
