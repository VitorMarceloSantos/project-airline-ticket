import { Dispatch, SetStateAction } from 'react';
import { PeopleType } from './PeopleType';
import { CardBackPeopleBodyType } from './CardBackPeopleBodyType';
import { ResultsType } from './CarouselMoviesTypes';

export type GetUrlPeopleType = {
	values: {
		informationsPeople: CardBackPeopleBodyType;
		setInformationsPeople: Dispatch<SetStateAction<CardBackPeopleBodyType>>;
		peopleId: number;
		setKnowFor: Dispatch<SetStateAction<ResultsType[]>>;
		// setCardSelected: Dispatch<SetStateAction<boolean>>;
	};
};

export type CardPeopleType = {
	people: PeopleType;
};
