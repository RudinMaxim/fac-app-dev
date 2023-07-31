import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import {
	StartingSection,
	AboutSection,
	ContactSection,
} from '../modules/exportModules';

export default function Home(): React.JSX.Element {
	return (
		<main>
			<StartingSection />
			<AboutSection />
			<ContactSection />
		</main>
	);
}
