import './globals.scss';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
const open_Sans = Open_Sans({ subsets: ['latin'] });

import {
	Header,
	Footer,
	ScrollToTopButton,
} from '@/components/exportComponents';

export const metadata: Metadata = {
	title: 'Федеральный аккредитационный центр ПГМУ',
	description:
		'Федеральный аккредитационный центр - симуляционно-аттестационный центр III (высшего) уровня. Центр, в котором МОЖНО и НУЖНО практиковать медицинские навыки для прохождения аккредитации и дальнейшей врачебной практики',
	keywords:
		'Федеральный аккредитационный центр, Федеральный аккредитационный центр ПГМУ Пермь, ПГМУ, ПГМУ ФАЦ, ФАЦ Пермь',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ru'>
			<body className={open_Sans.className}>
				<Header />
				{children}
				<Footer />

				{/* Прокрутка в верх контейнера */}
				<div className='container'>
					<ScrollToTopButton />
				</div>
			</body>
		</html>
	);
}
