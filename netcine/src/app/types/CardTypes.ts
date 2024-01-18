import { ResultsType } from './TopMoviesTypes';

export type CardType = {
	movie: ResultsType;
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
