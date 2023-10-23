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
							<ul>
								<li>
									<p>пн-пт с 8:30 до 18:00</p>
								</li>
								<li>
									<p>сб с 8:30 до 15:30</p>
								</li>
								<li>
									<p>вс - выходной</p>
								</li>
							</ul>
						</div>

						<div className={style.address}>
							<h3>Адрес:</h3>
							<ul>
								<li>
									<address>г. Пермь, ул. Попова, 7/<br/>Монастырская, 83</address>
								</li>
								<li>
									<address>г. Пермь, ул. Луначарского, 72</address>
								</li>
							</ul>
						</div>

						<SocialLink />
					</div>
					<YandexMap />
				</div>
			</div>
		</footer>
	);
}
