import Image from 'next/image';
import { CardGenresType, CardLanguagesType, CardType } from '../types/components/CardTypes';
import { useState } from 'react';
import { PlayerVideo } from './PlayerVideo';
import { searchGenresMovie } from '../functions/card/searchGenresMovie';
import { filterLanguage } from '../functions/card/filterLanguageMovie';
import { CardBackBody } from './CardBackBody';
import { UpdateValuesStateInformations } from '../functions/card/UpdateValuesStateInformations';
import { useInformationsMoviesOrTVContext } from '../context';
import ErroImagem from '../images/errorVideo.png';
import { usePlayerVideo } from '@/app/context';

export default function Card({ values }: CardType) {
	const { handleStateVideo } = usePlayerVideo();
	const { handleStateChangeInformationsMoviesOrTV } = useInformationsMoviesOrTVContext();
	const { movie, type } = values;
	const [urlMovie, setUrlMovie] = useState<string>('');
	const [cardSelected, setCardSelected] = useState<boolean>(true);
	const genres: CardGenresType[] = searchGenresMovie(movie.genre_ids);
	const languages: CardLanguagesType = filterLanguage(movie.original_language);
	const valuesProps = {
		cardSelected,
		genres,
		languages,
		movie,
		setCardSelected,
		setUrlMovie,
		type,
		urlMovie,
		handleStateChangeInformationsMoviesOrTV,
	};
	const URL_IMG = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;

	const resetCard = () => {
		handleStateVideo(true);
		setCardSelected(false);
	};

	const updateCard = () => {
		UpdateValuesStateInformations({
			values: { ...valuesProps },
		});
		handleStateVideo(false);
	};

	return (
		<section className='carousel-card' onMouseEnter={() => updateCard()} onMouseLeave={() => resetCard()}>
			<section className='carousel-card-front'>
				<section className='carousel-card-header'>
					<Image
						className='carousel-card-image'
						src={movie.poster_path === null ? ErroImagem : URL_IMG}
						width={215}
						height={130}
						alt={`${type === 'movie' ? movie.title : movie.name} - Front`}
						priority={true}
					/>
				</section>
			</section>
			<section className='carousel-card-back'>
				<PlayerVideo values={{ movie, urlMovie, cardSelected, type }} />
				<CardBackBody values={{ movie, genres, languages, type }} />
			</section>
		</section>
	);
}
