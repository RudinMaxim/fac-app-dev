import style from './Header.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import NavBar from './components/NavBar';
import Localization from './components/Localization';
import Linked from '@/UI/Link/Linked';
import logo from '../../../public/Горизонтальный красный.png';

export default function Header() {
	return (
		<div className='container'>
			<header className={style.Header}>
				<Link href={'/'} className={style.logo}>
					<Image
						src={logo}
						width={250}
						height={65}
						alt='Picture of the author'
					/>
				</Link>

				<NavBar />

				<div className={style.rightSide}>
					<Localization />
					<Linked href={'/Contact'}>Contact</Linked>
				</div>
			</header>
		</div>
	);
}
