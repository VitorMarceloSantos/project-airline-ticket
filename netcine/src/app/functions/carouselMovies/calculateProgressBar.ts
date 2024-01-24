export const calculateProgressBar = (progressBar: HTMLDivElement, slider: HTMLUListElement): void => {
	progressBar.innerHTML = '';
	let itemCount = 0;
	let itemsPerScreen = 0;
	let sliderIndex = 0;
	if (slider) {
		itemCount = slider.children.length;
		itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue('--items-per-screen'));
		sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));
	}
	const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

	if (sliderIndex >= progressBarItemCount) {
		const value = progressBarItemCount - 1;
		slider?.style.setProperty('--slider-index', String(value));
		sliderIndex = progressBarItemCount - 1;
	}

	for (let index = 0; index < progressBarItemCount; index += 1) {
		const barItem = document.createElement('div');
		barItem.classList.add('progress-bar-item');
		if (index === sliderIndex) {
			barItem.classList.add('progress-bar-active');
		}
		progressBar.append(barItem);
	}
};
