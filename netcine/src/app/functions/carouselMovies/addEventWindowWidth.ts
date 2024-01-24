import { calculateProgressBar } from './calculateProgressBar';

const throttleProgressBar = async (): Promise<void> => {
	const progressBar = document.querySelector('.progress-bar-carousel') as HTMLDivElement;
	const slider = document.querySelector('.carousel-movies') as HTMLUListElement;

	calculateProgressBar(progressBar, slider);
};

export const addEventWindowWidth = () => {
	window.addEventListener('resize', () => throttleProgressBar());
};
