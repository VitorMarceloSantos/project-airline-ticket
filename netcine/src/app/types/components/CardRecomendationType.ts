import { ResultsType } from './CarouselMoviesTypes';

export type RecomendationsPeoplesType = {
	values: {
		participationsInMoviesOrTV: ResultsType[];
	};
};

export type CardRecomendationType = {
	values: {
		movieOrTV: ResultsType;
	};
};
