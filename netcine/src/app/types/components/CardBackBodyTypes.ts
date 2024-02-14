import { CardGenresType, CardLanguagesType } from './CardTypes';
import { ResultsType } from './CarouselMoviesTypes';

export type CardBackBodyType = {
	values: {
		movie: ResultsType;
		genres: CardGenresType[];
		languages: CardLanguagesType;
		type: string;
		// urlMovie: string;
		// cardSelected: boolean;
	};
};
