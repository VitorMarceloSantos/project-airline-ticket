'use client';

import Image from 'next/image';
import { CardGenresType, CardLanguagesType, CardType } from '../types/components/CardTypes';
import { useRef, useState } from 'react';
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
	const { movie, type, index, title } = values;
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
	const cardFront = useRef<HTMLElement>(null);
	const cardBack = useRef<HTMLElement>(null);
	const [acessCardHover, setAcessCardHover] = useState<boolean>(false);
	const NUMBER_SEVEN_HUNDRED_FIFTY = 750;

	const resetCard = () => {
		if (acessCardHover === true) {
			handleStateVideo(true);
			setCardSelected(false);
			cardFront.current!.style.opacity = '1';
			cardBack.current!.style.opacity = '0';
		}
	};

	const createNameClass = `${title.toLocaleLowerCase().replaceAll(' ', '')}_${index}`;

	const updateCard = () => {
		const verifyClass = document.querySelector(`.${createNameClass}`);
		const timeoutId = setTimeout(() => {
			if (verifyClass?.matches(':hover')) {
				cardFront.current!.style.opacity = '0';
				cardBack.current!.style.opacity = '1';
				UpdateValuesStateInformations({
					values: { ...valuesProps },
				});
				handleStateVideo(false);
				setAcessCardHover(true);
			}
		}, NUMBER_SEVEN_HUNDRED_FIFTY);
		return () => clearTimeout(timeoutId);
	};

	return (
		<section
			className={`carousel-card ${createNameClass}`}
			onMouseEnter={() => updateCard()}
			onMouseLeave={() => resetCard()}
		>
			<section className='carousel-card-front' ref={cardFront}>
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
			<section className='carousel-card-back' ref={cardBack}>
				<PlayerVideo values={{ movie, urlMovie, cardSelected, type }} />
				<CardBackBody values={{ movie, genres, languages, type }} />
			</section>
		</section>
	);
}
