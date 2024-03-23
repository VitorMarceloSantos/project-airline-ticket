import { CardBackPeopleBodyType } from '../components/CardBackPeopleBodyType';
import { ResultsType } from '../components/CarouselMoviesTypes';

export type InformationsPeoplesContextType = {
	informationPeople: CardBackPeopleBodyType;
	participationsInMoviesOrTV: ResultsType[];
	randomMovieOrTV: { url: string; type: string; movieOrTV: ResultsType };
};

export type NewInformationsPeoplesContextType = {
	stateInformationsPeoples: InformationsPeoplesContextType;
	handleStateChangeInformationsPeoples: (newInformations: InformationsPeoplesContextType) => void;
};
