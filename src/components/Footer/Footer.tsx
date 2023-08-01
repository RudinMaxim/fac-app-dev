import style from './Footer.module.scss';
import { SocialLink, YandexMap } from './components/export';
export default function Footer() {
	return (
		<footer className={style.Footer}>
			<div className='container'>
				<div className={style.FooterSection} id='Contact'>
					<h2>Контакты</h2>

					<div className={style.info}>
						<div className={style.workTime}>
							<h3>Время работы:</h3>
							<p>пн-пт с 8:30 до 18:00</p>
							<p>сб с 8:30 до 15:30</p>
							<p>вс - выходной</p>
						</div>

						<div className={style.address}>
							<h3>Адрес:</h3>
							<address>г. Пермь, ул. Попова, 7/Монастырская, 83</address>
							<address>г. Пермь, ул. Луначарского, 72</address>
						</div>
					</div>
					<SocialLink />
					<YandexMap />
				</div>
			</div>
		</footer>
	);
}
