// Documentation
// https://medium.com/@dtulpa16/next-js-modals-made-easy-7bdce15b2a5e
// https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
// https://levelup.gitconnected.com/mastering-modals-in-next-js-a-comprehensive-guide-475c0d1629ab
'use client';

import { Box, IconButton, Modal } from '@mui/material';
import { useInformationsMoviesOrTVContext, useModalOpenCloseContext, usePlayerVideo } from '@/app/context';
import { PlayerVideo } from './PlayerVideo';
import CloseIcon from '@mui/icons-material/Close';
import RecomendationsMoviesOrTVs from './RecomendationsMoviesOrTVs';
import { ModalMoviesInformations } from './ModalMoviesInformations';

export const ModalMovies = () => {
	const { handleModalOpenClose, stateModalOpenCloseContext } = useModalOpenCloseContext();
	const { stateInformationsMoviesOrTV } = useInformationsMoviesOrTVContext();
	const { handleStateVideo } = usePlayerVideo();
	const { movieOrTV, url, type, cast, genres, languages } = stateInformationsMoviesOrTV;

	const closeModal = () => {
		handleStateVideo(true);
		handleModalOpenClose(false);
	};

	return (
		<Modal
			open={stateModalOpenCloseContext}
			onClose={() => closeModal()}
			aria-labelledby='parent-modal-title'
			aria-describedby='parent-modal-description'
		>
			<Box
				sx={{
					width: '95vw',
					height: '95vh',
					backgroundColor: '#181818',
					margin: '2.5vh 2.5vw',
					borderRadius: '10px',
					paddingBottom: '1.5rem',
				}}
				onMouseEnter={() => handleStateVideo(false)}
			>
				<section className='video-modal video-modal-position'>
					<IconButton
						className='
							carousel-card-back-body-buttons-btn
							carousel-card-back-body-buttons-btn-color video-modal-position-button'
						aria-label='button-close'
						onClick={() => closeModal()}
					>
						<CloseIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</IconButton>
					<PlayerVideo values={{ movie: movieOrTV, urlMovie: url, cardSelected: true, type }} />
				</section>
				<section className='informations-modal'>
					<ModalMoviesInformations
						values={{
							cast: cast !== undefined ? cast : [],
							english_name: languages.english_name,
							genres,
							movieOrTV,
							type,
						}}
					/>
				</section>
				<section className='ohters-movies-TV-modal'>
					<h2>Títulos Semelhantes:</h2>
					<RecomendationsMoviesOrTVs values={{ type, movieOrTV, english_name: languages.english_name }} />
				</section>
			</Box>
		</Modal>
	);
};
