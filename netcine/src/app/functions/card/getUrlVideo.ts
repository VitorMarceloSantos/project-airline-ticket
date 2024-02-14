import { Dispatch, SetStateAction } from 'react';
import { RequestUrlVideo } from '../../api/RequestUrlVideo';
import { GetUrlVideoType } from '../../types/components/CardTypes';

export const isExistUrlVideo = async (
	setUrlMovie: Dispatch<SetStateAction<string>>,
	movieId: number,
	urlMovie: string,
): Promise<string> => {
	if (urlMovie === '') {
		const urlMovie = (await RequestUrlVideo(movieId)) as string;
		setUrlMovie(urlMovie);
		return urlMovie;
	}

	return urlMovie;
};

export const getUrlVideo = async ({ values }: GetUrlVideoType): Promise<string> => {
	const { movieId, urlMovie, setCardSelected, setUrlMovie } = values;
	const url = await isExistUrlVideo(setUrlMovie, movieId, urlMovie);
	setCardSelected(true);
	return url;
};
