import { ResultsType } from './CarouselMoviesTypes';

export type PlayerVideoType = {
	values: {
		movie: ResultsType;
		urlMovie: string;
		cardSelected: boolean;
	};
};
