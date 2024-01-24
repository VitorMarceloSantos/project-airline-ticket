import { Dispatch, SetStateAction } from 'react';
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

export type PlayerVideoType = {
	values: {
		movie: ResultsType;
		urlMovie: string;
		cardSelected: boolean;
	};
};

export type GetUrlVideoType = {
	values: {
		urlMovie: string;
		setUrlMovie: Dispatch<SetStateAction<string>>;
		movieId: number;
		setCardSelected: Dispatch<SetStateAction<boolean>>;
	};
};

export type CardBackBodyType = {
	values: {
		movie: ResultsType;
		genres: CardGenresType[];
		languages: CardLanguagesType;
	};
};
