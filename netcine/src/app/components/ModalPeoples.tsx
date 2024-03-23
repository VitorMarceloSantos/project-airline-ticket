'use client';

import { Box, IconButton, Modal } from '@mui/material';
import { useInformationsPeoplesContext, useModalOpenClosePeoplesContext, usePlayerVideo } from '../context';
import { PlayerVideo } from './PlayerVideo';
import CloseIcon from '@mui/icons-material/Close';
import { ModalPeoplesInformations } from './ModalPeoplesInformations';
import RecomendationsPeoples from './RecomendationsPeoples';

export const ModalPeoples = () => {
	const { handleModalOpenClosePeoples, stateModalOpenClosePeoplesContext } = useModalOpenClosePeoplesContext();
	const {
		stateInformationsPeoples: { informationPeople, participationsInMoviesOrTV, randomMovieOrTV },
	} = useInformationsPeoplesContext();
	const { handleStateVideo } = usePlayerVideo();

	const closeModal = () => {
		handleStateVideo(true);
		handleModalOpenClosePeoples(false);
	};

	return (
		<Modal
			open={stateModalOpenClosePeoplesContext}
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
					<PlayerVideo
						values={{
							movie: randomMovieOrTV.movieOrTV,
							urlMovie: randomMovieOrTV.url,
							cardSelected: true,
							type: randomMovieOrTV.type,
						}}
					/>
				</section>
				<section className='informations-modal'>
					<ModalPeoplesInformations
						values={{
							informationPeople,
						}}
					/>
				</section>
				<section className='ohters-movies-TV-modal'>
					<h2>Participações:</h2>
					<RecomendationsPeoples values={{ participationsInMoviesOrTV }} />
				</section>
			</Box>
		</Modal>
	);
};
