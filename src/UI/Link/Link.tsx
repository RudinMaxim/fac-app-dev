import Link from 'next/link';
import style from './Link.module.scss';

interface ILink {
	children?: React.ReactNode;
	href: string;
	type?: 'button' | 'link';
	[key: string]: any;
}

export function Linked({ children, href, type = 'link', ...rest }: ILink) {
	const buttonClass = type == 'button' ? style.LinkedButton : '';
	return (
		<Link href={href} className={`${style.Linked} ${buttonClass}`} {...rest}>
			{children}
		</Link>
	);
}
