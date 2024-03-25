'use client';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import { CardBackBodyType, CastType } from '@/app/types/components/CardBackBodyTypes';
import {
	useInformationsMoviesOrTVContext,
	useModalOpenCloseContext,
	useMovieOrTVAddedContext,
	useMovieOrTvLikedContext,
} from '@/app/context';
import { IconButton } from '@mui/material';
import { CardBackBodyInformations } from './CardBackBodyInformations';
import { GetRequestCast } from '@/app/functions/card/GetRequestCast';
import { useState } from 'react';
import { INITIAL_CAST } from '@/app/constants/CardBackBody';
import { verifyMovieAddedOrLiked } from '../functions/card/verifyMovieAddedOrLiked';
import { useRouter } from 'next/navigation';

export const CardBackBody = ({ values }: CardBackBodyType) => {
	const getIdMovieURL = (url: string) => {
		return url.split('embed/')[1].split('?rel')[0];
	};
	const {
		genres,
		movie,
		languages: { english_name },
		type,
		urlMovie,
	} = values;
	const { handleModalOpenClose } = useModalOpenCloseContext();
	const [castMovieOrTV, setCastMovieOrTV] = useState<CastType[]>(INITIAL_CAST);
	const { handleStateChangeInformationsMoviesOrTV, stateInformationsMoviesOrTV } = useInformationsMoviesOrTVContext();
	const { handleMovieOrTVAdded, stateMovieOrTVAddedContext } = useMovieOrTVAddedContext();
	const { handleMovieOrTvLiked, stateMovieOrTvLikedContext } = useMovieOrTvLikedContext();
	const router = useRouter();

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
						onClick={() => router.push(`/play/${getIdMovieURL(urlMovie)}`)}
					>
						<PlayArrowIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</IconButton>
					<IconButton
						className='carousel-card-back-body-buttons-btn'
						aria-label='button-add'
						onClick={() => handleMovieOrTVAdded(values)}
					>
						{verifyMovieAddedOrLiked({ id: movie.id, state: stateMovieOrTVAddedContext }) ? (
							<CheckIcon className='carousel-card-back-body-buttons-btn-text-color' />
						) : (
							<AddIcon className='carousel-card-back-body-buttons-btn-text-color' />
						)}
					</IconButton>
					<IconButton
						className='carousel-card-back-body-buttons-btn'
						aria-label='button-like'
						onClick={() => handleMovieOrTvLiked(values)}
					>
						{verifyMovieAddedOrLiked({ id: movie.id, state: stateMovieOrTvLikedContext }) ? (
							<ThumbUpAltIcon className='carousel-card-back-body-buttons-btn-text-color' />
						) : (
							<ThumbUpOffAltIcon className='carousel-card-back-body-buttons-btn-text-color' />
						)}
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
