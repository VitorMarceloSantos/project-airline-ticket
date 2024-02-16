import { Dispatch, SetStateAction } from 'react';
import { ResultsType } from './CarouselMoviesTypes';
import { InformationsMoviesOrTVContextType } from '../context/InformationsMoviesOrTVType';

export type CardType = {
	values: {
		type: string;
		movie: ResultsType;
	};
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
		// setCardSelected: Dispatch<SetStateAction<boolean>>;
		type: string;
	};
};

export type ControlVideoPlayerType = {
	playerFunct: string;
	playerVideo: HTMLIFrameElement;
};

export type CreateNewPlayerType = {
	values: {
		index: number;
		urlMovie: string;
		cardSelected: boolean;
	};
};

export type UpdateValuesStateInformations = {
	values: {
		urlMovie: string;
		setCardSelected: Dispatch<SetStateAction<boolean>>;
		setUrlMovie: Dispatch<SetStateAction<string>>;
		// cardSelected: boolean;
		genres: CardGenresType[];
		languages: CardLanguagesType;
		movie: ResultsType;
		type: string;
		handleStateChangeInformationsMoviesOrTV: (newInformations: InformationsMoviesOrTVContextType) => void;
	};
};
