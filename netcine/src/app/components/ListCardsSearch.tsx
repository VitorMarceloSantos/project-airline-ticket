import { ListCardsSearchType } from '../types/components/searchTypes';
import Card from './Card';

export const ListCardsSearch = ({ values }: ListCardsSearchType) => {
	const { results, type } = values;
	return (
		<ul className='carousel-card list-cards-search'>
			{results.map((movie, index) => {
				return (
					<li className='carousel-item card-center' key={`${movie.id}-${index}`}>
						<Card
							values={{
								movie,
								type,
								index,
								title: 'search',
							}}
						/>
					</li>
				);
			})}
		</ul>
	);
};
