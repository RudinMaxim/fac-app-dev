'use client';
import React, { useState } from 'react';
import style from '../AboutSection.module.scss';
import { question } from '../data';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface QuestionProps {
	question: string;
	answer: string;
}

export default function Question(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState<boolean[]>(
		Array(question.length).fill(false)
	);

	const toggleCollapse = (index: number) => {
		setIsOpen((prev) => {
			const newState = [...prev];
			newState[index] = !newState[index];
			return newState;
		});
	};

	return (
		<div className={style.Question}>
			<h3>Часто задаваемые вопросы</h3>
			<ul>
				{question.map((question: QuestionProps, index: number) => (
					<li key={index}>
						<div className={style.title} onClick={() => toggleCollapse(index)}>
							<span>{isOpen[index] ? <FaMinus /> : <FaPlus />}</span>
							{question.question}
						</div>
						{isOpen[index] && <p className={style.answer}>{question.answer}</p>}
					</li>
				))}
			</ul>
		</div>
	);
}
