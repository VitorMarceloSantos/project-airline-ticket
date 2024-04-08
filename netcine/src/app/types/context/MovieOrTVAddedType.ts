import { Dispatch, SetStateAction } from 'react';
import { CardGenresType, CardLanguagesType } from '../components/CardTypes';
import { ResultsType } from '../components/CarouselMoviesTypes';

export type MovieOrTVValuesType = {
	movie: ResultsType;
	genres: CardGenresType[];
	languages: CardLanguagesType;
	type: string;
	urlParams: string;
	title?: string;
	index?: number;
	setList?: Dispatch<SetStateAction<string[]>>;
};
export type MovieOrTVAddedType = {
	stateMovieOrTVAddedContext: MovieOrTVValuesType[];
	handleMovieOrTVAdded: (newMovie: MovieOrTVValuesType) => void;
};
