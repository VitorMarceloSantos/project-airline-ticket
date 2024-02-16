import { Dispatch, SetStateAction } from 'react';
import { RequestUrlVideo } from '../../api/RequestUrlVideo';
import { GetUrlVideoType } from '../../types/components/CardTypes';

export const isExistUrlVideo = async (
	setUrlMovie: Dispatch<SetStateAction<string>>,
	movieId: number,
	urlMovie: string,
	type: string,
): Promise<string> => {
	if (urlMovie === '') {
		const urlMovie = (await RequestUrlVideo(movieId, type)) as string;
		setUrlMovie(urlMovie);
		return urlMovie;
	}

	return urlMovie;
};

export const getUrlVideo = async ({ values }: GetUrlVideoType): Promise<string> => {
	const { movieId, urlMovie, setUrlMovie, type } = values;
	const url = await isExistUrlVideo(setUrlMovie, movieId, urlMovie, type);

	return url;
};
