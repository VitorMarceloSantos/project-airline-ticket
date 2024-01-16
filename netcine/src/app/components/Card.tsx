/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
import Image from 'next/image';
import { CardType } from '../types/CardTypes';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default async function Card({ movie }: CardType): Promise<JSX.Element> {
	return (
		// <div>
		// 	<Image
		// 		src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
		// 		width={215}
		// 		height={130}
		// 		alt={movie.title}
		// 		className='carousel-card'
		// 	/>
		// </div>
		<div className='wrapper'>
			<div className='card card--rounded wrapper__front'>
				<div className='card-header'>
					<Image
						className='card__image'
						src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
						width={215}
						height={130}
						alt={movie.title}
					/>
				</div>
			</div>
			<div className='card card--rounded wrapper__back'>
				<div className='card-header'>
					<Image
						className='card__image'
						src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
						width={215}
						height={130}
						alt={movie.title}
					/>
				</div>
				<div className='card-body'>
					<div className='flex justify-between items-center'>
						<div>
							<button className='btn btn--transparent btn--circle'>
								<PlayArrowIcon className='card-body-text-color' />
							</button>
							<button className='btn btn--transparent btn--circle'>
								<AddIcon className='card-body-text-color' />
							</button>
							<button className='btn btn--transparent btn--circle'>
								<ThumbUpOffAltIcon className='card-body-text-color' />
							</button>
						</div>
						<button className='btn btn--transparent btn--circle'>
							<KeyboardArrowDownIcon className='card-body-text-color' />
						</button>
					</div>
					<p className='card__title text'>
						<span className='text--bold'>S1:E1</span>"First, the Weather Changed"
					</p>
					<div className='card__progress flex justify-between items-center'>
						<div className='progressbar'>
							<div className='progressbar__status'></div>
						</div>
						<span className='text text--bold text--muted'>51 of 52m</span>
					</div>
				</div>
			</div>
		</div>
	);
}
