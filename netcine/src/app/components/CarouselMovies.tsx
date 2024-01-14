'use client';

import { useRef, useState, useEffect } from 'react';
import Card from './Card';
import { MoviesDataType } from '../types/CarouselMoviesTypes';
import { ResultsType } from '../types/TopMoviesTypes';
import { addEventWindowWidth } from '../functions/addEventWindowWidth';
import { calculateProgressBar } from '../functions/calculateProgressBar';
import { onHandleClick } from '../functions/onHandleClick';
import 'animate.css';

// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CarouselMovies({ moviesData }: MoviesDataType) {
	const [movies] = useState<ResultsType[]>(moviesData);
	const progressBar = useRef<HTMLDivElement>(null);
	const slider = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (progressBar.current !== null && slider.current !== null)
			calculateProgressBar(progressBar.current, slider.current);
		addEventWindowWidth();
	}, []);

	const verifyHandleClick = (directionButton: string) => {
		if (progressBar.current !== null && slider.current !== null) {
			onHandleClick(directionButton, progressBar.current, slider.current);
		}
	};

	return (
		<div className='main-carousel'>
			<div className='progress-bar'>
				<div className='progress-bar-title-container'>
					<h3 className='progress-bar-title'>Top Movies</h3>
					<h3 className='progress-bar-link-1'>&gt;</h3>
					<h3 className='progress-bar-link-2 animate__animated animate__fadeInLeft'>Ver tudo &gt;</h3>
				</div>
				<div className='progress-bar-carousel' ref={progressBar}></div>
			</div>
			<div className='carousel'>
				{/* <ArrowBackIosIcon
					onClick={() => onHandleClick('button-left')}
					className='carousel-buttons button-left'
				/> */}
				<button onClick={() => verifyHandleClick('button-left')} className='carousel-buttons button-left'>
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
					onClick={() => verifyHandleClick('button-right')}
					className='carousel-buttons button-right'
				/> */}
				<button onClick={() => verifyHandleClick('button-right')} className='carousel-buttons button-right'>
					<div className='text'>&#8250;</div>
				</button>
			</div>
		</div>
	);
}
