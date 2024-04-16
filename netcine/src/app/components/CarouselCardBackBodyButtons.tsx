import { IconButton } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import { useRouter } from 'next/navigation';
import { useModalOpenCloseContext, useMovieOrTVAddedContext, useMovieOrTvLikedContext } from '../context';
import { CardBackBodyType } from '../types/components/CardBackBodyTypes';
import { verifyMovieAddedOrLiked } from '../functions/card/verifyMovieAddedOrLiked';

export const CarouselCardBackBodyButtons = ({ values }: CardBackBodyType) => {
	const { urlMovie, movie } = values;
	const { handleMovieOrTVAdded, stateMovieOrTVAddedContext } = useMovieOrTVAddedContext();
	const { handleMovieOrTvLiked, stateMovieOrTvLikedContext } = useMovieOrTvLikedContext();
	const { handleModalOpenClose } = useModalOpenCloseContext();
	const router = useRouter();

	const getIdMovieURL = (url: string) => {
		return url.split('embed/')[1].split('?rel')[0];
	};

	return (
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
					onClick={() => handleMovieOrTVAdded({ urlParams: urlMovie, ...values })}
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
					onClick={() => handleMovieOrTvLiked({ urlParams: urlMovie, ...values })}
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
	);
};
