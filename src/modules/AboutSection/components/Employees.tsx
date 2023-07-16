import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from '../AboutSection.module.scss';

import { employees } from '../data';
import { ExperienceCounter } from '../utils';

export default function Employees(): React.JSX.Element {
	return (
		<div>
			<h3>Сотрудники</h3>
			{employees.map((employee, index) => (
				<div key={index} className={style.Employees}>
					<div>
						<Image
							src={employee.photo}
							height={100}
							width={100}
							alt={`Фото ${employee.name} - ${employee.position}`}
						/>
						<ExperienceCounter startYear={employee.experiencestartDate} />
					</div>
					<h4>{employee.name}</h4>
					<h5>{employee.position}</h5>
					<p>{employee.info}</p>
					<div>
						{employee.сertificate?.map((сertificate, index) => (
							<div key={index}>
								<Link href={сertificate.link} target='_blank'>
									{сertificate.name}
								</Link>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
