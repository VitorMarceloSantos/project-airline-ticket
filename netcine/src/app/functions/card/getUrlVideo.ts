import { Dispatch, SetStateAction } from 'react';
import { RequestUrlVideo } from '../../api/RequestUrlVideo';
import { GetUrlVideoType } from '../../types/components/CardTypes';

export const isExistUrlVideo = async (
	setUrlMovie: Dispatch<SetStateAction<string>>,
	movieId: number,
	urlMovie: string,
): Promise<void> => {
	urlMovie === '' && setUrlMovie((await RequestUrlVideo(movieId)) as string);
};

export const getUrlVideo = ({ values }: GetUrlVideoType): void => {
	const { movieId, urlMovie, setCardSelected, setUrlMovie } = values;
	isExistUrlVideo(setUrlMovie, movieId, urlMovie);
	setCardSelected(true);
};
