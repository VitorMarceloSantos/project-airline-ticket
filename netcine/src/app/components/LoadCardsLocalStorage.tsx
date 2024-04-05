'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { PlayerVideoBannerURL } from './PlayerVideoBannerURL';
import { randomVideo } from '@/app/functions/PlayerVideo/randomVideo';
import { LoadCardsLocalStorageType } from '@/app/types/components/LoadCardsLocalStorageType';
import CardStorage from './CardStorage';
import { verifyLocalLengthLocalStorage } from '../functions/storage/verifyLocalLengthLocalStorage';
import Image from 'next/image';
import redCamCorrect from '@/app/images/redCamCorrect.png';
import Loading from '../(main)/loading';
import { usePlayerVideo } from '../context';
import { addEventScrollNavBar } from '../functions/carouselMovies/addEventWindowWidth';
import { addClassCard } from '../functions/card/addClassCard';

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
		addClassCard({ values: { itemsPerScreen: 6, listCards } });
	}, []);

	return (
		<>
			{verifyLocalLengthLocalStorage(storageCards) ? (
				<>
					<section className='carousel-movies-container-display-1'>{isVisibleSkeleton && <Loading />}</section>
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
						<ul className='list-cards-search-container'>
							{storageCards.map((item, index) => {
								return (
									<li className={`carousel-item ${'result'}-${type}`} key={`${item.movie.id}-${index}`}>
										<CardStorage
											values={{
												movie: item.movie,
												type: item.type,
												index,
												title: 'storage',
												genres: item.genres,
												languages: item.languages,
												urlMovie: item.urlMovie,
											}}
											setList={setListLoadImage}
										/>
									</li>
								);
							})}
						</ul>
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
