import { ResultsType, urlVideoMovieType } from './TopMoviesTypes';

export type MoviesDataType = {
	values: {
		moviesData: ResultsType[];
		urlVideoMovie: urlVideoMovieType[];
	};
};
