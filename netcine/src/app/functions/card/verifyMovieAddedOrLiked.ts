import { MovieOrTVValuesType } from '@/app/types/context/MovieOrTVAddedType';

export const verifyMovieAddedOrLiked = ({ id, state }: { id: number; state: MovieOrTVValuesType[] }): boolean => {
	return state.some((element) => element.movie.id === id);
};
