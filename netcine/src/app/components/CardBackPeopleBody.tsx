import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CardBackPeopleCardType } from '../types/components/CardBackPeopleBodyType';

export const CardBackPeopleBody = ({ values }: CardBackPeopleCardType) => {
	const { biography, birthday, name, place_of_birth } = values;

	// const verifyReleaseDate = (type: string): string => {
	// 	return (type === 'movie' ? movie?.release_date : movie?.first_air_date) as string;
	// };

	return (
		<section className='carousel-card-back-body'>
			<section className='carousel-card-back-body-buttons'>
				<section>
					<button
						className='
							carousel-card-back-body-buttons-btn carousel-card-back-body-buttons-btn-color'
						aria-label='button-play'
					>
						<PlayArrowIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</button>
					<button className='carousel-card-back-body-buttons-btn' aria-label='button-add'>
						<AddIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</button>
					<button className='carousel-card-back-body-buttons-btn' aria-label='button-like'>
						<ThumbUpOffAltIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</button>
				</section>
				<button className='carousel-card-back-body-buttons-btn' aria-label='button-arrow-down'>
					<KeyboardArrowDownIcon className='carousel-card-back-body-buttons-btn-text-color' />
				</button>
			</section>
			<section className='carousel-card-back-body-informations'>
				{/* <p
					role='paragraph'
					className={`
						carousel-card-back-body-informations-average ${selectColorNoteMovie(movie.vote_average)}`}
				>
					{movie.vote_average.toFixed(1)}
				</p> */}
				<p role='paragraph'>{biography}</p>
				<p role='paragraph'>{birthday}</p>
				<p role='paragraph'>{name}</p>
				{/* <p role='paragraph' className='carousel-card-back-body-informations-hd'>
					HD
				</p> */}
			</section>
			{/* <section className='carousel-card-back-body-informations-genres'>
				<ul>
					{genres.map((genre, index) => {
						return (
							<li className='carousel-card-back-body-informations-genres-li' key={index}>
								<p>{genre.name}&nbsp;</p>
							</li>
						);
					})}
				</ul>
			</section> */}
		</section>
	);
};
