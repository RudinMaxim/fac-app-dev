import Link from 'next/link';
import style from '../Header.module.scss';

interface Link {
	id: number;
	title: string;
	url: string;
}
const links: Link[] = [
	{
		id: 1,
		title: 'Главная',
		url: '/',
	},
	{
		id: 2,
		title: 'Информация',
		url: '/Information',
	},
	{
		id: 3,
		title: 'Товары',
		url: '/Sale',
	},
];

export default function NavBar(): React.JSX.Element {
	return (
		<nav className={style.NavBar}>
			<ul>
				{links.map((link) => (
					<li key={link.id}>
						<Link key={link.id} href={link.url}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
