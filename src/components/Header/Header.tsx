import Link from 'next/link';
import NavBar from './components/NavBar';

import style from './Header.module.scss';
import Localization from './components/Localization';
import Linked from '@/UI/Link/Linked';
export default function Header() {
	return (
		<header className={style.Header}>
			<Link href={'/'} className={style.logo}>
				ФАЦ ПГМУ
			</Link>
			<NavBar />
			<div className={style.rightSide}>
				<Localization />
				<Linked href={'/Contact'}>wdawd</Linked>
			</div>
		</header>
	);
}
