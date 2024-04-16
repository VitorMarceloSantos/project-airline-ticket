// Documentation
// https://medium.com/@dtulpa16/next-js-modals-made-easy-7bdce15b2a5e
// https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
// https://levelup.gitconnected.com/mastering-modals-in-next-js-a-comprehensive-guide-475c0d1629ab
'use client';

import { useInformationsMoviesOrTVContext, useModalOpenCloseContext, usePlayerVideo } from '@/app/context';
import RecomendationsMoviesOrTVs from './RecomendationsMoviesOrTVs';
import { ModalMoviesInformations } from './ModalMoviesInformations';
import { Suspense } from 'react';
import { ModalGeneric } from './ModalGeneric';

export const ModalMovies = () => {
	const { handleModalOpenClose, stateModalOpenCloseContext } = useModalOpenCloseContext();
	const { stateInformationsMoviesOrTV } = useInformationsMoviesOrTVContext();
	const { movieOrTV, url, type, cast, genres, languages } = stateInformationsMoviesOrTV;
	const { handleStateVideo } = usePlayerVideo();

	const closeModal = () => {
		handleStateVideo(true);
		handleModalOpenClose(false);
	};

	const valuesProps = {
		closeModal,
		handleStateVideo,
		moviePlayer: { movie: movieOrTV, urlMovie: url, type },
		stateModal: stateModalOpenCloseContext,
	};
	return (
		<ModalGeneric
			values={{
				...valuesProps,
				children: (
					<>
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
							<Suspense>
								<RecomendationsMoviesOrTVs
									values={{
										type,
										movieOrTV,
										english_name: languages.english_name,
									}}
								/>
							</Suspense>
						</section>
					</>
				),
			}}
		/>
	);
};
