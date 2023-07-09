import style from '../AboutSection.module.scss';
import React from 'react';
import { history } from '../data';

export default function CompanyHistory(): React.JSX.Element {
	return (
		<div>
			<h3>История ФАЦ</h3>
			<ul className={style.timeline}>
				{history.map((item) => (
					<li key={item.key}>
						<span>{item.date}</span>
						<p>{item.event}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
