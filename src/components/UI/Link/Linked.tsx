import Link from 'next/link';
import style from './Linked.module.scss';

export default function Linked({ children, href }): React.JSX.Element {
	return (
		<Link href={href} className={style.Linked}>
			{children}
		</Link>
	);
}
