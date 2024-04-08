import { Dispatch, SetStateAction } from 'react';
import { ResultsType } from './CarouselMoviesTypes';

export type RecomendationsPeoplesType = {
	values: {
		participationsInMoviesOrTV: ResultsType[];
	};
};

export type CardRecomendationType = {
	values: {
		movieOrTV: ResultsType;
		setList: Dispatch<SetStateAction<string[]>>;
	};
};
