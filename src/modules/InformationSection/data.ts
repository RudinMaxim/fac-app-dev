interface Information {
	title?: string;
	description?: string;
	date?: Date | number;
	url?: string;
	doc?: [
		{
			docTitle: string;
			url: string;
			type: string;
			fileSize?: {
				Size: number;
				type: 'КБ' | 'МБ' | 'ГБ' | 'ТБ';
			};
		}
	];
}

export const Information: Information[] = [{}];
