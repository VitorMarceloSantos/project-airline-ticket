import { verifyScrollBarAndCarouselViewType } from '@/app/types/components/CardTypes';

export const verifyScrollBarAndCarouselView = ({ values }: verifyScrollBarAndCarouselViewType) => {
	const { acessCardHover, cardBack, handleStateVideo, scrollWindow, setCardSelected, sizeWindow, cardFront } = values;
	if (acessCardHover === true) {
		if (sizeWindow > 1900 && scrollWindow < 550) {
			handleStateVideo(true);
		}
		sizeWindow < 1900 && handleStateVideo(true);
		setCardSelected(false);
		cardFront!.style.opacity = '1';
		cardBack!.style.opacity = '0';
	}
};
