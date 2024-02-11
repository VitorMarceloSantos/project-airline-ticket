import { Dispatch, SetStateAction } from 'react';
import { PeopleType } from './PeopleType';
import { CardBackPeopleBodyType } from './CardBackPeopleBodyType';

export type GetUrlPeopleType = {
	values: {
		informationsPeople: CardBackPeopleBodyType;
		setInformationsPeople: Dispatch<SetStateAction<CardBackPeopleBodyType>>;
		peopleId: number;
		// setCardSelected: Dispatch<SetStateAction<boolean>>;
	};
};

export type CardPeopleType = {
	people: PeopleType;
};
