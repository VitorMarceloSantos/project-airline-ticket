import { ResultsType } from '@/app/types/components/CarouselMoviesTypes';

export const excludePersonsList = (results: ResultsType[]): ResultsType[] => {
	const newListResult: ResultsType[] = [];
	results.forEach((movie) => {
		if (movie.media_type !== 'person') {
			newListResult.push(movie);
		}
	});
	return newListResult;
};
