import { Dispatch, SetStateAction } from 'react';
import { calculateProgressBar } from './calculateProgressBar';

const throttleProgressBar = async (): Promise<void> => {
	const progressBar = document.querySelector('.progress-bar-carousel') as HTMLDivElement;
	const slider = document.querySelector('.carousel-movies') as HTMLUListElement;
	calculateProgressBar(progressBar, slider);
};

export const addEventWindowWidth = (): void => {
	window.addEventListener('resize', () => throttleProgressBar());
};

export const addEventScrollNavBar = (handleStateVideo: (newValue: boolean) => void): void => {
	const NUMBER_FIVE_HUNDRED_FIFTY = 550;
	window.addEventListener('scroll', () => {
		const header = document.querySelector('.navbar');
		header?.classList.toggle('navbar-roll', window.scrollY > 0);

		// Vai funcionar somente quando tiver barra de rolagem
		window.scrollY > NUMBER_FIVE_HUNDRED_FIFTY ? handleStateVideo(false) : handleStateVideo(true);
	});
};

export const verifySizeWindow = (
	setSizeWindow: Dispatch<SetStateAction<number>>,
	setScrollWindow: Dispatch<SetStateAction<number>>,
): void => {
	setSizeWindow(window.innerWidth);

	window.addEventListener('resize', () => {
		setSizeWindow(window.innerWidth);
	});

	window.addEventListener('scroll', () => {
		setScrollWindow(window.scrollY);
	});
};
