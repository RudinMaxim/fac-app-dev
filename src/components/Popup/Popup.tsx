import React from 'react';
import './Popup.scss';
import { FaRegWindowClose } from 'react-icons/fa';

interface PopupWindowProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const PopupWindow: React.FC<PopupWindowProps> = ({
	isOpen,
	onClose,
	children,
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
				{children}
				<button className='close-button' onClick={onClose}>
					<FaRegWindowClose />
				</button>
			</div>
		</div>
	);
};

export default PopupWindow;
