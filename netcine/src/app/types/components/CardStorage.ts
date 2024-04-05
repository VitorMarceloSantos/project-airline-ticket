import { Dispatch, SetStateAction } from 'react';
import { MovieOrTVValuesType } from '../context/MovieOrTVAddedType';

export type CardStorageType = {
	values: MovieOrTVValuesType;
	setList: Dispatch<SetStateAction<string[]>>;
};
