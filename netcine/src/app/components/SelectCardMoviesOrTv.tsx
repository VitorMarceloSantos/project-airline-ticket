import { CardMoviesOrPeopleType, ResultsType } from '../types/components/CarouselMoviesTypes';
import Card from './Card';

export const SelectCardMoviesOrTv = ({ values }: CardMoviesOrPeopleType) => {
	const movies = values.movies as unknown as ResultsType[];
	const { type, slider } = values;
	return (
		<ul className='carousel-movies' ref={slider}>
			{movies.map((movie, index) => {
				return (
					<li className='carousel-item' key={`${movie.id}-${index}`}>
						<Card
							values={{
								movie,
								type: type === 'treding' ? (movie.media_type as string) : type,
							}}
						/>
					</li>
				);
			})}
		</ul>
	);
};
