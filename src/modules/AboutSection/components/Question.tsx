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

	const renderQuestions = () => {
		return question.map((q: QuestionProps, index: number) => (
			<li key={index}>
				<div className={style.title} onClick={() => toggleCollapse(index)}>
					{isOpen[index] ? <FaMinus size={'1rem'} /> : <FaPlus size={'1rem'} />}
					{q.question}
				</div>
				{isOpen[index] && <p className={style.answer}>{q.answer}</p>}
			</li>
		));
	};

	return (
		<div className={style.Question}>
			<h3>Часто задаваемые вопросы</h3>
			<ul>{renderQuestions()}</ul>
		</div>
	);
}
