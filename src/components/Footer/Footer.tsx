import Link from 'next/link';
import style from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={style.Footer}>
			<div className='container'>
				<div className={style.row}>
					<div className={style.colum}>
						<h5>Навигация</h5>
						<ul>
							<li>
								<Link href={'/'}>Главная</Link>
							</li>
							<li>
								<Link href={'/Information'}>Информация</Link>
							</li>
							<li>
								<Link href={'/Sale'}>Товары</Link>
							</li>
						</ul>
					</div>
					<div className={style.colum}>
						<h5>Помощь</h5>
					</div>
					<div className={style.colum}>
						<h5>Правила</h5>
					</div>
				</div>
				<p className={style.copyright}>
					Весь контент защищен авторским правом &copy; ФАЦ
				</p>
			</div>
		</footer>
	);
}
