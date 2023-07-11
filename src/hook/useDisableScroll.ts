import { useEffect } from 'react';

const useDisableScroll = (isActive: boolean) => {
	useEffect(() => {
		const handleScroll = (event: Event) => {
			if (isActive) {
				event.preventDefault();
			}
		};

		const handleWindowResize = () => {
			if (isActive) {
				document.documentElement.style.overflow = 'hidden';
			} else {
				document.documentElement.style.overflow = 'auto';
			}
		};

		if (isActive) {
			document.addEventListener('scroll', handleScroll, { passive: false });
			window.addEventListener('resize', handleWindowResize);
		}

		return () => {
			document.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleWindowResize);
			document.documentElement.style.overflow = 'auto';
		};
	}, [isActive]);
};

export default useDisableScroll;
