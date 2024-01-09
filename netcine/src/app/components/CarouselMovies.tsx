/* eslint-disable complexity */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
'use client';

import { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { MoviesDataType } from '../types/CarouselMoviesTypes';
import { ResultsType } from '../types/TopMoviesTypes';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CarouselMovies({ moviesData }: MoviesDataType) {
	const [movies] = useState<ResultsType[]>(moviesData);
	// const carousel = useRef<HTMLUListElement>(null);
	const progressBar = useRef<HTMLDivElement>(null);
	const slider = useRef<HTMLUListElement>(null);

	// const handleLeftClick = () => {
	// 	carousel.current !== null && (carousel.current.scrollLeft -= carousel.current.offsetWidth);
	// };

	// const handleRightClick = () => {
	// 	carousel.current !== null && (carousel.current.scrollLeft += carousel.current.offsetWidth);
	// };

	const defaultDelaty = 1000;
	const delay = 250;

	// Criar a paginação
	useEffect(() => {
		progressBar.current !== null && calculateProgressBar(progressBar.current);
	}, []);

	// const throttle = (cb: () => void, delay = defaultDelaty) => {
	// 	let shouldWait = false;
	// 	let waitingArgs;
	// 	const timeoutFunc = () => {
	// 		if (waitingArgs == null) {
	// 			shouldWait = false;
	// 		} else {
	// 			cb(...waitingArgs);
	// 			waitingArgs = null;
	// 			setTimeout(timeoutFunc, delay);
	// 		}
	// 	};

	// 	return (...args) => {
	// 		if (shouldWait) {
	// 			waitingArgs = args;
	// 			return;
	// 		}

	// 		cb(...args);
	// 		shouldWait = true;
	// 		setTimeout(timeoutFunc, delay);
	// 	};
	// };

	// const throttleProgressBar = throttle(() => {
	// 	// progressBar.current !== null && progressBar.current.forEach(calculateProgressBar);
	// 	calculateProgressBar;
	// }, delay);

	// window.addEventListener('resize', throttleProgressBar);

	// Corrigida
	const calculateProgressBar = (progressBar: HTMLDivElement) => {
		console.log(
			`itens tela: ${parseInt(getComputedStyle(slider.current).getPropertyValue('--items-per-screen'))}`,
		);
		progressBar.innerHTML = '';
		let itemCount = 0;
		let itemsPerScreen = 0;
		let sliderIndex = 0;
		if (slider.current) {
			itemCount = slider.current.children.length;
			itemsPerScreen = parseInt(getComputedStyle(slider.current).getPropertyValue('--items-per-screen'));
			sliderIndex = parseInt(getComputedStyle(slider.current).getPropertyValue('--slider-index'));
		}
		const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

		if (sliderIndex >= progressBarItemCount) {
			const value = progressBarItemCount - 1;
			slider.current?.style.setProperty('--slider-index', String(value));
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

	// Corrigida
	const onHandleClick = (directionButton: string) => {
		const sliderIndex = (slider.current !== null &&
			parseInt(getComputedStyle(slider.current).getPropertyValue('--slider-index'))) as number;
		const progressBarItemCount = progressBar.current?.children.length as number;
		if (directionButton === 'button-left') {
			if (sliderIndex - 1 < 0) {
				const value = progressBarItemCount - 1;
				slider.current?.style.setProperty('--slider-index', String(value));
				progressBar.current?.children[sliderIndex].classList.remove('active');
				progressBar.current?.children[progressBarItemCount - 1].classList.add('active');
			} else {
				const value = sliderIndex - 1;
				slider.current?.style.setProperty('--slider-index', String(value));
				progressBar.current?.children[sliderIndex].classList.remove('active');
				progressBar.current?.children[sliderIndex - 1].classList.add('active');
			}
		}

		if (directionButton === 'button-right') {
			if (sliderIndex + 1 >= progressBarItemCount) {
				slider.current?.style.setProperty('--slider-index', '0');
				progressBar.current?.children[sliderIndex].classList.remove('active');
				progressBar.current?.children[0].classList.add('active');
			} else {
				const value = sliderIndex + 1;
				slider.current?.style.setProperty('--slider-index', String(value));
				progressBar.current?.children[sliderIndex].classList.remove('active');
				progressBar.current?.children[sliderIndex + 1].classList.add('active');
			}
		}
	};

	return (
		<>
			<div className='header'>
				<h3 className='title'>Title</h3>
				<div className='progress-bar' ref={progressBar}></div>
			</div>
			<div className='carousel'>
				{/* <ArrowBackIosIcon
					onClick={() => onHandleClick('button-left')}
					className='carousel-buttons button-left'
				/> */}
				<button onClick={() => onHandleClick('button-left')} className='carousel-buttons button-left'>
					<div className='text'>&#8249;</div>
				</button>
				<ul className='carousel-movies' ref={slider}>
					{movies.map((movie, index) => {
						return (
							<li className='carousel-item' key={index}>
								<Card movie={movie} />
							</li>
						);
					})}
				</ul>
				{/* <ArrowForwardIosIcon
					onClick={() => onHandleClick('button-right')}
					className='carousel-buttons button-right'
				/> */}
				<button onClick={() => onHandleClick('button-right')} className='carousel-buttons button-right'>
					<div className='text'>&#8250;</div>
				</button>
			</div>
		</>
	);
}
