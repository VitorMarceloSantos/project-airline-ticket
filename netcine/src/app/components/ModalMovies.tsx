'use client';
import { Box, IconButton, Modal } from '@mui/material';
import { useInformationsMoviesOrTVContext, useModalMoviesContext } from '../context';
import { PlayerVideo } from './PlayerVideo';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import { CardBackBodyInformations } from './CardBackBodyInformations';

export const ModalMovies = () => {
	const { stateModalMovies, handleStateChange } = useModalMoviesContext();
	const { stateInformationsMoviesOrTV } = useInformationsMoviesOrTVContext();
	const {
		movieOrTV,
		url,
		type,
		cast,
		genres,
		languages: { english_name },
	} = stateInformationsMoviesOrTV;

	return (
		<>
			<Modal
				open={stateModalMovies}
				onClose={() => handleStateChange(false)}
				aria-labelledby='parent-modal-title'
				aria-describedby='parent-modal-description'
			>
				<Box sx={{ width: '95vw', height: '95vh', backgroundColor: '#181818' }}>
					<PlayerVideo values={{ movie: movieOrTV, urlMovie: url, cardSelected: true, type }} />
					<section className='informations-modal'>
						<section className='informations-modal-buttons'>
							<IconButton className='carousel-card-back-body-buttons-btn' aria-label='button-add'>
								<AddIcon className='carousel-card-back-body-buttons-btn-text-color' />
							</IconButton>
							<IconButton className='carousel-card-back-body-buttons-btn' aria-label='button-like'>
								<ThumbUpOffAltIcon className='carousel-card-back-body-buttons-btn-text-color' />
							</IconButton>
						</section>
						<section className='informations-modal-text'>
							<section className='informations-modal-text-container-1'>
								<CardBackBodyInformations values={{ english_name, movie: movieOrTV, type }} />
								<p id='parent-modal-description'>{movieOrTV.overview}</p>
							</section>
							<section className='informations-modal-text-container-2'>
								<section className='informations-modal-text-container-2-cast'>
									{/* <p>Elenco:</p> */}
									<ul>
										<li>Elenco:&nbsp;</li>
										{cast?.map((people, index) => (
											<li key={index}>
												<p>{`${people.name},`}&nbsp;</p>
											</li>
										))}
										<li>...</li>
									</ul>
									{/* <p>...</p> */}
								</section>
								<section className='informations-modal-text-container-2-genre'>
									<p>Gêneros:</p>
									<ul>
										{genres.map((genre, index) => {
											return (
												<li key={index}>
													<p>&nbsp;{`${genre.name}`}</p>
												</li>
											);
										})}
									</ul>
								</section>
							</section>
						</section>
					</section>
				</Box>
			</Modal>
		</>
	);
};
