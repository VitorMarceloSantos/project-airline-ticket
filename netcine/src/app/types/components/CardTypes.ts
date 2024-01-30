import { Dispatch, SetStateAction } from 'react';
import { ResultsType } from './CarouselMoviesTypes';

export type CardType = {
	movie: ResultsType;
};

export type CardGenresType = {
	id: number;
	name: string;
};

export type CardLanguagesType = {
	iso_639_1: string;
	english_name: string;
	name: string;
};

export type GetUrlVideoType = {
	values: {
		urlMovie: string;
		setUrlMovie: Dispatch<SetStateAction<string>>;
		movieId: number;
		setCardSelected: Dispatch<SetStateAction<boolean>>;
	};
};

export type ControlVideoPlayerType = {
	playerFunct: string;
	playerVideo: HTMLIFrameElement;
};
