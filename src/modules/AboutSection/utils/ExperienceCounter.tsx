'use client';
import React from 'react';
import style from '../AboutSection.module.scss';

interface ExperienceCounterProps {
	startYear: number; // год начала работы
}
interface ExperienceCounterState {
	currentYear: number; // текущий год
}

class ExperienceCounter extends React.Component<
	ExperienceCounterProps,
	ExperienceCounterState
> {
	constructor(props: ExperienceCounterProps) {
		super(props);
		this.state = {
			currentYear: new Date().getFullYear(),
		};
	}

	calculateExperience(): number {
		const { startYear } = this.props;
		return this.state.currentYear - startYear;
	}
	ending(number: number): string {
		let result =
			number % 10 === 1 && number % 100 !== 11
				? 'год'
				: number % 10 >= 2 &&
				  number % 10 <= 4 &&
				  (number % 100 < 10 || number % 100 >= 20)
				? 'года'
				: 'лет';

		return result;
	}

	render() {
		const experience = this.calculateExperience();
		const ending = this.ending(experience);

		return (
			<div className={style.experience}>
				Стаж: <br />{' '}
				<span>
					{experience} {ending}
				</span>
			</div>
		);
	}
}
export { ExperienceCounter };
