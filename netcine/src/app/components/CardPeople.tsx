import Image from 'next/image';
import { getUrPeople } from '../functions/cardPeople/getUrlInformations';
import { useState } from 'react';
import { CardPeopleType } from '../types/components/CardPeople';
import { CardBackPeopleBodyType } from '../types/components/CardBackPeopleBodyType';
import { INITIAL_CARD_PEOPLE } from '../constants/cardPeople';
import { CardBackPeopleBody } from './CardBackPeopleBody';

export default function CardPeople({ people }: CardPeopleType) {
	const [informationsPeople, setInformationsPeople] = useState<CardBackPeopleBodyType>(INITIAL_CARD_PEOPLE);
	// const [cardSelected, setCardSelected] = useState<boolean>(true);
	// const genres: CardGenresType[] = searchGenresMovie(movie.genre_ids);
	// const languages = filterLanguage(movie.original_language);

	return (
		<section
			className='carousel-card'
			onMouseEnter={() =>
				getUrPeople({
					values: {
						peopleId: people.id,
						// setCardSelected,
						setInformationsPeople,
						informationsPeople,
					},
				})
			}
			// onMouseLeave={() => setCardSelected(false)}
		>
			<section className='carousel-card-front'>
				<section className='carousel-card-header'>
					<Image
						className='carousel-card-image'
						src={`https://image.tmdb.org/t/p/w342${people.profile_path}`}
						width={215}
						height={130}
						alt={`${people.name}`}
						priority={true}
					/>
				</section>
			</section>
			<section className='carousel-card-back'>
				<section className='carousel-card-header'>
					<Image
						className='carousel-card-image'
						src={`https://image.tmdb.org/t/p/w342${people.profile_path}`}
						width={215}
						height={130}
						alt={`${people.name}`}
						priority={true}
					/>
				</section>
				<CardBackPeopleBody values={informationsPeople} />
			</section>
		</section>
	);
}
