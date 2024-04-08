'use client';

import { useInformationsPeoplesContext, useModalOpenClosePeoplesContext, usePlayerVideo } from '../context';
import { ModalPeoplesInformations } from './ModalPeoplesInformations';
import RecomendationsPeoples from './RecomendationsPeoples';
import { ModalGeneric } from './ModalGeneric';

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

	const valuesProps = {
		closeModal,
		handleStateVideo,
		moviePlayer: { movie: randomMovieOrTV.movieOrTV, urlMovie: randomMovieOrTV.url, type: randomMovieOrTV.type },
		stateModal: stateModalOpenClosePeoplesContext,
	};

	return (
		<ModalGeneric
			values={{
				...valuesProps,
				children: (
					<>
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
					</>
				),
			}}
		/>
	);
};
