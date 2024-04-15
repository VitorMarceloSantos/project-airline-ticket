'use client';

import Image from 'next/image';
import { CardGenericType } from '@/app/types/components/CardTypes';
import { useEffect, useRef, useState } from 'react';
import { PlayerVideo } from './PlayerVideo';
import { CardBackBody } from './CardBackBody';
import { UpdateValuesStateInformations } from '@/app/functions/card/UpdateValuesStateInformations';
import { useInformationsMoviesOrTVContext } from '@/app/context';
import ErroImagem from '@/app/images/errorVideo.png';
import { usePlayerVideo } from '@/app/context';
import { verifySizeWindow } from '../functions/carouselMovies/addEventWindowWidth';
import { verifyScrollBarAndCarouselView } from '../functions/card/verifyScrollBarAndCarouselView';

export default function CardGeneric({ values }: CardGenericType) {
	const { genres, languages, movie, type, urlParams, title, index, setList } = values;
	const [urlMovie, setUrlMovie] = useState<string>(urlParams === undefined ? '' : urlParams);

	const { handleStateVideo } = usePlayerVideo();
	const { handleStateChangeInformationsMoviesOrTV } = useInformationsMoviesOrTVContext();
	const [cardSelected, setCardSelected] = useState<boolean>(false);
	const [sizeWindow, setSizeWindow] = useState<number>(0);
	const [scrollWindow, setScrollWindow] = useState<number>(0);
	const URL_IMG = movie.poster_path === null ? ErroImagem : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	const cardFront = useRef<HTMLElement>(null);
	const cardBack = useRef<HTMLElement>(null);
	const [acessCardHover, setAcessCardHover] = useState<boolean>(false);
	const NUMBER_SEVEN_HUNDRED_FIFTY = 750;
	const createNameClass = `${title!.toLocaleLowerCase().replaceAll(' ', '')}_${index}`;
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
	useEffect(() => {
		verifySizeWindow(setSizeWindow, setScrollWindow);
	}, []);

	const resetCard = () => {
		verifyScrollBarAndCarouselView({
			values: {
				acessCardHover,
				cardBack: cardBack.current as HTMLElement,
				cardFront: cardFront.current as HTMLElement,
				handleStateVideo,
				scrollWindow,
				setCardSelected,
				sizeWindow,
			},
		});
	};

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
						onLoad={() => setList((prevState) => [...prevState, 'true'])}
						className='carousel-card-image'
						src={URL_IMG}
						width={500}
						height={500}
						alt={`${type === 'movie' ? movie.title : movie.name} - Front`}
						priority={true}
					/>
				</section>
			</section>
			<section className='carousel-card-back' ref={cardBack}>
				<PlayerVideo values={{ movie, urlMovie, cardSelected, type }} />
				<CardBackBody values={{ movie, genres, languages, type, urlMovie }} />
			</section>
		</section>
	);
}
