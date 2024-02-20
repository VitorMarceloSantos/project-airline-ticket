'use client';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CardBackBodyType, CastType } from '../types/components/CardBackBodyTypes';
import { useInformationsMoviesOrTVContext, useModalMoviesContext } from '../context';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { INITIAL_CAST } from '../constants/CardBackBody';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { CastDataType } from '../types/api/RequestAPI';
import { CardBackBodyInformations } from './CardBackBodyInformations';

export const CardBackBody = ({ values }: CardBackBodyType) => {
	const {
		genres,
		movie,
		languages: { english_name },
		type,
	} = values;
	const { handleStateChange } = useModalMoviesContext();
	const [castMovieOrTV, setCastMovieOrTV] = useState<CastType[]>(INITIAL_CAST);
	const { handleStateChangeInformationsMoviesOrTV, stateInformationsMoviesOrTV } = useInformationsMoviesOrTVContext();

	// Exportar função
	const getRequestCast = async () => {
		const url = `https://api.themoviedb.org/3/${type}/${movie.id}/credits?language=en-US`;
		if (castMovieOrTV === INITIAL_CAST) {
			const cast = (await RequestInformationsAPI<CastDataType>(url)).cast;
			const NUMBER_FOUR = 4;
			const newCast = cast.length > NUMBER_FOUR ? cast.slice(0, NUMBER_FOUR) : cast;
			setCastMovieOrTV(newCast);
			handleStateChangeInformationsMoviesOrTV({ ...stateInformationsMoviesOrTV, cast: newCast });
		}
	};
	return (
		<section className='carousel-card-back-body' onMouseEnter={() => getRequestCast()}>
			<section className='carousel-card-back-body-buttons'>
				<section>
					<IconButton
						className='
							carousel-card-back-body-buttons-btn carousel-card-back-body-buttons-btn-color'
						aria-label='button-play'
					>
						<PlayArrowIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</IconButton>
					<IconButton className='carousel-card-back-body-buttons-btn' aria-label='button-add'>
						<AddIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</IconButton>
					<IconButton className='carousel-card-back-body-buttons-btn' aria-label='button-like'>
						<ThumbUpOffAltIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</IconButton>
				</section>
				<IconButton
					className='carousel-card-back-body-buttons-btn'
					aria-label='button-arrow-down'
					onClick={() => handleStateChange(true)}
				>
					<KeyboardArrowDownIcon className='carousel-card-back-body-buttons-btn-text-color' />
				</IconButton>
			</section>
			<CardBackBodyInformations values={{ english_name, movie, type }} />
			<section className='carousel-card-back-body-informations-genres'>
				<ul>
					{genres.map((genre, index) => {
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
