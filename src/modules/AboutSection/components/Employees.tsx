'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import style from '../AboutSection.module.scss';
import { employees } from '../data';
import { ExperienceCounter } from '../utils/ExperienceCounter';
import { ReadMore } from '../utils/ReadMore';
import { FaCertificate } from 'react-icons/fa';
import { Button, Linked } from '@/UI/exportUI';

export default function Employees(): React.JSX.Element {
	const [page, setPage] = useState(6);

	const showMore = () => setPage(page + 3);

	return (
		<div className={style.Employees}>
			<h3>Сотрудники</h3>
			<div className={style.cardList}>
				{employees.slice(0, page).map((employee, index) => (
					<div key={index} className={style.card}>
						<ExperienceCounter startYear={employee.experiencestartDate} />
						<Image
							src={employee.photo}
							height={600}
							width={400}
							alt={`Фото ${employee.name} - ${employee.position}`}
						/>

						<div className={style.description}>
							<h4 className={style.title}>{employee.name}</h4>
							<p className={style.subtitle}>{employee.position}</p>

							<ReadMore text={employee.info} maxLength={100} />

							<ul className={style.сertificate}>
								{employee.сertificate?.map((сertificate, index) => (
									<li key={index}>
										<Linked href={сertificate.link} target='_blank'>
											<FaCertificate />
											{сertificate.name}
										</Linked>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>

			{page < employees.length && (
				<div className={style.showMoreInner}>
					<Button onClick={showMore} type='button'>
						Показать еще
					</Button>
				</div>
			)}
		</div>
	);
}
