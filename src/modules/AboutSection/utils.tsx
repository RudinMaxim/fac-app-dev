'use client';
import React from 'react';

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

	render() {
		const experience = this.calculateExperience();

		return <span>Стаж: {experience} лет</span>;
	}
}

export { ExperienceCounter };
