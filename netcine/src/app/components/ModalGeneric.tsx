'use client';

import { Box, IconButton, Modal, createTheme } from '@mui/material';
import { PlayerVideo } from './PlayerVideo';
import CloseIcon from '@mui/icons-material/Close';
import { useMemo } from 'react';
import { BreakPoints } from '../theme/BreakPoints';
import { ModalGenericType } from '../types/components/ModalTypes';

export const ModalGeneric = ({ values }: ModalGenericType) => {
	const {
		closeModal,
		moviePlayer: { movie, type, urlMovie },
		stateModal,
		children,
		handleStateVideo,
	} = values;

	const themeDisplayBreakPoints = useMemo(() => createTheme(BreakPoints()), []);
	const width_60 = {
		width: '60vw',
		height: '95vh',
		backgroundColor: '#181818',
		margin: '2.5vh 2.5vw',
		borderRadius: '10px',
		paddingBottom: '1.5rem',
		overflow: 'scroll',
		overflowX: 'hidden',
	};
	const width_90 = {
		width: '90vw',
		height: '95vh',
		backgroundColor: '#181818',
		margin: '2.5vh 2.5vw',
		borderRadius: '10px',
		paddingBottom: '1.5rem',
		overflow: 'scroll',
		overflowX: 'hidden',
	};

	return (
		<Modal
			open={stateModal}
			onClose={() => closeModal()}
			aria-labelledby='parent-modal-title'
			aria-describedby='parent-modal-description'
			sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
			className='container-modal'
		>
			<Box
				sx={[
					{
						width: '95vw',
						height: '95vh',
						backgroundColor: '#181818',
						margin: '2.5vh 2.5vw',
						borderRadius: '10px',
						paddingBottom: '1.5rem',
					},
					{
						[themeDisplayBreakPoints.breakpoints.down('desktop')]: { ...width_60 },
						[themeDisplayBreakPoints.breakpoints.down('small_tablet')]: { ...width_90 },
					},
				]}
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
							movie,
							urlMovie,
							cardSelected: true,
							type,
						}}
					/>
				</section>
				{children}
			</Box>
		</Modal>
	);
};
