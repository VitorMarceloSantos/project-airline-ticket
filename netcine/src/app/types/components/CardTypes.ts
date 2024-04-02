import { Dispatch, SetStateAction } from 'react';
import { ResultsType } from './CarouselMoviesTypes';
import { InformationsMoviesOrTVContextType } from '../context/InformationsMoviesOrTVType';

export type CardType = {
	values: {
		type: string;
		movie: ResultsType;
		index: number;
		title: string;
		setList: Dispatch<SetStateAction<string[]>>
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

export type UpdateValuesStateInformationsType = {
	values: {
		urlMovie: string;
		setCardSelected: Dispatch<SetStateAction<boolean>>;
		setUrlMovie: Dispatch<SetStateAction<string>>;
		genres: CardGenresType[];
		languages: CardLanguagesType;
		movie: ResultsType;
		type: string;
		handleStateChangeInformationsMoviesOrTV: (newInformations: InformationsMoviesOrTVContextType) => void;
	};
};

export type AddClassCardType = {
	values: {
		itemsPerScreen: number;
		listCards: NodeListOf<Element>;
	};
};
