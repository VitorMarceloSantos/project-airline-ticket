import { VerifyHandleClickType } from '@/app/types/components/CarouselMoviesTypes';
import { onHandleClick } from './onHandleClick';

export const verifyHandleClick = ({ values }: VerifyHandleClickType): void => {
	const { directionButton, progressBar, slider } = values;
	if (progressBar.current !== null && slider.current !== null) {
		onHandleClick(directionButton, progressBar.current, slider.current);
	}
};
