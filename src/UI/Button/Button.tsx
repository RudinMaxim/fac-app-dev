/* eslint-disable @next/next/no-img-element */
import style from './Button.module.scss';
export interface ButtonProps {
	children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
	return <button className={style.Button}>{children}</button>;
}
