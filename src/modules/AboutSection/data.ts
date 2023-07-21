interface IHistoryItem {
	date: number | string;
	event: string;
}
export const history: IHistoryItem[] = [
	{
		date: 2012,
		event:
			'С 2012 года начал работу Центр практических умений и навыков Пермского государственного медицинского университета для студентов и обучающихся всех факультетов (ВО, СПО, ДПО, ДСПО), созданный приказом ректора №2333 от 07.12.2012, позже переименованный в Мультипрофильный аккредитационно-симуляционный центр (МАСЦ)',
	},
	{
		date: 2016,
		event:
			'С 2016 года ФАЦ является базой для прохождения первичной аккредитации выпускников высшего, с 2018 года и среднего профессионального образования Пермского края, а с 2019 года проходит первичная специализированная аккредитация.',
	},
	{
		date: 2021,
		event:
			'На основании решения ученого совета ФГБОУ ВО ПГМУ им. академика Е.А. Вагнера Минздрава России 27.12.2021 г. создан Федеральный аккредитационный центр (ФАЦ) в рамках федерального проекта «Обеспечение медицинских организаций системы здравоохранения квалифицированными кадрами». В структурное подразделение ФАЦ был включен Мультипрофильный аккредитационно-симуляционный центр.',
	},
	{
		date: 2023,
		event:
			'В феврале 2023 года Федеральному аккредитационному центру присвоен аккредитационный уровень: Симуляционно-аттестационный центр III (высшего) уровня. Образовательная, методическая и научная деятельность центра соответствует стандартам РОСОМЕД.',
	},
];

interface IPossibilities {
	title: string;
	subtitle: string;
	src: string;
}
export const possibilities: IPossibilities[] = [
	{
		title: 'Создание клинических ситуаций',
		subtitle:
			'Создание клинических ситуаций, максимально приближенных к реальным, но безопасных для пациентов.',
		src: '/android-chrome-192x192.png',
	},
	{
		title: 'Командная работа',
		subtitle:
			'Отработка взаимодействия при командной работе и определяющая роль лидера в ней.',
		src: '/android-chrome-192x192.png',
	},
	{
		title: 'Выработка и поддержания навыков',
		subtitle:
			'Профессиональных действий в экстренных ситуациях, необходимых каждому медицинскому специалисту.',
		src: '/android-chrome-192x192.png',
	},
	{
		title: 'Неоднократность',
		subtitle:
			'Неоднократность повторения действий для выработки умения и ликвидации ошибок.',
		src: '/android-chrome-192x192.png',
	},
];

