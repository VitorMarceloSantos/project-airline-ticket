import { PeopleType } from './PeopleType';
import { InformationsPeoplesContextType } from '../context/InformationsPeoplesType';
import { Dispatch, SetStateAction } from 'react';

export type GetUrlPeopleType = {
	values: {
		peopleId: number;
		handleStateChangeInformationsPeoples: (newInformations: InformationsPeoplesContextType) => void;
	};
};

export type CardPeopleType = {
	values: {
		people: PeopleType;
		index: number;
		setList: Dispatch<SetStateAction<string[]>>;
	};
};

export type isExistUrlInformationsType = {
	values: {
		peopleId: number;
		handleStateChangeInformationsPeoples: (newInformations: InformationsPeoplesContextType) => void;
	};
};
