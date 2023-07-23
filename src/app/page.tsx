import {
	StartingSection,
	AboutSection,
	ContactSection,
} from '../modules/MainPage/export';

export default function Home(): React.JSX.Element {
	return (
		<main>
			<StartingSection />
			<AboutSection />
			<ContactSection />
		</main>
	);
}