interface IEmployees {
	name: string;
	position: string;
	info: string;
	experiencestartDate: number;
	photo: string;
	сertificate?: Array<{ name: string; link: string }>;
}
export const employees: IEmployees[] = [
	{
		name: 'Рудин Виктор Владимирович',
		position: 'директор ФАЦ',
		info: 'Краткая информация – Кандидат медицинских наук, доцент кафедры нормальной, топографической и клинической анатомии, оперативной хирургии. Направления подготовки и специальности: «Хирургия», «Ультразвуковая диагностика», «Организация здравоохранения». Общий стаж работы: с 1990 г. Стаж работы по специальности: с 1997 г. Руководит работой центра с 2013 г. Эксперт медицинского симуляционного обучения. Является Председателем Пермского отделения РОСОМЕД.',
		experiencestartDate: 1997,
		photo: '/nxptPzbzpDg.png',
		сertificate: [
			{
				name: 'Евромедсим',
				link: 'https://www.psma.ru/files/ФАЦ/Сертификат_Евромедсим_Рудин_В.В.jpg',
			},
			{
				name: 'ЭСМО',
				link: 'https://www.psma.ru/files/ФАЦ/Сертификат_ЭСМО_Рудин_В.В.jpg',
			},
		],
	},
	{
		name: 'Артамонова Ольга Антоновна',
		position: 'руководитель МАСЦ',
		info: 'Краткая информация – Высшее образование, аспирантура по специальности «Ветеринарная микробиология, вирусология, эпизоотология и вирусология». Общий стаж работы с 2014 г. В центре работает с сентября 2017 г. Руководит работой МАСЦ. Принимает решения, связанные с организацией расписания и методическими аспектами, организует работу специалистов. Эксперт медицинского симуляционного обучения. Член РОСОМЕД.',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 2014,
	},
	{
		name: 'Кабирова Юлия Албартовна',
		position: 'руководитель УМЦ',
		info: 'Краткая информация – Кандидат медицинских наук, доцент кафедры внутренних болезней и семейной медицины, преподаватель и руководитель проектов по бережливым технологиям в медицине. Общий стаж работы с 2005 г. В центре работает с 2018 г. Руководит работой УМЦ бережливых технологий «Фабрика процессов «Lean&Training». Эксперт медицинского симуляционного обучения. Член РОСОМЕД.',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 2005,
		сertificate: [
			{
				name: 'Евромедсим',
				link: 'https://www.psma.ru/files/ФАЦ/Сертификат_Евромедсим_Кабирова_Ю.А.jpg',
			},
			{
				name: 'ЭСМО',
				link: 'https://www.psma.ru/files/ФАЦ/Сертификат_ЭСМО_Кабирова_Ю.А.jpg',
			},
		],
	},
	{
		name: 'Ширяева Юлия Викторовна',
		position: 'документовед',
		info: 'Краткая информация – Высшее образование по специальности документационное обеспечение управления. Стаж работы с 2001 г. В центре работает с июня 2022 г. Организует документационное обеспечение управления ФАЦ ПГМУ. Секретарь Пермского отделения РОСОМЕД. ',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 2001,
	},
	{
		name: 'Мусакулова Нурсауле Вячеславовна',
		position: 'ведущий специалист',
		info: 'Краткая информация – Высшее образование. Стаж работы с 2019 г. В центре работает с декабря 2019 г. Организует методическую работу по планированию и организации учебного процесса. Принимает участие в организации и проведении аккредитации специалистов. Организует и контролирует проведение курсов повышения квалификации. Внедряет симуляционные методики в образовательный процесс. Эксперт медицинского симуляционного обучения. Член РОСОМЕД.',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 2019,
		сertificate: [
			{
				name: 'Евромедсим',
				link: 'https://www.psma.ru/files/ФАЦ/Сертификат_Евромедсим_Мусакулова_Н.jpg',
			},
			{
				name: 'ЭСМО',
				link: 'https://www.psma.ru/files/ФАЦ/Сертификат_ЭСМО_Мусакулова_Н.jpg',
			},
		],
	},
	{
		name: 'Федосеева Александра Владиславовна',
		position: 'специалист',
		info: 'Высшее образование (ПГМА им. академика Вагнера Е.А. по специальности «Лечебное дело»,  интернатура по специальности «Общая хирургия»), курсы повышения квалификации по специальности «Онкология». Стаж работы с 2012 г. В центре работает с мая 2023 г. Осуществляет подготовку соответствующего оснащения (симуляционное оборудование, проекционные установки, демонстрационный и расходный материал) к занятиям и аккредитации.',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 2012,
	},
	{
		name: 'Манаева Мария Валерьевна',
		position: 'специалист',
		info: 'Краткая информация – Высшее образование по специальности «Стоматология», ординатура по специальности «Стоматология детская» (ФГБОУ ВО ПГМУ им. академика Е.А. Вагнера). Стаж работы с 2017 г. В центре работает с мая 2022 г. Организует подготовку процесса аккредитации специалистов по специальности «Стоматология», проводит тренинги и практические занятия по специальности «Стоматология». Врач-стоматолог детский, сотрудник кафедры детской стоматологии и ортодонтии, заместитель декана стоматологического факультета по социальной защите и внеучебной работе. Член РОСОМЕД.',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 2017,
	},
	{
		name: 'Фурть Варвара Ивановна',
		position: 'специалист',
		info: 'Высшее образование по специальности «Анестезиология и реаниматология» (ФГБОУ ВО ПГМУ им. академика Е.А. Вагнера). Стаж работы с 2016 г. В центре работает с июня 2022 г. Проводит обучающие занятия по оказанию первой помощи, оказанию медицинской помощи в экстренных ситуациях и при неотложных состояниях. Принимает участие в проведении обучения и мастер-классов в рамках специальности анестезиология-реаниматология. Член РОСОМЕД.',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 2016,
	},
	{
		name: 'Кузнецова Анна Артемовна',
		position: 'специалист',
		info: 'Высшее образование. Общий стаж работы с 2017 г. В центре работает с 2018 г. Осуществляет подготовку соответствующего оснащения (симуляционное оборудование, проекционные установки, демонстрационный и расходный материал) к занятиям и аккредитации. Сотрудник кафедры нормальной, топографической и клинической анатомии, оперативной хирургии.',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 2017,
	},
	{
		name: 'Антонова Юлия Сергеевна',
		position: 'методист',
		info: 'Краткая информация – Высшее образование. Общий стаж работы с 2004 г. В центре работает с октября 2019 г. Осуществляет методическую работу ФАЦ: организация работы по научно-методическому обеспечению образовательной деятельности ФАЦ, разработка рабочих образовательных программ по дисциплинам и учебным курсам. Сотрудник кафедры нормальной, топографической и клинической анатомии, оперативной хирургии. Член РОСОМЕД',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 2004,
	},
	{
		name: 'Щеголева Анна Александровна',
		position: 'методист УМЦ',
		info: 'Краткая информация – Высшее образование по специальности лингвист переводчик, повышение квалификации по дополнительной профессиональной программе «Методист онлайн-курсов». Общий стаж работы с 2011 г. В центре работает с апреля 2022 г. Осуществляет разработку рабочих образовательных программ УМЦ, ведет документацию по циклам УМЦ, осуществляет сопровождение групп, обучающихся по программам УМЦ.',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 2011,
	},
	{
		name: 'Ленин Павел Валерьевич',
		position: 'инженер по обслуживанию оборудования',
		info: 'Краткая информация – Высшее образование по направлению «Инфокоммуникационные технологии и системы связи». Общий стаж работы с 2014 г. Осуществляет различные виды ремонта симуляционного оборудования, а также принимает меры по улучшению их эксплуатации и обслуживания. Осуществляет проверку технического состояния оборудования.',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 2014,
	},
	{
		name: 'Петушенко Александр Иванович',
		position: 'инженер по обслуживанию оборудования',
		info: 'Краткая информация – Высшее образование по специальности инженер-технолог. Общий стаж работы с 1984 г. по специальностям: инженер-конструктор, инженер по эксплуатации. Профессиональная переподготовка по программе «Монтаж, техническое обслуживание и ремонт медицинской техники». Осуществляет различные виды ремонта симуляционного оборудования, а также принимает меры по улучшению их эксплуатации и обслуживания. Осуществляет проверку технического состояния оборудования.',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 1984,
	},
	{
		name: 'Двинянинов Иван Сергеевич',
		position: 'комендант',
		info: 'Краткая информация – Высшее образование по специальности «Землеустройство», инженер землеустроитель. Стаж работы с 1996 г. В центре работает с апреля 2022 г. Обеспечивает содержание зданий, а также относящихся к ним строений и окружающей территории в надлежащем порядке. Обеспечивает сохранность и содержание в исправном состоянии имущества ФАЦ. Член РОСОМЕД.',
		photo: '/nxptPzbzpDg.png',
		experiencestartDate: 1996,
	},
];
