import { useWindowSize } from './useWindowSize';

const getPrefix = (width) =>
	width >= 1440 ? 'l_' : width >= 1024 ? 't_' : 'm_';

export const useDeviceWidthPrefix = (props) => {
	const { width } = useWindowSize();
	return getPrefix(width);
};
