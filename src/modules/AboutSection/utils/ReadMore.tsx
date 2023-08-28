'use client';
import React, { useState } from 'react';
import style from '../AboutSection.module.scss';
import { Button } from '@/UI/exportUI';

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
				<Button onClick={toggleShowFullText} className={style.showButton}>
					{showFullText ? 'Свернуть' : 'Читать дальше..'}
				</Button>
			)}
		</>
	);
};
