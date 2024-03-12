import { MovieOrTVValuesType } from './MovieOrTVAddedType';

export type MovieOrTVLikedType = {
	stateMovieOrTvLikedContext: MovieOrTVValuesType[];
	handleMovieOrTvLiked: (newMovie: MovieOrTVValuesType) => void;
};
