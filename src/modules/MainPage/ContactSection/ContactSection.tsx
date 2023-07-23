import style from './ContactSection.module.scss';
import { SocialLink, YandexMap } from './export';

export default function ContactSection(): React.JSX.Element {
	return (
		<div className='container'>
			<div className={style.ContactSection} id='Contact'>
				<h2>Контакты</h2>

				<div className={style.info}>
					<div className={style.workTime}>
						<h4>Время работы:</h4>
						<p>пн-пт с 8:30 до 18:00</p>
						<p>сб с 8:30 до 15:30</p>
						<p>вс - выходной</p>
					</div>

					<div className={style.address}>
						<h4>Адрес:</h4>
						<address>г. Пермь, ул. Попова, 7/Монастырская, 83</address>
						<address>г. Пермь, ул. Луначарского, 72</address>
					</div>
				</div>
				<SocialLink />
				<YandexMap />
			</div>
		</div>
	);
}
