'use client';

import { useRef, useState, useEffect } from 'react';
import Card from './Card';
import { MoviesDataType, ResultsType } from '../types/components/CarouselMoviesTypes';
import { addEventWindowWidth } from '../functions/carouselMovies/addEventWindowWidth';
import { calculateProgressBar } from '../functions/carouselMovies/calculateProgressBar';
// import 'animate.css';
import { verifyHandleClick } from '../functions/carouselMovies/verifyHandleClick';
import { ProgressBar } from './ProgressBar';
import useScript from '../hooks/UseScript';

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
		<section className='main-carousel'>
			<ProgressBar values={{ progressBar }} />
			<section className='carousel'>
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
					<span className='text'>&#8249;</span>
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
					<span className='text'>&#8250;</span>
				</button>
			</section>
		</section>
	);
}
