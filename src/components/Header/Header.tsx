'use client';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBars, FaTimes } from 'react-icons/fa';

import Link from 'next/link';
import Image from 'next/image';

import style from './Header.module.scss';
import NavBar from './components/NavBar';

import { LogoBig, LogoSmell } from '../../assets/image';

import useDisableScroll from '@/hooks/useDisableScroll';

export default function Header(): React.JSX.Element {
	// Проверяем, является ли устройство мобильным
	const isMobile: boolean = useMediaQuery({ maxWidth: 768 });
	// Состояние для открытия/закрытия меню
	const [isMenuOpen, setMenuOpen] = useState(false);
	// Изменяем состояние при клике на значок
	const handleMenuClick = () => setMenuOpen(!isMenuOpen);
	// запрета прокрутки страницы при открытом меню
	useDisableScroll(isMobile && isMenuOpen);

	return (
		<>
			<header className={style.Header}>
				<div className='container'>
					<div className={style.HeaderInner}>
						{/* LOGO */}
						<Link href={'./'} className={style.logo}>
							{isMobile ? (
								<Image
									src={LogoSmell}
									width={50}
									height={50}
									alt={'Логотип Федеральный аккредитационный центр при ПГМУ'}
								/>
							) : (
								<Image
									src={LogoBig}
									width={250}
									height={65}
									alt={'Логотип Федеральный аккредитационный центр при ПГМУ'}
								/>
							)}
						</Link>

						{isMobile ? (
							<FaBars className={style.menuIcon} onClick={handleMenuClick} />
						) : (
							<NavBar onMenuToggle={handleMenuClick} />
						)}
					</div>
				</div>
			</header>

			{isMobile && isMenuOpen && (
				<div className={style.mobileMenu}>
					<FaTimes className={style.closeIcon} onClick={handleMenuClick} />
					<div className={style.mobileMenuInner}>
						<NavBar onMenuToggle={handleMenuClick} />

						<Link
							href={'./#Contact'}
							className={style.Linked}
							onClick={handleMenuClick}>
							Контакты
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
