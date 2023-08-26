import React, { FC } from 'react';
import style from './Imput.module.scss';

interface InputProps {
	label?: string | React.JSX.Element;
	value?: string;
	placeholder?: string;
	type?: string;
	required?: boolean;
	name?: string;
	chidren?: React.ReactNode;
	[key: string]: any;
}

export const Input: FC<InputProps> = ({
	value,
	onChange,
	placeholder = '',
	type,
	required = true,
	name,
	chidren,
}) => {
	return (
		<div className={style.inputContainer}>
			<input
				className={style.input}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				name={name}
			/>
			<label className={style.inputLabel} htmlFor={name}>
				{chidren}
			</label>
		</div>
	);
};
