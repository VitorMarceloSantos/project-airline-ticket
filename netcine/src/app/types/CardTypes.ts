import { ResultsType, urlVideoMovieType } from './TopMoviesTypes';

export type CardType = {
	values: {
		movie: ResultsType;
		urlVideoMovie: urlVideoMovieType;
	};
};

export type CardGenresType = {
	id: number;
	name: string;
};

export type CardLanguagesType = {
	iso_639_1: string;
	english_name: string;
	name: string;
};
