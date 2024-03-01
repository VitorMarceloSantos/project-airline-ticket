import { CastType } from '../components/CardBackBodyTypes';
import { ResultsType } from '../components/CarouselMoviesTypes';
import { PeopleType } from '../components/PeopleType';

export type MovieOrTVDataType = {
	page: string;
	results: ResultsType[];
};

export type PeopleDataType = {
	page: string;
	results: PeopleType[];
};

export type CastDataType = {
	cast: CastType[];
};

export type DataTypeMoviesAndTVs = {
	cast: ResultsType[];
};
