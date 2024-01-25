import Image from 'next/image';
import { CardGenresType, CardType } from '../types/components/CardTypes';
import { useState } from 'react';
import { PlayerVideo } from './PlayerVideo';
import { searchGenresMovie } from '../functions/card/searchGenresMovie';
import { filterLanguage } from '../functions/card/filterLanguageMovie';
import { getUrlVideo } from '../functions/card/getUrlVideo';
import { CardBackBody } from './CardBackBody';

export default function Card({ movie }: CardType) {
	const [urlMovie, setUrlMovie] = useState<string>('');
	const [cardSelected, setCardSelected] = useState<boolean>(true);
	const genres: CardGenresType[] = searchGenresMovie(movie.genre_ids);
	const languages = filterLanguage(movie.original_language);

	return (
		<section
			className='carousel-card'
			onMouseEnter={() => getUrlVideo({ values: { movieId: movie.id, urlMovie, setCardSelected, setUrlMovie } })}
			onMouseLeave={() => setCardSelected(false)}
		>
			<section className='carousel-card-front'>
				<section className='carousel-card-header'>
					<Image
						className='carousel-card-image'
						src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
						width={215}
						height={130}
						alt={movie.title}
						priority={true}
					/>
				</section>
			</section>
			<section className='carousel-card-back'>
				<PlayerVideo values={{ movie, urlMovie, cardSelected }} />
				<CardBackBody values={{ movie, genres, languages }} />
			</section>
		</section>
	);
}
