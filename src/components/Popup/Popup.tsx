import React from 'react';
import style from './Popup.module.scss';
import { FaTimes } from 'react-icons/fa';

interface PopupWindowProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title?: string;
}

const PopupWindow: React.FC<PopupWindowProps> = ({
	isOpen,
	onClose,
	children,
	title,
}): React.JSX.Element => {
	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};
	return (
		<div
			className={`${style.popup_window} ${isOpen ? style.open : ''}`}
			onClick={handleClick}>
			<div className={style.popup_content}>
				<div className={style.topBar}>
					<h3>{title}</h3>
					<button className={style.close_button} onClick={onClose}>
						<FaTimes size={25} />
					</button>
				</div>
				{children}
			</div>
		</div>
	);
};

export default PopupWindow;
