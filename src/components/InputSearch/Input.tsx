import React from 'react';
import './Popup.scss';
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
}) => {
	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};
	return (
		<div
			className={`popup-window ${isOpen ? 'open' : ''}`}
			onClick={handleClick}>
			<div className='popup-content'>
				<div className='topBar'>
					<h3>{title}</h3>
					<button className='close-button' onClick={onClose}>
						<FaTimes size={25} />
					</button>
				</div>
				{children}
			</div>
		</div>
	);
};

export default PopupWindow;
