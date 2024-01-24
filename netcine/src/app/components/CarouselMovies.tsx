'use client';
import { useRef, useState, useEffect } from 'react';
import Card from './Card';
import { MoviesDataType } from '../types/CarouselMoviesTypes';
import { ResultsType } from '../types/TopMoviesTypes';
import { addEventWindowWidth } from '../functions/addEventWindowWidth';
import { calculateProgressBar } from '../functions/calculateProgressBar';
import 'animate.css';
import { verifyHandleClick } from '../functions/verifyHandleClick';
import { ProgressBar } from './ProgressBar';

export default function CarouselMovies({ moviesData }: MoviesDataType) {
	const [movies] = useState<ResultsType[]>(moviesData);
	const progressBar = useRef<HTMLDivElement>(null);
	const slider = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (progressBar.current !== null && slider.current !== null)
			calculateProgressBar(progressBar.current, slider.current);
		addEventWindowWidth();
	}, []);

	return (
		<div className='main-carousel'>
			<ProgressBar values={{ progressBar }} />
			<div className='carousel'>
				<button
					onClick={() => {
						verifyHandleClick({
							values: {
								directionButton: 'button-left',
								progressBar,
								slider,
							},
						});
					}}
					className='carousel-buttons button-left'
				>
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
				<button
					onClick={() => {
						verifyHandleClick({
							values: {
								directionButton: 'button-right',
								progressBar,
								slider,
							},
						});
					}}
					className='carousel-buttons button-right'
				>
					<div className='text'>&#8250;</div>
				</button>
			</div>
		</div>
	);
}
