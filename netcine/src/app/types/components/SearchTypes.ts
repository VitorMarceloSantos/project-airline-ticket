import { ResultsType } from './CarouselMoviesTypes';

export type ListCardsSearchType = {
	values: {
		results: ResultsType[];
		type: string;
	};
};

export type SearchPageType = {
	values: {
		type: string;
		code: string;
	};
};
