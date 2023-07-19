interface ILinkSocial {
	title: string;
	url: string;
	Type?: TypeLink;
	target: boolean;
}
export enum TypeLink {
	tel = 'tel:',
	mailto = 'mailto:',
	normal = '',
}

export const LinkSocial: ILinkSocial[] = [
	{
		title: 'Вконтакте',
		url: 'https://vk.com/fca_perm',
		Type: TypeLink.normal,
		target: true,
	},
	{
		title: 'sim-center@psma.ru',
		url: 'sim-center@psma.ru',
		Type: TypeLink.mailto,
		target: false,
	},
	{
		title: '+7 (342) 217 19 52',
		url: '+73422171952',
		Type: TypeLink.tel,
		target: false,
	},
];
