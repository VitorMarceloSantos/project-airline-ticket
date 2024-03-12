import { Dispatch, SetStateAction } from 'react';
import { CardGenresType, CardLanguagesType } from './CardTypes';
import { ResultsType } from './CarouselMoviesTypes';
import { InformationsMoviesOrTVContextType } from '../context/InformationsMoviesOrTVType';

export type CardBackBodyType = {
	values: {
		movie: ResultsType;
		genres: CardGenresType[];
		languages: CardLanguagesType;
		type: string;
		urlMovie: string;
	};
};

export type CastType = {
	id: number;
	name: string;
	character: string;
};

export type CardBackBodyInformationsType = {
	values: {
		movie: ResultsType;
		type: string;
		english_name: string;
	};
};

export type GetRequestCastType = {
	values: {
		type: string;
		movieId: number;
		castMovieOrTV: CastType[];
		setCastMovieOrTV: Dispatch<SetStateAction<CastType[]>>;
		stateInformationsMoviesOrTV: InformationsMoviesOrTVContextType;
		handleStateChangeInformationsMoviesOrTV: (newInformations: InformationsMoviesOrTVContextType) => void;
	};
};
