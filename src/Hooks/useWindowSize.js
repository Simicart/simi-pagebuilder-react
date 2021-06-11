import { useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([
				Math.max(
					document.documentElement.clientWidth || 0,
					window.innerWidth || 0,
				),
				window.innerHeight,
			]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
};
