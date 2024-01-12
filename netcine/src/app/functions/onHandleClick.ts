export const onHandleClick = (directionButton: string, progressBar: HTMLDivElement, slider: HTMLUListElement) => {
	const sliderIndex = (slider !== null &&
		parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))) as number;
	const progressBarItemCount = progressBar?.children.length as number;
	if (directionButton === 'button-left') {
		if (sliderIndex - 1 < 0) {
			const value = progressBarItemCount - 1;
			slider.style.setProperty('--slider-index', String(value));
			progressBar?.children[sliderIndex].classList.remove('progress-bar-active');
			progressBar?.children[progressBarItemCount - 1].classList.add('progress-bar-active');
		} else {
			const value = sliderIndex - 1;
			slider?.style.setProperty('--slider-index', String(value));
			progressBar?.children[sliderIndex].classList.remove('progress-bar-active');
			progressBar?.children[sliderIndex - 1].classList.add('progress-bar-active');
		}
	}

	if (directionButton === 'button-right') {
		if (sliderIndex + 1 >= progressBarItemCount) {
			slider?.style.setProperty('--slider-index', '0');
			progressBar?.children[sliderIndex].classList.remove('progress-bar-active');
			progressBar?.children[0].classList.add('progress-bar-active');
		} else {
			const value = sliderIndex + 1;
			slider?.style.setProperty('--slider-index', String(value));
			progressBar?.children[sliderIndex].classList.remove('progress-bar-active');
			progressBar?.children[sliderIndex + 1].classList.add('progress-bar-active');
		}
	}
};
