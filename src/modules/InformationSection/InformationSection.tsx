import style from './InformationSection.module.scss';
import PostList from './components/PostList';

export default function InformationSection(): React.JSX.Element {
	return (
		<div className='container'>
			<section className={style.Information}>
				<h1>Информация</h1>
				<PostList />
			</section>
		</div>
	);
}
