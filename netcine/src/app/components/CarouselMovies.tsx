'use client';

import { useRef, useState, useEffect } from 'react';
import { MoviesDataType } from '@/app/types/components/CarouselMoviesTypes';
import { addEventWindowWidth, addEventScrollNavBar } from '@/app/functions/carouselMovies/addEventWindowWidth';
import { calculateProgressBar } from '@/app/functions/carouselMovies/calculateProgressBar';
import { verifyHandleClick } from '@/app/functions/carouselMovies/verifyHandleClick';
import { ProgressBar } from './ProgressBar';
import { SelectCardMoviesOrTv } from './SelectCardMoviesOrTv';
import { SelectCardPeoples } from './SelectCardPeoples';
import { usePlayerVideo } from '../context';

export const CarouselMovies = ({ values }: MoviesDataType) => {
	const { resultData, type, title } = values;
	const [movies] = useState(resultData);
	const progressBar = useRef<HTMLDivElement>(null);
	const slider = useRef<HTMLUListElement>(null);
	const { handleStateVideo } = usePlayerVideo();

	useEffect(() => {
		addEventScrollNavBar(handleStateVideo);
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
					<SelectCardMoviesOrTv values={{ slider, movies, type, title }} />
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
