'use client';

import { useEffect, useState } from 'react';
import { getItemsPerScreen } from '@/app/functions/card/getItemsPerScreen';
import { CardMoviesOrPeopleType, ResultsType } from '@/app/types/components/CarouselMoviesTypes';
import Card from './Card';
import { getWidthWindow } from '@/app/functions/card/getWidthWindow';
import { addClassCard } from '@/app/functions/card/addClassCard';
import { SkeletonCarouselWithOutTitle } from './SkeletonCarouselWithOutTitle';

export const SelectCardMoviesOrTv = ({ values }: CardMoviesOrPeopleType) => {
	const movies = values.movies as unknown as ResultsType[];
	const { type, slider, title } = values;
	const [listLoadImage, setListLoadImage] = useState<string[]>([]);
	const [isVisibleSkeleton, setIsVisibleSkeleton] = useState<boolean>(true);

	useEffect(() => {
		const widthView = getWidthWindow();
		// const listCards = window.document.querySelectorAll('.carousel-item');
		const listCards = window.document.querySelectorAll(`.${transformTitleInClass(title as string)}-${type}`);
		const itemsPerScreen = getItemsPerScreen(widthView);
		addClassCard({ values: { itemsPerScreen, listCards } });
	}, []);

	const transformTitleInClass = (title: string) => {
		const newTitle = title.toLocaleLowerCase().replaceAll(' ', '');
		return newTitle;
	};

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
				{movies.map((movie, index) => {
					return (
						<li className={`carousel-item ${transformTitleInClass(title as string)}-${type}`} key={`${movie.id}-${index}`}>
							<Card
								values={{
									movie,
									type: type === 'treding' ? (movie.media_type as string) : type,
									index,
									title: title !== undefined ? transformTitleInClass(title) : 'person',
									setList: setListLoadImage,
								}}
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
