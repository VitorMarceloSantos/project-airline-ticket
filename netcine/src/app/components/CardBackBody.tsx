import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectColorNoteMovie } from '../functions/cardBackBody/selectColorNoteMovie';
import { CardBackBodyType } from '../types/components/CardBackBodyTypes';

export const CardBackBody = ({ values }: CardBackBodyType) => {
	const {
		genres,
		movie: { vote_average, release_date },
		languages: { english_name },
	} = values;
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
				<p
					role='paragraph'
					className={`
						carousel-card-back-body-informations-average ${selectColorNoteMovie(vote_average)}`}
				>
					{vote_average.toFixed(1)}
				</p>
				<p role='paragraph'>{release_date.split('-')[0]}</p>
				<p role='paragraph'>{english_name}</p>
				<p role='paragraph' className='carousel-card-back-body-informations-hd'>
					HD
				</p>
			</section>
			<section className='carousel-card-back-body-informations-genres'>
				<ul>
					{genres.map((genre, index) => {
						return (
							<li className='carousel-card-back-body-informations-genres-li' key={index}>
								<p>{genre.name}&nbsp;</p>
							</li>
						);
					})}
				</ul>
			</section>
		</section>
	);
};
