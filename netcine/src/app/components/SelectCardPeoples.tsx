import { CardMoviesOrPeopleType } from '../types/components/CarouselMoviesTypes';
import { PeopleType } from '../types/components/PeopleType';
import CardPeople from './CardPeople';

export const SelectCardPeoples = ({ values }: CardMoviesOrPeopleType) => {
	const peoples = values.movies as PeopleType[];
	const { slider } = values;
	return (
		<ul className='carousel-movies' ref={slider}>
			{peoples.map((people, index) => {
				return (
					<li className='carousel-item' key={index}>
						<CardPeople values={{ people, index }} />
					</li>
				);
			})}
		</ul>
	);
};
