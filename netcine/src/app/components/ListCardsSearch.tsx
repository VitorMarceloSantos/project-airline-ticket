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
		<ul className='card-center carousel-card list-cards-search'>
			{results.map((movie, index) => {
				return (
					<li className='carousel-item' key={`${movie.id}-${index}`}>
            {/* <h1>{movie.name}</h1> */}
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
