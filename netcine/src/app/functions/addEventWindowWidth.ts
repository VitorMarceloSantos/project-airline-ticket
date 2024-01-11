import { calculateProgressBar } from './calculateProgressBar';

const throttleProgressBar = async () => {
	const progressBar = document.querySelector('.progress-bar') as HTMLDivElement;
	const slider = document.querySelector('.carousel-movies') as HTMLUListElement;

	calculateProgressBar(progressBar, slider);
};

export const addEventWindowWidth = () => {
	window.addEventListener('resize', () => throttleProgressBar());
};
