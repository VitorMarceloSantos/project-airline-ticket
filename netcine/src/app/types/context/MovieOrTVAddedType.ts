import { CardGenresType, CardLanguagesType } from '../components/CardTypes';
import { ResultsType } from '../components/CarouselMoviesTypes';

export type MovieOrTVValuesType = {
	movie: ResultsType;
	genres: CardGenresType[];
	languages: CardLanguagesType;
	type: string;
	urlMovie: string;
	title?: string;
	index?: number;
};
export type MovieOrTVAddedType = {
	stateMovieOrTVAddedContext: MovieOrTVValuesType[];
	handleMovieOrTVAdded: (newMovie: MovieOrTVValuesType) => void;
};
