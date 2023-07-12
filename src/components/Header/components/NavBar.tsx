import React from 'react';
import style from '../Header.module.scss';

import Link from 'next/link';
import { ILinkNav } from '../data';

interface NavBarProps {
	onMenuToggle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onMenuToggle }) => {
	return (
		<nav className={style.NavBar}>
			<ul>
				{ILinkNav.map((link, index) => (
					<li key={index}>
						<Link href={link.url} onClick={onMenuToggle}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default NavBar;
