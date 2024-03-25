import { Dispatch, SetStateAction } from 'react';
import { MovieOrTVValuesType } from './MovieOrTVAddedType';

export type OptionsLocalStorageAndState = {
	values: {
		stateTrueOrFalse: boolean;
		setStateAddedOrLiked: Dispatch<SetStateAction<MovieOrTVValuesType[]>>;
		setStateTrueOrFalse: Dispatch<SetStateAction<boolean>>;
		newMovie: MovieOrTVValuesType;
		stateAddedOrLiked: MovieOrTVValuesType[];
		keyLocalStorage: string;
	};
};
