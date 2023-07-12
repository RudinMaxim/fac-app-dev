import style from './StartingSection.module.scss';
import illustrations from '../../assets/illustrations/Diagnosis.svg';
import Image from 'next/image';

export default function StartingSection() {
	return (
		<div className='container'>
			<section className={style.StartingSection}>
				<div className={style.column}>
					<h1>Федеральный аккредитационный центр при ПГМУ</h1>
					<p>
						Центр, в котором МОЖНО и НУЖНО практиковать медицинские навыки для
						прохождения аккредитации и дальнейшей врачебной практики.
					</p>
				</div>
				{/* <div className={style.column}>
					<Image
						src={illustrations}
						width={500}
						height={600}
						alt='Picture of the author'
					/>
				</div> */}
			</section>
		</div>
	);
}
