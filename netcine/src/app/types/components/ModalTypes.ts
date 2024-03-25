import { CastType } from './CardBackBodyTypes';
import { CardGenresType } from './CardTypes';
import { ResultsType } from './CarouselMoviesTypes';

export type ModalMoviesInformationsType = {
	values: {
		english_name: string;
		movieOrTV: ResultsType;
		type: string;
		cast: CastType[];
		genres: CardGenresType[];
	};
};

export type RecomendationsMoviesOrTVsType = {
	values: {
		type: string;
		movieOrTV: ResultsType;
		english_name: string;
	};
};
