import React, { useState } from 'react';
import style from '../AboutSection/AboutSection.module.scss';
interface Props {
	text: string;
	maxLength: number;
}

export const ReadMore: React.FC<Props> = ({ text, maxLength }) => {
	const [showFullText, setShowFullText] = useState(false);

	const toggleShowFullText = () => {
		setShowFullText(!showFullText);
	};

	const displayText = showFullText ? text : `${text.slice(0, maxLength)}...`;

	return (
		<>
			<p className={style.info}>{displayText}</p>
			{text.length > maxLength && (
				<button
					type='button'
					onClick={toggleShowFullText}
					className={style.showButton}>
					{showFullText ? 'Свернуть' : 'Читать дальше'}
				</button>
			)}
		</>
	);
};
