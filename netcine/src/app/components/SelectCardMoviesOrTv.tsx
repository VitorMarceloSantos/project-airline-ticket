'use client';

import { useEffect } from 'react';
import { getItemsPerScreen } from '@/app/functions/card/getItemsPerScreen';
import { CardMoviesOrPeopleType, ResultsType } from '@/app/types/components/CarouselMoviesTypes';
import Card from './Card';
import { getWidthWindow } from '@/app/functions/card/getWidthWindow';
import { addClassCard } from '@/app/functions/card/addClassCard';

export const SelectCardMoviesOrTv = ({ values }: CardMoviesOrPeopleType) => {
	const movies = values.movies as unknown as ResultsType[];
	const { type, slider, title } = values;

	useEffect(() => {
		const widthView = getWidthWindow();
		const listCards = window.document.querySelectorAll('.carousel-item');
		const itemsPerScreen = getItemsPerScreen(widthView);
		addClassCard({ values: { itemsPerScreen, listCards } });
	}, []);

	const transformTitleInClass = (title: string) => {
		const newTitle = title.toLocaleLowerCase().replace(' ', '');
		return newTitle;
	};

	return (
		<ul className='carousel-movies' ref={slider}>
			{movies.map((movie, index) => {
				return (
					<li className='carousel-item' key={`${movie.id}-${index}`}>
						<Card
							values={{
								movie,
								type: type === 'treding' ? (movie.media_type as string) : type,
								index,
								title: title !== undefined ? transformTitleInClass(title) : 'person',
							}}
						/>
					</li>
				);
			})}
		</ul>
	);
};
