export type DataType = {
	page: string;
	results: ResultsType[];
};

export type urlVideoMovieType = {
	id: number;
	url: string;
};

export type ResultsType = {
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
