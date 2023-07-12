'use client';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBars, FaTimes } from 'react-icons/fa';

import Link from 'next/link';
import Image from 'next/image';

import style from './Header.module.scss';
import NavBar from './components/NavBar';
import logo from '../../../public/Горизонтальный красный.png';
import logo2 from '../../../public/fi.png';

import useDisableScroll from '@/hooks/useDisableScroll';
import SocialLink from './components/SocialLink';

export default function Header(): React.JSX.Element {
	// Проверяем, является ли устройство мобильным
	const isMobile: boolean = useMediaQuery({ maxWidth: 768 });
	// Состояние для открытия/закрытия меню
	const [isMenuOpen, setMenuOpen] = useState(false);
	// Изменяем состояние при клике на значок
	const handleMenuClick = () => setMenuOpen(!isMenuOpen);

	// Изменяем состояние при клике на ссылку внутри меню
	const handleMenuToggle = () => setMenuOpen(!isMenuOpen);

	// запрета прокрутки страницы при открытом меню
	useDisableScroll(isMobile && isMenuOpen);

	return (
		<>
			<header className={style.Header}>
				<div className='container'>
					<div className={style.HeaderInner}>
						<div className={style.topRow}>
							{/* LOGO */}
							<Link href={'/'} className={style.logo}>
								{isMobile ? (
									<Image
										src={logo2}
										width={50}
										height={50}
										alt={'Логотип Федеральный аккредитационный центр при ПГМУ'}
									/>
								) : (
									<Image
										src={logo}
										width={250}
										height={65}
										alt={'Логотип Федеральный аккредитационный центр при ПГМУ'}
									/>
								)}
							</Link>

							{isMobile ? (
								<FaBars className={style.menuIcon} onClick={handleMenuClick} />
							) : (
								<div className={style.Social}>
									<SocialLink />
								</div>
							)}
						</div>
						<div className={style.underRow}>
							{isMobile ? (
								''
							) : (
								<>
									<NavBar onMenuToggle={handleMenuToggle} />
									<Link href={'/Registration'}>Оставить заявку</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</header>

			{isMobile && isMenuOpen && (
				<div className={style.mobileMenu}>
					<FaTimes className={style.closeIcon} onClick={handleMenuClick} />
					<NavBar onMenuToggle={handleMenuToggle} />
				</div>
			)}
		</>
	);
}
