import { Dispatch, SetStateAction } from 'react';
import { ResultsType } from './CarouselMoviesTypes';

export type ListCardsSearchType = {
	values: {
		results: ResultsType[];
		type: string;
		setList: Dispatch<SetStateAction<string[]>>;
	};
};

export type SearchPageType = {
	values: {
		type: string;
		code: string;
	};
};
