import { MovieOrTVValuesType } from '../context/MovieOrTVAddedType';

export type LoadCardsLocalStorageType = {
	values: {
		storageCards: MovieOrTVValuesType[];
		numberRandom: number;
		type: string;
	};
};
