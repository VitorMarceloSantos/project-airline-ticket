import { ResultsType } from '../components/CarouselMoviesTypes';

export type DataType = {
	page: string;
	results: ResultsType[];
};

export type DataTypeMoviesAndTVs = {
	cast: ResultsType[];
};
