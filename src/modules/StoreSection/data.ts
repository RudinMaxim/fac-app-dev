interface IGoods {
	id: number;
	title: string;
	for: string;
	name: string;
	time?: number;
	price: number;
	// Требования
	requirements?: string[];
	formStudy?: string;
	program: string[];
}

export const Goods: IGoods[] = [
	{
		id: 1,
		title: 'Программа повышения квалификации',
		name: 'Экстренная медицинская помощь взрослому',
		for: 'Для медицинских работников с вышим образованием',
		time: 18,
		price: 3850,
		requirements: [
			'Имеющие высшее образование и завершившие обучение по программам подготовки кадров высшей квалификации (программы ординатуры)',
			'Имеющие высшее образование и завершившие обучение по дополнительным профессиональным программам профессиональной переподготовки',
		],
		formStudy: 'Очно-заочная',
		program: [
			'Особенности обследования и лечения пациента при оказании ЭМП взрослому',
			'Алгоритм обследования при оказании ЭМП',
			'Алгоритм лечения и проведения СЛР при оказании ЭМП',
		],
	},
	{
		id: 2,
		title: 'Программа повышения квалификации',
		name: 'Неотложная помощь. Симуляционно-образовательный курс',
		for: 'Для акушеров-геникологов, неонатолоово, анастазиологов-реаниматологов',
		time: 36,
		price: 7500,
		requirements: [
			'Высшее образование - специалитет по одной из специальностей "Лечебное дело", "Педиатрия"',
		],
		formStudy: 'Очно-заочная',
		program: [
			'Терапия неотложных состояний в акушерстве',
			'Терапия неотложных состояний в неонатологии',
			'Коммуникативные навыки при терапии неотложных состояний',
		],
	},
	{
		id: 3,
		title: 'Курс',
		name: 'Оказание первой помощи',
		for: 'Для немедицинских работников',
		time: 36,
		price: 5300,
		formStudy: 'Очно-заочная',
		program: [
			'Оказание первой помощи при отсутствии сознания, остановке дыхания и кровообращения',
			'Оказание первой помощи при наружных кровотечениях и травмах',
			'Первая помощь при ожогах',
			'Первая помощь при переохлаждении и перегревании',
			'Первая помощь при острых отравлениях',
		],
	},
	{
		id: 4,
		title: 'Курс',
		name: 'Оказание первой помощи',
		for: 'Для немедицинских работников',
		time: 18,
		price: 7500,
		formStudy: 'Очно-заочная',
		program: [
			'Оказание первой помощи при отсутствии сознания',
			'Остановке дыхания и кровообращения',
			'Оказание первой помощи при наружных кровотечениях',
			'Первая помощь при травмах и ранениях',
		],
	},
	{
		id: 5,
		title: 'Экскурсионный практикумa',
		name: 'Попробуй стать врачом!',
		for: 'Для школьников 9-11 классов',
		time: 2,
		price: 450,
		formStudy: 'Очно',
		program: [
			'Рассказ о профессии врача - как симуляционное оборудование помогает в обучении студентов и врачей педиатров, стоматологов, кардиологов, неврологов, офтальмологов, оториноларингологов, врачей скорой помощи.',
			'В практической части экскурсии предоставляется возможность попробовать себя в базовых медицински манипуляциях',
		],
	},
	{
		id: 6,
		title: 'Обзорная экскурсия',
		name: 'Виртуальный мир врача',
		for: 'Для школьников 9-11 классов',
		time: 1,
		price: 300,
		formStudy: 'Очно',
		program: [
			'Обзорная экскурсия по центру с рассказом о профессии врача.',
			'Как симуляционное оборудование помогает в обучении студентов и врачей.',
		],
	},
	{
		id: 7,
		title: 'Экскурсионный практикум',
		name: 'Попробуй стать врачом',
		for: 'Для школьников 7-8 классов.',
		time: 2,
		price: 450,
		formStudy: 'Очно',
		program: [
			'Рассказ о профессии врача - как симуляционное оборудование помогает в обучении студентов и врачей педиатров, стоматологов, кардиологов, неврологов, офтальмологов, оториноларингологов, врачей скорой помощи. ',
			'Практикум - внедрение в профессию (уход за новорожденным (пеленание, смена подгузника), уход за полостью рта, аускультация (прослушивание) сердца и легких, проверка рефлексов человека, алгоритм действий при обнаружении инородных предметов в ушах, глазах, слуховом проходе, работа врача на скорой. Программа может быть скорректирована.',
		],
	},
	{
		id: 8,
		title: 'Обзорная экскурсия',
		name: 'Виртуальный мир врача',
		for: 'Для школьников 7-8 классов.',
		time: 1,
		price: 300,
		formStudy: 'Очно',
		program: [
			'Обзорная экскурсия по центру с рассказом о профессии врача.',
			'Как симуляционное оборудование помогает в обучении студентов и врачей.',
		],
	},
	{
		id: 9,
		title: 'Экскурсионный практикум',
		name: 'Первая ступень медицины',
		for: 'Для школьников 5-6 классов.',
		time: 2,
		price: 450,
		formStudy: 'Очно',
		program: [
			'Рассказ о профессии врача - как симуляционное оборудование помогает в обучении студентов и врачей педиатров, стоматологов, кардиологов, неврологов, офтальмологов, оториноларингологов, врачей скорой помощи. ',
			'Практикум - внедрение в профессию (уход за новорожденным (пеленание, смена подгузника), уход за полостью рта, аускультация (прослушивание) сердца и легких, проверка рефлексов человека, алгоритм действий при обнаружении инородных предметов в ушах, глазах, слуховом проходе, работа врача на скорой. Программа может быть скорректирована.',
		],
	},
	{
		id: 10,
		title: 'Обзорная экскурсия',
		name: 'Как обучаются врачи?',
		for: 'Для школьников 5-6 классов.',
		time: 1,
		price: 300,
		formStudy: 'Очно',
		program: [
			'Обзорная экскурсия по центру с рассказом о профессии врача.',
			'Как симуляционное оборудование помогает в обучении студентов и врачей педиатров, стоматологов, кардиологов, неврологов, офтальмологов, оториноларингологов, врачей скорой помощи.',
		],
	},
	{
		id: 11,
		title: 'Экскурсионный практикум',
		name: 'Как обучаются врачи?',
		for: 'Для школьников 3-4 классов.',
		time: 2,
		price: 450,
		formStudy: 'Очно',
		program: [
			'Рассказ о профессии врача - как симуляционное оборудование помогает в обучении студентов и врачей педиатров, стоматологов, кардиологов, неврологов.',
			'Практикум - внедрение в профессию (уход за новорожденным (пеленание, смена подгузника), уход за полостью рта, аускультация (прослушивание) сердца и легких, проверка рефлексов человека.',
		],
	},
	{
		id: 12,
		title: 'Обзорная экскурсия',
		name: 'Как обучаются врачи?',
		for: 'Для школьников 3-4 классов.',
		time: 1,
		price: 300,
		formStudy: 'Очно',
		program: [
			'Обзорная экскурсия по центру с рассказом о профессии врача.',
			'Как симуляционное оборудование помогает в обучении студентов и врачей педиатров, стоматологов, кардиологов, неврологов).',
		],
	},
];