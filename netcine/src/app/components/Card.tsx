import Image from 'next/image';
import { CardGenresType, CardType } from '../types/CardTypes';
import { useState } from 'react';
import { PlayerVideo } from './PlayerVideo';
import { searchGenresMovie } from '../functions/searchGenresMovie';
import { filterLanguage } from '../functions/filterLanguageMovie';
import { getUrlVideo } from '../functions/getUrlVideo';
import { CardBackBody } from './CardBackBody';

export default function Card({ movie }: CardType) {
	const [urlMovie, setUrlMovie] = useState<string>('');
	const [cardSelected, setCardSelected] = useState<boolean>(true);
	const genres: CardGenresType[] = searchGenresMovie(movie.genre_ids);
	const languages = filterLanguage(movie.original_language);

	return (
		<div
			className='carousel-card'
			onMouseEnter={() => getUrlVideo({ values: { movieId: movie.id, urlMovie, setCardSelected, setUrlMovie } })}
			onMouseLeave={() => setCardSelected(false)}
		>
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
				<PlayerVideo values={{ movie, urlMovie, cardSelected }} />
				<CardBackBody values={{ movie, genres, languages }} />
			</div>
		</div>
	);
}
