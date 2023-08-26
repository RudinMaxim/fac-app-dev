import style from './Button.module.scss';
interface IButton {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	value?: string | string[];
	disabled?: boolean;
	tabIndex?: number;
	shape?: 'circle' | 'square';
	[key: string]: any;
}

export function Button({
	children,
	type = 'button',
	value,
	disabled = false,
	tabIndex = 0,
	shape = 'square',
	...rest
}: IButton): React.JSX.Element {
	const buttonClass =
		shape === 'circle' ? style.CircleButton : style.SquareButton;
	return (
		<button
			className={`${style.Button} ${buttonClass}`}
			type={type}
			value={value}
			disabled={disabled}
			tabIndex={tabIndex}
			{...rest}>
			{children}
		</button>
	);
}
