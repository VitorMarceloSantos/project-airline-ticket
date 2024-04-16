'use client';

import { useEffect, useRef, useState } from 'react';
import { ListCardsSearch } from './ListCardsSearch';
import { PlayerVideoBannerURL } from './PlayerVideoBannerURL';
import { CardsGroupResultType } from '@/app/types/components/CardsGroupResultTypes';
import Loading from '../(main)/loading';
import { usePlayerVideo } from '../context';
import { addEventScrollNavBar } from '../functions/carouselMovies/addEventWindowWidth';
import Image from 'next/image';
import redCamCorrect from '@/app/images/redCamCorrect.png';

export const CardsGroupResult = ({ values }: CardsGroupResultType) => {
	const { verifyExistedPerson, type, numberRandom } = values;
	const videoBanner = verifyExistedPerson[numberRandom];
	const [listLoadImage, setListLoadImage] = useState<string[]>([]);
	const [isVisibleSkeleton, setIsVisibleSkeleton] = useState<boolean>(true);
	const searchRef = useRef<HTMLElement>(null);
	const { handleStateVideo } = usePlayerVideo();
	const TITLE_TERNARY = (videoBanner?.title !== undefined ? videoBanner?.title : videoBanner?.name) as string;

	useEffect(() => {
		if (listLoadImage.length === verifyExistedPerson.length) {
			searchRef.current!.style.opacity = '1';
			setIsVisibleSkeleton(false);
		}
	}, [listLoadImage]);

	useEffect(() => {
		addEventScrollNavBar(handleStateVideo);
	}, []);

	return (
		<>
			{verifyExistedPerson.length !== 0 ? (
				<>
					<section
						className='
					carousel-movies-container-display-1'
					>
						{isVisibleSkeleton && <Loading />}
					</section>
					<article className='list-cards' ref={searchRef}>
						<PlayerVideoBannerURL
							values={{
								type: videoBanner?.media_type !== undefined ? videoBanner?.media_type : type,
								videoId: videoBanner.id,
								img: videoBanner.backdrop_path,
								title: TITLE_TERNARY,
								overview: videoBanner.overview,
								index: numberRandom,
							}}
						/>
						<h2>Resultado:</h2>
						<ListCardsSearch values={{ results: verifyExistedPerson, type, setList: setListLoadImage }} />
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
					<h1>Nenhum Filme/Série encontrado.</h1>
				</section>
			)}
		</>
	);
};
