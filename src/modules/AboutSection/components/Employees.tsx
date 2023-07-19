'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from '../AboutSection.module.scss';

import { employees } from '../data';
import { ExperienceCounter } from '../utils/ExperienceCounter';
import { ReadMore } from '../utils/ReadMore';
import { FaCertificate } from 'react-icons/fa';

export default function Employees(): React.JSX.Element {
	return (
		<div className={style.Employees}>
			<h3>Сотрудники</h3>
			<div className={style.cardList}>
				{employees.map((employee, index) => (
					<div key={index} className={style.card}>
						<ExperienceCounter startYear={employee.experiencestartDate} />

						<Image
							src={employee.photo}
							height={400}
							width={200}
							alt={`Фото ${employee.name} - ${employee.position}`}
						/>

						<div className={style.description}>
							<h4 className={style.title}>{employee.name}</h4>
							<p className={style.subtitle}>{employee.position}</p>

							<ReadMore text={employee.info} maxLength={150} />

							<ul className={style.сertificate}>
								{employee.сertificate?.map((сertificate, index) => (
									<li key={index}>
										<Link href={сertificate.link} target='_blank'>
											<FaCertificate />
											{сertificate.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
