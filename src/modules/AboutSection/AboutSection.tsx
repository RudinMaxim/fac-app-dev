import style from './AboutSection.module.scss';
import Possibilities from './components/Possibilities';
import CompanyHistory from './components/CompanyHistory';
import Employees from './components/Employees';

export default function AboutSection(): React.JSX.Element {
	return (
		<div className='container'>
			<section className={style.AboutSection}>
				<div className={style.main}>
					<h2>О Федеральный аккредитационный центр</h2>
					<p className={style.text}>
						ФАЦ оснащен медицинским оборудованием и инструментами, комплексом
						специализированных тренажеров, роботов-симуляторов,
						манекенов-имитаторов, электронных фантомов, моделей-муляжей и т.д.
						ФАЦ со структурным подразделением МАСЦ принимает активное участие в
						организации мероприятий для школьников и студентов, олимпиад,
						конкурсов практических навыков для студентов медицинских
						университетов, медицинских и немедицинских работников. С 2017 года
						проводятся профориентационные занятия по базовым медицинским навыкам
						для школьников города Перми и Пермского края.
					</p>
				</div>

				<Possibilities />
				<CompanyHistory />
				<Employees />
			</section>
		</div>
	);
}
