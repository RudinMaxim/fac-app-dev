import style from './AboutSection.module.scss';
import CompanyHistory from './components/CompanyHistory';
import Employees from './components/Employees';
import Possibilities from './components/Possibilities';
import Question from './components/Question';

export default function AboutSection(): React.JSX.Element {
	return (
		<>
			<section className={style.AboutSection}>
				<div className='container'>
					<h2>О нас</h2>
					<div className={style.main}>
						<p className={style.text}>
							ФАЦ оснащен медицинским оборудованием и инструментами, комплексом
							специализированных тренажеров, роботов-симуляторов,
							манекенов-имитаторов, электронных фантомов, моделей-муляжей и т.д.
							ФАЦ со структурным подразделением МАСЦ принимает активное участие
							в организации мероприятий для школьников и студентов, олимпиад,
							конкурсов практических навыков для студентов медицинских
							университетов, медицинских и немедицинских работников. С 2017 года
							проводятся профориентационные занятия по базовым медицинским
							навыкам для школьников города Перми и Пермского края.
						</p>
					</div>
					<Possibilities />
				</div>

				<CompanyHistory />
				<Employees />
				<Question />
			</section>
		</>
	);
}
