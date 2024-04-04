'use client';

import { useEffect, useRef, useState } from 'react';
import { ListCardsSearch } from './ListCardsSearch';
import { PlayerVideoBannerURL } from './PlayerVideoBannerURL';
import { CardsGroupResultType } from '@/app/types/components/CardsGroupResultTypes';
import { SkeletonCarouselWithOutTitle } from './SkeletonCarouselWithOutTitle';
import Loading from '../(main)/loading';


export const CardsGroupResult = ({ values }: CardsGroupResultType) => {
	const { verifyExistedPerson, type, numberRandom } = values;
	const videoBanner = verifyExistedPerson[numberRandom];
	const [listLoadImage, setListLoadImage] = useState<string[]>([]);
	const [isVisibleSkeleton, setIsVisibleSkeleton] = useState<boolean>(true);
	const searchRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (listLoadImage.length === verifyExistedPerson.length) {
			searchRef.current!.style.opacity = '1';
			setIsVisibleSkeleton(false);
		}
	}, [listLoadImage]);

	return (
		<>
			{verifyExistedPerson.length !== 0 ? (
				<section>
					<section className='carousel-movies-container-display-1'>{isVisibleSkeleton && <Loading />}</section>
					<article className='list-cards' ref={searchRef}>
						<PlayerVideoBannerURL
							values={{
								type: videoBanner?.media_type !== undefined ? videoBanner?.media_type : type,
								videoId: videoBanner.id,
								img: videoBanner.backdrop_path,
								title: (videoBanner?.title !== undefined ? videoBanner?.title : videoBanner?.name) as string,
								overview: videoBanner.overview,
								index: numberRandom,
							}}
						/>
						<h2>Resultado:</h2>
						<ListCardsSearch values={{ results: verifyExistedPerson, type, setList: setListLoadImage }} />
					</article>
				</section>
			) : (
				<h1 style={{ color: 'white' }}>NÃO ECONTRADO</h1>
			)}
		</>
	);
};
