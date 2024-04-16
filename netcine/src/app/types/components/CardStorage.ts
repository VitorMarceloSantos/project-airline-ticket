import { Dispatch, SetStateAction } from 'react';
import { MovieOrTVValuesType } from '../context/MovieOrTVAddedType';

export type CardStorageType = {
	values: MovieOrTVValuesType;
};

export type ListLoadCardsLocalStorageType = {
	values: {
		storageCards: MovieOrTVValuesType[];
		type: string;
		setListLoadImage: Dispatch<SetStateAction<string[]>>;
	};
};
