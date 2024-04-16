import { verifyScrollBarAndCarouselViewType } from '@/app/types/components/CardTypes';

export const verifyScrollBarAndCarouselView = ({ values }: verifyScrollBarAndCarouselViewType) => {
	const { acessCardHover, cardBack, handleStateVideo, scrollWindow, setCardSelected, sizeWindow, cardFront } = values;
	const NUMBER_FIVE_HUNDRED = 550;
	const NUMBER_ONE_THOUSAND_NIVE_HUNDRED = 1900;

	if (acessCardHover === true) {
		if (sizeWindow > NUMBER_ONE_THOUSAND_NIVE_HUNDRED && scrollWindow < NUMBER_FIVE_HUNDRED) {
			handleStateVideo(true);
		}
		sizeWindow < NUMBER_ONE_THOUSAND_NIVE_HUNDRED && handleStateVideo(true);
		setCardSelected(false);
		cardFront!.style.opacity = '1';
		cardBack!.style.opacity = '0';
	}
};
