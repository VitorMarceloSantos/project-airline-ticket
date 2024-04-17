import { LegacyRef, MutableRefObject } from 'react';
import { ResultsType } from './CarouselMoviesTypes';
import ReactPlayer from 'react-player';

export type PlayerVideoBannerType = {
	type: string;
};

export type PlayerVideoBannerURLType = {
	values: {
		type: string;
		videoId: number;
		img: string;
		title: string;
		overview: string;
		index: number;
	};
};

export type BannerMovieOrTvType = {
	value: {
		results: ResultsType[];
	};
};

export type IsVisibleVideoType = {
	values: {
		playOn: boolean;
		sectionVideo: LegacyRef<HTMLElement>;
		URL_Video: string;
		playerVideo: MutableRefObject<ReactPlayer | undefined>;
	};
};
