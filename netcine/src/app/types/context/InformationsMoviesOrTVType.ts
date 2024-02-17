import { CastType } from '../components/CardBackBodyTypes';
import { CardGenresType, CardLanguagesType } from '../components/CardTypes';
import { ResultsType } from '../components/CarouselMoviesTypes';

export type InformationsMoviesOrTVContextType = {
	movieOrTV: ResultsType;
	genres: CardGenresType[];
	languages: CardLanguagesType;
	url: string;
	type: string;
	cast?: CastType[];
};

export type NewInformationsMoviesOrTVContextType = {
	stateInformationsMoviesOrTV: InformationsMoviesOrTVContextType;
	handleStateChangeInformationsMoviesOrTV: (newInformations: InformationsMoviesOrTVContextType) => void;
};
