import { RefObject } from 'react';

export type ResultsType = {
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date?: string;
	first_air_date?: string;
	title?: string;
	name?: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	media_type?: string;
};

export type MoviesDataType = {
	values: {
		moviesData: ResultsType[];
		type: string;
		title: string;
	};
};

export type VerifyHandleClickType = {
	values: {
		directionButton: string;
		progressBar: RefObject<HTMLDivElement>;
		slider: RefObject<HTMLUListElement>;
	};
};
