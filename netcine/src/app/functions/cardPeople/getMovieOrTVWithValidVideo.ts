import { RequestUrlVideo } from '@/app/api/RequestUrlVideo';
import { randomVideo } from '../PlayerVideo/randomVideo';
import { ResultsType } from '@/app/types/components/CarouselMoviesTypes';
import { INITIAL_CARD_MOVIE_TV } from '@/app/constants/CardMoviesOrTV';

export const getMovieOrTVWithValidVideo = async (
	cast: ResultsType[],
): Promise<{ urlMovieOrTVRandom: string; movieOrTVRandom: ResultsType }> => {
	let urlMovieOrTVRandom: string = '';
	let movieOrTVRandom: ResultsType = INITIAL_CARD_MOVIE_TV;
	const awaitRandom = await RequestUrlVideo(movieOrTVRandom.id, movieOrTVRandom.media_type as string);

	while (urlMovieOrTVRandom.length === 0) {
		const numberRandom = randomVideo(cast.length);
		movieOrTVRandom = cast[numberRandom] as ResultsType;
		urlMovieOrTVRandom = awaitRandom as string;
	}
	return { urlMovieOrTVRandom, movieOrTVRandom };
};
