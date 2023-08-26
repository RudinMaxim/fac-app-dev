import Link from 'next/link';
import { LinkSocial } from '../data';
import style from '../Footer.module.scss';

export default function SocialLink() {
	return (
		<div className={style.SocialLink}>
			<h3>Ссылки:</h3>
			<ul>
				{LinkSocial.map((link, index) => (
					<li key={index}>
						<Link href={`${link?.Type}${link.url}`} target={`${link.target}`}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
