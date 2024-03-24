import { verifyOverview } from '../functions/modal/verifyOverview';
import { ModalMoviesInformationsType } from '../types/components/ModalTypes';
import { CardBackBodyInformations } from './CardBackBodyInformations';

export const ModalMoviesInformations = ({ values }: ModalMoviesInformationsType) => {
	const { cast, english_name, genres, movieOrTV, type } = values;

	return (
		<section className='informations-modal-text'>
			<section className='informations-modal-text-container-1'>
				<CardBackBodyInformations values={{ english_name, movie: movieOrTV, type }} />
				<p className='informations-modal-text-container-1-overview'>{verifyOverview(movieOrTV.overview)}</p>
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
	);
};
