import { ResultsType } from '../types/components/CarouselMoviesTypes';
import Card from './Card';

type ListCardsSearch = {
	values: {
		results: ResultsType[];
		type: string;
	};
};

export const ListCardsSearch = ({ values }: ListCardsSearch) => {
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
							}}
						/>
					</li>
				);
			})}
		</ul>
	);
};
