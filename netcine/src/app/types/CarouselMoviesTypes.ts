import { RefObject } from 'react';
import { ResultsType } from './TopMoviesTypes';

export type MoviesDataType = {
	moviesData: ResultsType[];
};

export type VerifyHandleClickType = {
	values: {
		directionButton: string;
		progressBar: RefObject<HTMLDivElement>;
		slider: RefObject<HTMLUListElement>;
	};
};

export type ProgressBarType = {
	values: {
		progressBar: RefObject<HTMLDivElement>;
	};
};
