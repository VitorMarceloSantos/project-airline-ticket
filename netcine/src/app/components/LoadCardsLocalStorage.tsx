'use client';

import { useEffect, useRef, useState } from 'react';
import { PlayerVideoBannerURL } from './PlayerVideoBannerURL';
import { LoadCardsLocalStorageType } from '@/app/types/components/LoadCardsLocalStorageType';
import { verifyLocalLengthLocalStorage } from '../functions/storage/verifyLocalLengthLocalStorage';
import Image from 'next/image';
import redCamCorrect from '@/app/images/redCamCorrect.png';
import Loading from '../(main)/loading';
import { usePlayerVideo } from '../context';
import { addEventScrollNavBar } from '../functions/carouselMovies/addEventWindowWidth';
import { addClassCard } from '../functions/card/addClassCard';
import { getWidthWindow } from '../functions/card/getWidthWindow';
import { getItemsPerScreen } from '../functions/card/getItemsPerScreen';
import { ListLoadCardsLocalStorage } from './ListLoadCardsLocalStorage';

export const LoadCardsLocalStorage = ({ values }: LoadCardsLocalStorageType) => {
	const { storageCards, numberRandom, type } = values;
	const videoBanner = storageCards[numberRandom];
	const [listLoadImage, setListLoadImage] = useState<string[]>([]);
	const [isVisibleSkeleton, setIsVisibleSkeleton] = useState<boolean>(true);
	const articleRef = useRef<HTMLElement>(null);
	const { handleStateVideo } = usePlayerVideo();

	useEffect(() => {
		if (listLoadImage.length === storageCards.length) {
			articleRef.current!.style.opacity = '1';
			setIsVisibleSkeleton(false);
		}
	}, [listLoadImage]);

	useEffect(() => {
		addEventScrollNavBar(handleStateVideo);
		const listCards = window.document.querySelectorAll(`.${'result'}-${type}`);
		const widthView = getWidthWindow();
		const itemsPerScreen = getItemsPerScreen(widthView);
		addClassCard({ values: { itemsPerScreen, listCards } });
	});

	return (
		<>
			{verifyLocalLengthLocalStorage(storageCards) ? (
				<>
					<section
						className='
					carousel-movies-container-display-1'
					>
						{isVisibleSkeleton && <Loading />}
					</section>
					<article className='list-cards' ref={articleRef}>
						<PlayerVideoBannerURL
							values={{
								type: videoBanner?.type,
								videoId: videoBanner.movie.id,
								img: videoBanner.movie.backdrop_path,
								title: (videoBanner.movie?.title !== undefined
									? videoBanner.movie?.title
									: videoBanner.movie?.name) as string,
								overview: videoBanner.movie.overview,
								index: numberRandom,
							}}
						/>
						<h2>Resultado:</h2>
						<ListLoadCardsLocalStorage values={{ setListLoadImage, storageCards, type }} />
					</article>
				</>
			) : (
				<section className='container-movie-notFound'>
					<Image
						className='img-movie-notFound'
						src={redCamCorrect}
						width={100}
						height={100}
						alt='Not Found Movies'
						priority={true}
					/>
					<h1>Nenhum Filme/Série adicionado.</h1>
				</section>
			)}
		</>
	);
};
