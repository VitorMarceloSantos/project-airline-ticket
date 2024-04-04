'use client';

import { ListCardsSearchType } from '@/app/types/components/SearchTypes';
import Card from './Card';

export const ListCardsSearch = ({ values }: ListCardsSearchType) => {
	const { results, type, setList } = values;

	return (
		<ul className='list-cards-search-container'>
			{results.map((movie, index) => {
				return (
					<li className='carousel-item card-center' key={`${movie.id}-${index}`}>
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
