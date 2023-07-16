import style from './Button.module.scss';
export interface ButtonProps {
	children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
	return <Button className={style.Button}>{children}</Button>;
}
