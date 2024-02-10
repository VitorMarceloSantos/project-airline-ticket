'use client';

import { useRef, useState, useEffect } from 'react';
import Card from './Card';
import { MoviesDataType, ResultsType } from '../types/components/CarouselMoviesTypes';
import { addEventWindowWidth } from '../functions/carouselMovies/addEventWindowWidth';
import { calculateProgressBar } from '../functions/carouselMovies/calculateProgressBar';
// import 'animate.css';
import { verifyHandleClick } from '../functions/carouselMovies/verifyHandleClick';
import { ProgressBar } from './ProgressBar';
import { PeopleType } from '../types/components/PeopleType';
import { SelectCardMoviesOrTv } from './SelectCardMoviesOrTv';
import { SelectCardPeoples } from './SelectCardPeoples';

export const CarouselMovies = ({ values }: MoviesDataType) => {
	const { moviesData, type, title } = values;

	const [movies] = useState(moviesData);
	const progressBar = useRef<HTMLDivElement>(null);
	const slider = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (progressBar.current !== null && slider.current !== null)
			calculateProgressBar(progressBar.current, slider.current);
		addEventWindowWidth();
	}, []);

	return (
		<section className='main-carousel'>
			<ProgressBar values={{ progressBar, title }} />
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
				{type === 'peoples' ? (
					<SelectCardPeoples values={{ slider, movies, type }} />
				) : (
					<SelectCardMoviesOrTv values={{ slider, movies, type }} />
				)}
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
};
