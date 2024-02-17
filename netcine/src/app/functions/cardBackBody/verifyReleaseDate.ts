import { ResultsType } from '@/app/types/components/CarouselMoviesTypes';

export const verifyReleaseDate = (type: string, movie: ResultsType): string => {
	return (type === 'movie' ? movie?.release_date : movie?.first_air_date) as string;
};
