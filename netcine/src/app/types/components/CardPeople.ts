import { PeopleType } from './PeopleType';
import { InformationsPeoplesContextType } from '../context/InformationsPeoplesType';

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
	};
};

export type isExistUrlInformationsType = {
	values: {
		peopleId: number;
		handleStateChangeInformationsPeoples: (newInformations: InformationsPeoplesContextType) => void;
	};
};
