'use client';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { LogoBig, LogoSmell } from '../../assets/image';
import Image from 'next/image';
import style from './Header.module.scss';
import NavBar from './components/NavBar';
import { Linked } from '@/UI/exportUI';

export default function Header(): React.JSX.Element {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const isMobile: boolean = useMediaQuery({ maxWidth: 954 });

	const handleMenuClick = (): void => {
		setMenuOpen((el: boolean) => !el);
	};

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isMobile, isMenuOpen]);

	return (
		<>
			<header
				className={style.Header}
				style={{ overflow: isMenuOpen ? 'hidden' : 'visible' }}>
				<div className='container'>
					<div className={style.HeaderInner}>
						{isMobile ? (
							<>
								<Linked href={'/'}>
									<Image
										src={LogoSmell}
										width={50}
										height={50}
										alt={'Логотип Федеральный аккредитационный центр при ПГМУ'}
									/>
								</Linked>

								<FaBars
									className={style.menuIconMobil}
									onClick={handleMenuClick}
								/>
							</>
						) : (
							<>
								<Linked href={'/'}>
									<Image
										src={LogoBig}
										width={200}
										height={55}
										alt={'Логотип Федеральный аккредитационный центр при ПГМУ'}
									/>
								</Linked>

								<NavBar onMenuToggle={handleMenuClick} />

								<div className={style.Linked_inner}>
									<Linked
										href={'./#Contact'}
										onClick={handleMenuClick}
										type='button'>
										Связаться с нами
									</Linked>
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

					<Linked href={'./#Contact'} type='button' onClick={handleMenuClick}>
						Связаться с нами
					</Linked>
				</div>
			)}
		</>
	);
}
