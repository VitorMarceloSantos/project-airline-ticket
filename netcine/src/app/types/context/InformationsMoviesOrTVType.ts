import { CardGenresType, CardLanguagesType } from '../components/CardTypes';
import { ResultsType } from '../components/CarouselMoviesTypes';

export type InformationsMoviesOrTVContextType = {
	movieOrTV: ResultsType;
	genres: CardGenresType[];
	languages: CardLanguagesType;
	url: string;
	// cardSelected: boolean;
	type: string;
};

export type NewInformationsMoviesOrTVContextType = {
	stateInformationsMoviesOrTV: InformationsMoviesOrTVContextType;
	handleStateChangeInformationsMoviesOrTV: (newInformations: InformationsMoviesOrTVContextType) => void;
};
