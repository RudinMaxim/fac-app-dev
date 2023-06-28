'use client';
import Button from '@/UI/Button/Button';
import style from './StartingSection.module.scss';
import illustrations from '../../assets/illustrations/Diagnosis.svg';
import Image from 'next/image';

export default function StartingSection() {
	return (
		<section className={style.StartingSection}>
			<div className={style.column}>
				<h1>
					Федеральный аккредитационный центр при{' '}
					<span className={style.mark}>ПГМУ</span>
				</h1>
				<p>
					Центр, в котором <span className={style.mark}>МОЖНО</span> и
					<span className={style.mark}> НУЖНО</span> практиковать медицинские
					навыки для прохождения аккредитации и дальнейшей врачебной практики.
				</p>
				<Button>Записатся </Button>
			</div>
			<div className={style.column}>
				<Image
					src={illustrations}
					width={600}
					height={600}
					alt='Picture of the author'
				/>
			</div>
		</section>
	);
}
