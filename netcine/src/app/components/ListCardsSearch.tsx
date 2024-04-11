'use client';

import { ListCardsSearchType } from '@/app/types/components/SearchTypes';
import Card from './Card';
import { useEffect } from 'react';
import { addClassCard } from '../functions/card/addClassCard';

export const ListCardsSearch = ({ values }: ListCardsSearchType) => {
	const { results, type, setList, } = values;

	useEffect(() => {
		const listCards = window.document.querySelectorAll(`.${'result'}-${type}`);
		addClassCard({ values: { itemsPerScreen: 6, listCards } });
	}, []);


	return (
		<ul className='list-cards-search-container'>
			{results.map((movie, index) => {
				return (
						<li className={`carousel-item ${'result'}-${type}`} key={`${movie.id}-${index}`}>
						<Card
							values={{
								movie,
								type: type === 'others' ? (movie.media_type as string) : type,
								index,
								title: 'search',
								setList,
							}}
						/>
					</li>
				);
			})}
		</ul>
	);
};
