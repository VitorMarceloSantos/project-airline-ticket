/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
import Image from 'next/image';
import { CardGenresType, CardLanguagesType, CardType } from '../types/CardTypes';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { dataGenres } from '../data/dataGenres';
import { dataLanguages } from '../data/dataLanguages';
import { useState } from 'react';
import { LoadVideo } from './LoadVideo';
import { getVideoData } from './RequestVideoCard';

export default function Card({ movie }: CardType) {
	const [urlMovie, setUrlMovie] = useState<string>('');
	const [cardSelected, setCardSelected] = useState<boolean>(true);
	const filterGenre = (genre: number) => {
		return dataGenres.find((genreData) => genreData.id === genre) as CardGenresType;
	};
	const genres: CardGenresType[] = [];

	movie.genre_ids.forEach((genre) => {
		genres.push(filterGenre(genre));
	});

	const filterLanguage = (language: string) => {
		return dataLanguages.find((languageData) => languageData.iso_639_1 === language) as CardLanguagesType;
	};
	const languages = filterLanguage(movie.original_language);

	const badNote = 5;
	const goodNote = 7.5;
	const handleChangeClassColor = () => {
		if (movie.vote_average <= badNote) {
			return 'carousel-card-back-body-informations-bad';
		} else if (movie.vote_average <= goodNote) {
			return 'carousel-card-back-body-informations-good';
		}
		return 'carousel-card-back-body-informations-excelent';
	};

	const verifyLoadVideo = () => {
		urlMovie === '' &&
			(async () => {
				setUrlMovie((await getVideoData(movie.id)) as string);
			})();
		setCardSelected(true);
	};

	return (
		<div className='carousel-card' onMouseEnter={verifyLoadVideo} onMouseLeave={() => setCardSelected(false)}>
			<div className='carousel-card-front'>
				<div className='carousel-card-header'>
					<Image
						className='carousel-card-image'
						src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
						width={215}
						height={130}
						alt={movie.title}
						priority={true}
					/>
				</div>
			</div>
			<div className='carousel-card-back'>
				<div className='carousel-card-header'></div>
				<LoadVideo values={{ movie, urlMovie, cardSelected }} />
				<div className='carousel-card-back-body'>
					<div className='carousel-card-back-body-buttons'>
						<div>
							<button className='carousel-card-back-body-buttons-btn carousel-card-back-body-buttons-btn-color'>
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
						<p className={`carousel-card-back-body-informations-average ${handleChangeClassColor()}`}>
							{movie.vote_average.toFixed(1)}
						</p>
						<p>{movie.release_date.split('-')[0]}</p>
						<p>{languages.english_name}</p>
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
			</div>
		</div>
	);
}
