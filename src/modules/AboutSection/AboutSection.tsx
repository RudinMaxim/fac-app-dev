import style from './AboutSection.module.scss';
import Possibilities from './components/Possibilities';
import CompanyHistory from './components/CompanyHistory';
import Employees from './components/Employees';

export default function AboutSection(): React.JSX.Element {
	return (
		<div className='container'>
			<section className={style.AboutSection}>
				<h2>Аккредитация</h2>
				<p>
					ФАЦ оснащен медицинским оборудованием и инструментами, комплексом
					специализированных тренажеров, роботов-симуляторов,
					манекенов-имитаторов, электронных фантомов, моделей-муляжей и т.д.
				</p>
				<p>
					Практическая подготовка осуществляется без риска для пациентов и
					обучающихся в виртуальной среде или имитированной ситуации. Именно
					данный вид подготовки специалистов является наиболее перспективным,
					что обусловлено его возможностями:
				</p>
				<Possibilities />
				<CompanyHistory />
				<Employees />
			</section>
		</div>
	);
}
