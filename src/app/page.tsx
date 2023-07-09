import AboutSection from '@/modules/AboutSection/AboutSection';
import StartingSection from '@/modules/StartingSection/StartingSection';
import ContactSection from '@/modules/ContactSection/ContactSection';
export default function Home(): React.JSX.Element {
	return (
		<>
			<main>
				<StartingSection />
				<AboutSection />
				<ContactSection />
			</main>
		</>
	);
}
