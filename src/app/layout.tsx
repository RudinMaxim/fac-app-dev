import './globals.scss';
import { Open_Sans } from 'next/font/google';
const open_Sans = Open_Sans({ subsets: ['latin'] });

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
	title: 'Федеральный аккредитационный центр ПГМУ',
	description:
		'Федеральный аккредитационный центр - симуляционно-аттестационный центр III (высшего) уровня. Центр, в котором МОЖНО и НУЖНО практиковать медицинские навыки для прохождения аккредитации и дальнейшей врачебной практики',
	keywords:
		'Федеральный аккредитационный центр, Федеральный аккредитационный центр ПГМУ Пермь, ПГМУ, ПГМУ ФАЦ, ФАЦ Пермь',
	author: 'Рудин Максим',
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
			</body>
		</html>
	);
}
``;
