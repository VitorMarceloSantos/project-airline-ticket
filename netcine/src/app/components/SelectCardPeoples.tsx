'use client';

import { CardMoviesOrPeopleType } from '@/app/types/components/CarouselMoviesTypes';
import { PeopleType } from '@/app/types/components/PeopleType';
import CardPeople from './CardPeople';
import { useEffect, useState } from 'react';
import { SkeletonCarouselWithOutTitle } from './SkeletonCarouselWithOutTitle';
import { getWidthWindow } from '../functions/card/getWidthWindow';
import { getItemsPerScreen } from '../functions/card/getItemsPerScreen';
import { addClassCard } from '../functions/card/addClassCard';

export const SelectCardPeoples = ({ values }: CardMoviesOrPeopleType) => {
	const peoples = values.movies as PeopleType[];
	const { slider, type, title } = values;
	const [listLoadImage, setListLoadImage] = useState<string[]>([]);
	const [isVisibleSkeleton, setIsVisibleSkeleton] = useState<boolean>(true);
	const NUMBER_TWENTY = 20;

	// Refatorar -> igual SelectCardMoviesOrTV / Search

	useEffect(() => {
		const widthView = getWidthWindow();
		const listCards = window.document.querySelectorAll(`.${transformTitleInClass(title as string)}-${type}`);
		const itemsPerScreen = getItemsPerScreen(widthView);
		addClassCard({ values: { itemsPerScreen, listCards } });
	}, []);

	const transformTitleInClass = (title: string) => {
		const newTitle = title.toLocaleLowerCase().replaceAll(' ', '');
		return newTitle;
	};

	useEffect(() => {
		if (listLoadImage.length === NUMBER_TWENTY) {
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
						<li className={`carousel-item ${transformTitleInClass(title as string)}-${type}`} key={index}>
							<CardPeople values={{ people, index, setList: setListLoadImage }} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};
