'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import style from '../AboutSection.module.scss';
import { employees } from '../data';
import { ExperienceCounter } from '../utils/ExperienceCounter';
import { ReadMore } from '../utils/ReadMore';
import { FaCertificate } from 'react-icons/fa';
import { Button, Linked } from '@/UI/exportUI';
import { useMediaQuery } from 'react-responsive';

export default function Employees(): React.JSX.Element {
	const [page, setPage] = useState(6);
	const isMobile: boolean = useMediaQuery({ maxWidth: 768 });

	const showMore = () => setPage(page + 3);

	return (
		<div className={style.Employees}>
			<h3>Сотрудники</h3>
			<div className={style.cardList}>
				{employees.slice(0, page).map((employee, index) => (
					<div key={index} className={style.card}>
						<div className={style.cardImage}>
							<Image
								width={isMobile ? 300 : 400}
								height={400}
								src={employee.photo}
								alt={`Фото ${employee.name} - ${employee.position}`}
							/>
						</div>
						<ExperienceCounter startYear={employee.experiencestartDate} />

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
