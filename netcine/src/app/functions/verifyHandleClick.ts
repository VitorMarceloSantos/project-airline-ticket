import { VerifyHandleClickType } from '../types/CarouselMoviesTypes';
import { onHandleClick } from './onHandleClick';

export const verifyHandleClick = ({ values }: VerifyHandleClickType) => {
	const { directionButton, progressBar, slider } = values;
	if (progressBar.current !== null && slider.current !== null) {
		onHandleClick(directionButton, progressBar.current, slider.current);
	}
};
