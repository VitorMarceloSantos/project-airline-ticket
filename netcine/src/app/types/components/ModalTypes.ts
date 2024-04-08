import { Dispatch, SetStateAction } from 'react';
import { CastType } from './CardBackBodyTypes';
import { CardGenresType } from './CardTypes';
import { ResultsType } from './CarouselMoviesTypes';

export type ModalMoviesInformationsType = {
	values: {
		english_name: string;
		movieOrTV: ResultsType;
		type: string;
		cast: CastType[];
		genres: CardGenresType[];
	};
};

export type RecomendationsMoviesOrTVsType = {
	values: {
		type: string;
		movieOrTV: ResultsType;
		english_name: string;
	};
};

export type RecomendationsMoviesOrTVsSuspenseType = {
	values: {
		type: string;
		movieOrTV: ResultsType;
		english_name: string;
		setList: Dispatch<SetStateAction<string[]>>;
	};
};

export type ModalGenericType = {
	values: {
		stateModal: boolean;
		closeModal: () => void;
		moviePlayer: { movie: ResultsType; urlMovie: string; type: string };
		children: React.ReactNode;
		handleStateVideo: (newState: boolean) => void;
	};
};

export type ListCardsRecomendationsType = {
	values: {
		results: ResultsType[];
		type: string;
		english_name: string;
	};
};
