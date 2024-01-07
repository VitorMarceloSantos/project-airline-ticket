'use client';

import { useRef, useState } from 'react';
import Card from './Card';
import { MoviesDataType } from '../types/CarouselMoviesTypes';
import { ResultsType } from '../types/TopMoviesTypes';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CarouselMovies({ moviesData }: MoviesDataType) {
	const [movies] = useState<ResultsType[]>(moviesData);
	const carousel = useRef<HTMLUListElement>(null);

	const handleLeftClick = () => {
		carousel.current !== null && (carousel.current.scrollLeft -= carousel.current.offsetWidth);
	};

	const handleRightClick = () => {
		carousel.current !== null && (carousel.current.scrollLeft += carousel.current.offsetWidth);
	};

	return (
		<div className='carousel'>
			<ArrowBackIosIcon onClick={handleLeftClick} className='carousel-buttons' />
			<ul className='carousel-movies' ref={carousel}>
				{movies.map((movie, index) => {
					return (
						<li className='carousel-item' key={index}>
							<Card movie={movie} />
						</li>
					);
				})}
			</ul>
			<ArrowForwardIosIcon onClick={handleRightClick} className='carousel-buttons' />
		</div>
	);
}
