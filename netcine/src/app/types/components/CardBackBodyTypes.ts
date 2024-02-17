import { CardGenresType, CardLanguagesType } from './CardTypes';
import { ResultsType } from './CarouselMoviesTypes';

export type CardBackBodyType = {
	values: {
		movie: ResultsType;
		genres: CardGenresType[];
		languages: CardLanguagesType;
		type: string;
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
