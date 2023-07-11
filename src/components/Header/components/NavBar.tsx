import React from 'react';
import style from '../Header.module.scss';

import Link from 'next/link';
import { links } from '../data';

interface NavBarProps {
	onMenuToggle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onMenuToggle }) => {
	return (
		<nav className={style.NavBar}>
			<ul>
				{links.map((link) => (
					<li key={link.id}>
						<Link key={link.id} href={link.url} onClick={onMenuToggle}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default NavBar;
