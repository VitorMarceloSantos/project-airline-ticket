'use client';

import { CardMoviesOrPeopleType } from '@/app/types/components/CarouselMoviesTypes';
import { PeopleType } from '@/app/types/components/PeopleType';
import CardPeople from './CardPeople';
import { useEffect, useState } from 'react';
import { SkeletonCarouselWithOutTitle } from './SkeletonCarouselWithOutTitle';

export const SelectCardPeoples = ({ values }: CardMoviesOrPeopleType) => {
	const peoples = values.movies as PeopleType[];
	const { slider } = values;
	const [listLoadImage, setListLoadImage] = useState<string[]>([]);
	const [isVisibleSkeleton, setIsVisibleSkeleton] = useState<boolean>(true);

	useEffect(() => {
		if (listLoadImage.length === 20) {
			slider.current!.style.opacity = '1';
			setIsVisibleSkeleton(false);
		}
	}, [listLoadImage]);

	return (
		<section className='carousel-movies-container'>
			<section className='carousel-movies-container-display-1'>
				{isVisibleSkeleton && <SkeletonCarouselWithOutTitle />}
			</section>
			<ul className='carousel-movies carousel-movies-container-display-2' ref={slider}>
				{peoples.map((people, index) => {
					return (
						<li className='carousel-item' key={index}>
							<CardPeople values={{ people, index, setList: setListLoadImage }} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};
