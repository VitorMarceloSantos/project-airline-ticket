/* eslint-disable complexity */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
'use client';

import { useRef, useEffect, useContext } from 'react';
import { ProgressBarContext } from '../context';
// import { ProgressBarType } from '../types/ProgressBarType';

export default function ProgressBar() {
	// const slider = useRef<HTMLUListElement>(null);
	const progressBar = useRef<HTMLDivElement>(null);
	const { sliderContext } = useContext(ProgressBarContext);

	useEffect(() => {
		progressBar.current !== null && calculateProgressBar(progressBar.current);
	}, []);

	const calculateProgressBar = (progressBar: HTMLDivElement) => {
		progressBar.innerHTML = '';
		let itemCount = 0;
		let itemsPerScreen = 0;
		let sliderIndex = 0;
		if (sliderContext) {
			itemCount = sliderContext.children.length;
			itemsPerScreen = parseInt(getComputedStyle(sliderContext).getPropertyValue('--items-per-screen'));
			sliderIndex = parseInt(getComputedStyle(sliderContext).getPropertyValue('--slider-index'));
		}
		const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

		if (sliderIndex >= progressBarItemCount) {
			const value = progressBarItemCount - 1;
			sliderContext?.style.setProperty('--slider-index', String(value));
			sliderIndex = progressBarItemCount - 1;
		}

		for (let index = 0; index < progressBarItemCount; index += 1) {
			const barItem = document.createElement('div');
			barItem.classList.add('progress-item');
			if (index === sliderIndex) {
				barItem.classList.add('active');
			}
			progressBar.append(barItem);
		}
	};

	return (
		<>
			<div className='header'>
				<h3 className='title'>Title</h3>
				<div className='progress-bar' ref={progressBar}></div>
			</div>
		</>
	);
}
