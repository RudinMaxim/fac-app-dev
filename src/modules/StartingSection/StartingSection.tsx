import style from './StartingSection.module.scss';
import { Linked } from '@/UI/exportUI';
import { FaUserGraduate, FaRobot, FaBookMedical } from 'react-icons/fa';

export default function StartingSection(): React.JSX.Element {
	return (
		<div className='container'>
			<section className={style.StartingSection}>
				<div className={style.info}>
					<span className={style.upperTitle}>При ПГМУ</span>
					<h1>Федеральный аккредитационный центр</h1>
					<p className={style.subTitle}>
						Центр, в котором МОЖНО и НУЖНО практиковать медицинские навыки для
						прохождения аккредитации и дальнейшей врачебной практики.
					</p>
					<Linked href='/Sale' type='button'>
						Наше обучение
					</Linked>
				</div>

				<div className={style.cardList}>
					<div className={style.card}>
						<span>
							<FaUserGraduate /> 5000+
						</span>
						<p>Ежегодно обучаются</p>
					</div>
					<div className={style.card}>
						<span>
							<FaRobot /> 200+
						</span>
						<p>Симуляторов</p>
					</div>
					<div className={style.card}>
						<span>
							<FaBookMedical /> 30+
						</span>
						<p>Обучающих циклов</p>
					</div>
				</div>
			</section>
		</div>
	);
}
