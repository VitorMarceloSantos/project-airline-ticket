'use client';
import { Box, Modal } from '@mui/material';
import { useInformationsMoviesOrTVContext, useModalMoviesContext } from '../context';
import { PlayerVideo } from './PlayerVideo';

export const ModalMovies = () => {
	const { stateModalMovies, handleStateChange } = useModalMoviesContext();
	const { stateInformationsMoviesOrTV } = useInformationsMoviesOrTVContext();
	const { movieOrTV, url, cardSelected, type } = stateInformationsMoviesOrTV;

	return (
		<>
			<Modal
				open={stateModalMovies}
				onClose={() => handleStateChange(false)}
				aria-labelledby='parent-modal-title'
				aria-describedby='parent-modal-description'
			>
				<Box sx={{ width: 400, backgroundColor: 'red' }}>
					<PlayerVideo values={{ movie: movieOrTV, urlMovie: url, cardSelected, type }} />
					<p id='parent-modal-description'>{movieOrTV.overview}</p>
				</Box>
			</Modal>
		</>
	);
};
