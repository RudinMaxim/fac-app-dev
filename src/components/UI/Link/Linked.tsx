import Link from 'next/link';
import style from './Linked.module.scss';
export default function Linked({ children, href }) {
	return (
		<Link href={href} className={style.Linked}>
			{children}
		</Link>
	);
}
