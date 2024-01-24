import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { handleChangeClassColor } from '../functions/selectColorNoteMovie';
import { CardBackBodyType } from '../types/CardTypes';

export const CardBackBody = ({ values }: CardBackBodyType) => {
	const {
		genres,
		movie: { vote_average, release_date },
		languages: { english_name },
	} = values;
	return (
		<div className='carousel-card-back-body'>
			<div className='carousel-card-back-body-buttons'>
				<div>
					<button
						className='
							carousel-card-back-body-buttons-btn carousel-card-back-body-buttons-btn-color'
					>
						<PlayArrowIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</button>
					<button className='carousel-card-back-body-buttons-btn'>
						<AddIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</button>
					<button className='carousel-card-back-body-buttons-btn'>
						<ThumbUpOffAltIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</button>
				</div>
				<button className='carousel-card-back-body-buttons-btn '>
					<KeyboardArrowDownIcon className='carousel-card-back-body-buttons-btn-text-color' />
				</button>
			</div>
			<div className='carousel-card-back-body-informations'>
				<p
					className={`
						carousel-card-back-body-informations-average ${handleChangeClassColor(vote_average)}`}
				>
					{vote_average.toFixed(1)}
				</p>
				<p>{release_date.split('-')[0]}</p>
				<p>{english_name}</p>
				<p className='carousel-card-back-body-informations-hd'>HD</p>
			</div>
			<div className='carousel-card-back-body-informations-genres'>
				<ul>
					{genres.map((genre, index) => {
						return (
							<li className='carousel-card-back-body-informations-genres-li' key={index}>
								<p>{genre.name}&nbsp;</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
