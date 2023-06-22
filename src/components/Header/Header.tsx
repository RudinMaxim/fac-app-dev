import Link from 'next/link';
import NavBar from './components/NavBar';

import style from './Header.module.scss';

export default function Header() {
	return (
		<header className={style.Header}>
			<Link href={'/'} className={style.logo}>
				ФАЦ ПГМУ
			</Link>
			<NavBar />
		</header>
	);
}
