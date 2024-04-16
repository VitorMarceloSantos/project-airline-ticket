'use client';

import { CardBackBodyType, CastType } from '@/app/types/components/CardBackBodyTypes';
import { useInformationsMoviesOrTVContext } from '@/app/context';
import { CardBackBodyInformations } from './CardBackBodyInformations';
import { GetRequestCast } from '@/app/functions/card/GetRequestCast';
import { useState } from 'react';
import { INITIAL_CAST } from '@/app/constants/CardBackBody';
import { sliceGenres } from '../functions/cardBackBody/sliceGenres';
import { CarouselCardBackBodyButtons } from './CarouselCardBackBodyButtons';

export const CardBackBody = ({ values }: CardBackBodyType) => {
	const {
		genres,
		movie,
		languages: { english_name },
		type,
	} = values;

	const [castMovieOrTV, setCastMovieOrTV] = useState<CastType[]>(INITIAL_CAST);
	const { handleStateChangeInformationsMoviesOrTV, stateInformationsMoviesOrTV } = useInformationsMoviesOrTVContext();

	return (
		<section
			className='carousel-card-back-body'
			onMouseEnter={() =>
				GetRequestCast({
					values: {
						type,
						movieId: movie.id,
						castMovieOrTV,
						setCastMovieOrTV,
						handleStateChangeInformationsMoviesOrTV,
						stateInformationsMoviesOrTV,
					},
				})
			}
		>
			<CarouselCardBackBodyButtons values={{ ...values }} />
			<CardBackBodyInformations values={{ english_name, movie, type }} />
			<section className='carousel-card-back-body-informations-genres'>
				<ul>
					{sliceGenres(genres).map((genre, index) => {
						return (
							<li className='carousel-card-back-body-informations-genres-li' key={index}>
								<p>{genre.name}&nbsp;</p>
							</li>
						);
					})}
				</ul>
			</section>
		</section>
	);
};
