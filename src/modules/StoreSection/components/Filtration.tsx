import React from 'react';
import style from '../Store.module.scss';
import { Input } from '@/UI/exportUI';
interface Ifiltration {
	value: string;
	onChange: (value: string) => void;
}

export default function Filtration({ value, onChange }: Ifiltration) {
	type ChangeType = React.ChangeEvent<HTMLInputElement>;

	const handleInputChange = (event: ChangeType) => {
		onChange(event.target.value);
	};

	return (
		<div className={style.Filtration}>
			<Input
				value={value}
				onChange={handleInputChange}
				label={'Поиск'}
				placeholder={'Поиск...'}
				type={'text'}
				name={'SerchSale'}
			/>
		</div>
	);
}
