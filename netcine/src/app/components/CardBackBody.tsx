'use client';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CardBackBodyType, CastType } from '../types/components/CardBackBodyTypes';
import { useInformationsMoviesOrTVContext, useModalOpenCloseContext } from '../context';
import { IconButton } from '@mui/material';
import { CardBackBodyInformations } from './CardBackBodyInformations';
import { GetRequestCast } from '../functions/card/GetRequestCast';
import { useState } from 'react';
import { INITIAL_CAST } from '../constants/CardBackBody';

export const CardBackBody = ({ values }: CardBackBodyType) => {
	const {
		genres,
		movie,
		languages: { english_name },
		type,
	} = values;
	const { handleModalOpenClose } = useModalOpenCloseContext();
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
					onClick={() => handleModalOpenClose(true)}
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
