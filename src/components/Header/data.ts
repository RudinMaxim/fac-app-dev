interface ILinkNav {
	title: string;
	url: string;
}
export const ILinkNav: ILinkNav[] = [
	{
		title: 'Главная',
		url: '/',
	},
	{
		title: 'Информация',
		url: '/Information',
	},
	{
		title: 'Товары',
		url: '/Sale',
	},
];
interface ILinkSocial {
	title: string;
	url: string;
	Type?: TypeLink;
}
export enum TypeLink {
	tel = 'tel:',
	mailto = 'mailto:',
	normal = '',
}

export const ILinkSocial: ILinkSocial[] = [
	{
		title: 'Вконтакте',
		url: 'https://vk.com/fca_perm',
		Type: TypeLink.normal,
	},
	{
		title: 'sim-center@psma.ru',
		url: 'sim-center@psma.ru',
		Type: TypeLink.mailto,
	},
];
