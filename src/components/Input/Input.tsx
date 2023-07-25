import React, { FC, ChangeEvent } from 'react';
import style from './Input.module.scss';
import { FaSistrix } from 'react-icons/fa';
FaSistrix;
interface InputProps {
	label: string | React.JSX.Element;
	value: string;
	onChange: () => void;
	placeholder?: string;
	type?: string;
	required?: boolean;
	name?: string;
}

const Input: FC<InputProps> = ({
	label,
	value,
	onChange,
	placeholder = '',
	type,
	required = true,
	name,
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
				<FaSistrix />
			</label>
		</div>
	);
};

export default Input;
