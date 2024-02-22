/* eslint-disable max-lines */

// Documentação
// https://medium.com/@dtulpa16/next-js-modals-made-easy-7bdce15b2a5e
// https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
// https://levelup.gitconnected.com/mastering-modals-in-next-js-a-comprehensive-guide-475c0d1629ab
'use client';

import { Box, IconButton, Modal } from '@mui/material';
import { useInformationsMoviesOrTVContext } from '../context';
import { PlayerVideo } from './PlayerVideo';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import { CardBackBodyInformations } from './CardBackBodyInformations';
import CloseIcon from '@mui/icons-material/Close';
import RecomendationsMoviesOrTVs from './RecomendationsMoviesOrTVs';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const ModalMovies = () => {
	const { stateInformationsMoviesOrTV } = useInformationsMoviesOrTVContext();
	const {
		movieOrTV,
		url,
		type,
		cast,
		genres,
		languages: { english_name },
	} = stateInformationsMoviesOrTV;
	const searchParams = useSearchParams();
	const modal = searchParams.get('modal');
	const pathname = usePathname();
	const router = useRouter();
	return (
		<Modal
			open={modal !== null}
			onClose={() => router.push('/')}
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
			>
				<section className='video-modal video-modal-position'>
					<IconButton
						className='
							carousel-card-back-body-buttons-btn
							carousel-card-back-body-buttons-btn-color video-modal-position-button'
						aria-label='button-close'
					>
						<Link href={pathname}>
							<CloseIcon className='carousel-card-back-body-buttons-btn-text-color' />
						</Link>
					</IconButton>
					<PlayerVideo values={{ movie: movieOrTV, urlMovie: url, cardSelected: true, type }} />
				</section>
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
							<p className='informations-modal-text-container-1-overview'>{movieOrTV.overview}</p>
						</section>
						<section className='informations-modal-text-container-2'>
							<section className='informations-modal-text-container-2-cast'>
								<ul>
									<li>
										<h3>Elenco:&nbsp;</h3>
									</li>
									{cast?.map((people, index) => (
										<li key={index}>
											<p>{`${people.name},`}&nbsp;</p>
										</li>
									))}
									<li>
										<p>...</p>
									</li>
								</ul>
							</section>
							<section className='informations-modal-text-container-2-genre'>
								<h3>Gêneros:</h3>
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
				<section className='ohters-movies-TV-modal'>
					<h2>Títulos Semelhantes:</h2>
					<RecomendationsMoviesOrTVs values={{ type, movieOrTV, english_name }} />
				</section>
			</Box>
		</Modal>
	);
};
