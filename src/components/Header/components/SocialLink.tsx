import Link from 'next/link';
import { ILinkSocial } from '../data';
import style from '../Header.module.scss';

export default function SocialLink() {
	return (
		<div className={style.SocialLink}>
			<Link className={style.phone} href={`tel:${+73422171952}`}>
				+7 (342) 217 19 52
			</Link>
			<ul>
				{ILinkSocial.map((link, index) => (
					<li key={index}>
						<Link href={`${link?.Type}${link.url}`} target='_blank'>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
