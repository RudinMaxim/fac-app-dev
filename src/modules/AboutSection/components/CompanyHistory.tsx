import style from '../AboutSection.module.scss';
import React from 'react';
import { history } from '../data';

export default function CompanyHistory(): React.JSX.Element {
	return (
		<div className={style.CompanyHistory}>
			<h3>История ФАЦ</h3>
			<ul>
				{history.map((item, index) => (
					<li key={index}>
						<div className={style.date}>{item.date}</div>
						<p className={style.descr}>{item.event}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
