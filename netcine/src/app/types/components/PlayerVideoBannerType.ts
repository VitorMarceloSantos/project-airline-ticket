import { ResultsType } from './CarouselMoviesTypes';

export type PlayerVideoBannerType = {
	type: string;
};

export type PlayerVideoBannerURLType = {
	values: {
		type: string;
		videoId: number;
		img: string;
	};
};

export type BannerMovieOrTvType = {
	value: {
		results: ResultsType[];
	};
};
