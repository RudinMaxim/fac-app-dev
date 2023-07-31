'use client';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LogoBig, LogoSmell } from '../../assets/image';
import Link from 'next/link';
import Image from 'next/image';
import style from './Header.module.scss';
import NavBar from './components/NavBar';
import useDisableScroll from '@/hooks/useScrollLock';

export default function Header(): React.JSX.Element {
	// Состояние для открытия/закрытия меню
	const [isMenuOpen, setMenuOpen] = useState(false);

	// Запрет прокрутки страницы
	useDisableScroll(isMenuOpen);

	// Проверяем, является ли устройство мобильным
	const isMobile: boolean = useMediaQuery({ maxWidth: 868 });

	// Изменяем состояние при клике на значок
	const handleMenuClick = () => {
		setMenuOpen(!isMenuOpen);
	};

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

					<NavBar onMenuToggle={handleMenuClick} />

					<Link
						href={'./#Contact'}
						className={style.Linked}
						onClick={handleMenuClick}>
						Контакты
					</Link>
				</div>
			)}
		</>
	);
}
