import Image from 'next/image';
import { getUrPeople } from '../functions/cardPeople/getUrlInformations';
import { useState } from 'react';
import { CardPeopleType } from '../types/components/CardPeople';
import { CardBackPeopleBodyType } from '../types/components/CardBackPeopleBodyType';
import { INITIAL_CARD_PEOPLE } from '../constants/cardPeople';
import { CardBackPeopleBody } from './CardBackPeopleBody';
import { ResultsType } from '../types/components/CarouselMoviesTypes';
import ErroImagem from '../images/errorVideo.png';

export default function CardPeople({ people }: CardPeopleType) {
	const [informationsPeople, setInformationsPeople] = useState<CardBackPeopleBodyType>(INITIAL_CARD_PEOPLE);
	const [knowFor, setKnowFor] = useState<ResultsType[]>([]);
	const URL_IMG = `https://image.tmdb.org/t/p/w342${people.profile_path}`;

	return (
		<section
			className='carousel-card'
			onMouseEnter={() =>
				getUrPeople({
					values: {
						peopleId: people.id,
						setInformationsPeople,
						informationsPeople,
						setKnowFor,
					},
				})
			}
		>
			<section className='carousel-card-front'>
				<section className='carousel-card-header'>
					<Image
						className='carousel-card-image'
						src={people.profile_path === null ? ErroImagem : URL_IMG}
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
						src={people.profile_path === null ? ErroImagem : URL_IMG}
						width={215}
						height={130}
						alt={`${people.name}`}
						priority={true}
					/>
				</section>
				<CardBackPeopleBody values={{ name: people.name, informations: informationsPeople, knowFor }} />
			</section>
		</section>
	);
}
