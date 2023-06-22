import Link from 'next/link';
import NavBar from './components/NavBar';

import style from './Header.module.scss';
import Search from './components/SearchInput';
import Localization from './components/Localization';

export default function Header() {
	return (
		<header className={style.Header}>
			<Link href={'/'} className={style.logo}>
				ФАЦ ПГМУ
			</Link>
			<NavBar />
			<div>
				<Search />
				<Localization />
			</div>
		</header>
	);
}
