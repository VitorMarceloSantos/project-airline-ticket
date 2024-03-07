import { ResultsType } from './CarouselMoviesTypes';

export type ListCardsSearchType = {
	values: {
		results: ResultsType[];
		type: string;
	};
};
