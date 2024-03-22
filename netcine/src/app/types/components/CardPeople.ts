import { Dispatch, SetStateAction } from 'react';
import { PeopleType } from './PeopleType';
import { CardBackPeopleBodyType } from './CardBackPeopleBodyType';
import { ResultsType } from './CarouselMoviesTypes';
import { InformationsPeoplesContextType } from '../context/InformationsPeoplesType';

export type GetUrlPeopleType = {
	values: {
		// informationsPeople: CardBackPeopleBodyType;
		// setInformationsPeople: Dispatch<SetStateAction<CardBackPeopleBodyType>>;
		peopleId: number;
		handleStateChangeInformationsPeoples: (newInformations: InformationsPeoplesContextType) => void;
		// setKnowFor: Dispatch<SetStateAction<ResultsType[]>>;
		// setCardSelected: Dispatch<SetStateAction<boolean>>;
	};
};

export type CardPeopleType = {
	values: {
		people: PeopleType;
		index: number;
	};
};
