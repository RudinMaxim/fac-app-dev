'use client';
import React from 'react';
import style from '../Header.module.scss';
import { ILinkNav } from '../data';
import { usePathname } from 'next/navigation';
import { Linked } from '@/UI/exportUI';

interface NavBarProps {
	onMenuToggle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onMenuToggle }) => {
	const currentRoute = usePathname();

	return (
		<nav className={style.NavBar}>
			<ul>
				{ILinkNav.map((link, index) => (
					<li key={index}>
						<Linked
							href={link.url}
							onClick={onMenuToggle}
							className={
								currentRoute === link.url
									? style.activeStyle
									: style.nonActiveStyle
							}
							aria-label={link.title}>
							{link.title}
						</Linked>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
