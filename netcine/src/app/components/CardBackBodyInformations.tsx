import { selectColorNoteMovie } from '../functions/cardBackBody/selectColorNoteMovie';
import { verifyReleaseDate } from '../functions/cardBackBody/verifyReleaseDate';
import { CardBackBodyInformationsType } from '../types/components/CardBackBodyTypes';

export const CardBackBodyInformations = ({ values }: CardBackBodyInformationsType) => {
	const { english_name, movie, type } = values;
	return (
		<section className='carousel-card-back-body-informations'>
			<p
				role='paragraph'
				className={`
						carousel-card-back-body-informations-average ${selectColorNoteMovie(movie.vote_average)}`}
			>
				{movie.vote_average.toFixed(1)}
			</p>
			<p role='paragraph'>{verifyReleaseDate(type, movie).split('-')[0]}</p>
			<p role='paragraph'>{english_name}</p>
			<p role='paragraph' className='carousel-card-back-body-informations-hd'>
				HD
			</p>
		</section>
	);
};
