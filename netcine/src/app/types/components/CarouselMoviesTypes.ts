import { RefObject } from 'react';

export type ResultsType = {
	// [x: string]: any;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

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
