import style from './StartingSection.module.scss';

export default function StartingSection(): React.JSX.Element {
	return (
		<div className='container'>
			<section className={style.StartingSection}>
				<div className={style.column}>
					<h1>Федеральный аккредитационный центр при ПГМУ</h1>
					<p>
						Центр, в котором МОЖНО и НУЖНО практиковать медицинские навыки для
						прохождения аккредитации и дальнейшей врачебной практики.
					</p>
				</div>
			</section>
		</div>
	);
}
