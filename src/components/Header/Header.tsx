'use client';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
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
						{isMobile ? (
							<>
								<Link href={'/'}>
									<Image
										src={LogoSmell}
										width={50}
										height={50}
										alt={'Логотип Федеральный аккредитационный центр при ПГМУ'}
									/>
								</Link>

								<FaBars
									className={style.menuIconMobil}
									onClick={handleMenuClick}
								/>
							</>
						) : (
							<>
								<Link href={'/'}>
									<Image
										src={LogoBig}
										width={200}
										height={55}
										alt={'Логотип Федеральный аккредитационный центр при ПГМУ'}
									/>
								</Link>
								<NavBar onMenuToggle={handleMenuClick} />
								<div className={style.Linked_inner}>
									<Link href={'./#Contact'} className={style.LinkedPhone}>
										<FaPhone />
									</Link>
									<Link
										href={'./#Contact'}
										className={`${style.Linked} `}
										onClick={handleMenuClick}>
										Связатся с нами
									</Link>
								</div>
							</>
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
						Связатся с нами
					</Link>
				</div>
			)}
		</>
	);
}
