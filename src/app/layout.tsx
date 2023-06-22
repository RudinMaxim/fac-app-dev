import Header from '@/components/Header/Header';
import './globals.scss';
import { Inter, Roboto } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				<div className='container'>
					<Header />
					{children}
					{/* <Footer /> */}
				</div>
			</body>
		</html>
	);
}
``;
