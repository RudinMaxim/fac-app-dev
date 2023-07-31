import { useEffect } from 'react';

function useScrollLock(isLocked: boolean) {
	useEffect(() => {
		const handleScroll = (event: Event) => {
			if (isLocked) {
				event.preventDefault();
				event.stopPropagation();
			}
		};

		if (isLocked) {
			window.addEventListener('scroll', handleScroll, {
				passive: false,
			});
		} else {
			window.removeEventListener('scroll', handleScroll);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isLocked]);
}

export default useScrollLock;
