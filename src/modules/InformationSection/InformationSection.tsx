import style from './InformationSection.module.scss';

export default function InformationSection(): React.JSX.Element {
	return (
		<div className='container'>
			<section className={style.Information}>
				<h1>Информация</h1>
			</section>
		</div>
	);
}
