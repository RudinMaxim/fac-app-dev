import { Goods } from '../StoreSection/data';

let cycles: Array<string> = [];
Goods.map((el) => {
	cycles.push(el.name);
});

export const topics = [
	{
		lable: 'Задать вопрос',
		fields: [
			{
				name: 'Ваше ФИО',
				lable: 'Введите введите ваше ФИО',
			},
			{
				name: 'Ваша почта',
				lable: 'Введите вашу почту',
			},
			{
				name: 'Ваш вопрос',
				lable: 'Введите вашь вопрос',
			},
		],
	},
	{
		lable: 'Обучающие циклы',
		fields: [
			{
				name: 'Ваш вопрос',
				lable: 'Введите вашь вопрос',
			},
		],
	},
];
