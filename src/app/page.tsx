import AboutSection from '@/modules/AboutSection/AboutSection';
import StartingSection from '@/modules/StartingSection/StartingSection';
import ContactSection from '@/modules/ContactSection/ContactSection';
import Loading from '@/components/Loading/Loading';

export default function Home(): React.JSX.Element {
	return (
		<main>
			<StartingSection />
			<AboutSection />
			<ContactSection />
		</main>
	);
}
