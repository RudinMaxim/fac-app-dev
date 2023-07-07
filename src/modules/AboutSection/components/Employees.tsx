import React from 'react';
import { employees } from '../data';

export default function Employees(): React.JSX.Element {
	return (
		<div>
			{employees.map((employee) => (
				<>
					<h4>
						{employee.name} - {employee.position}
					</h4>
					<p>{employee.info}</p>
				</>
			))}
		</div>
	);
}
