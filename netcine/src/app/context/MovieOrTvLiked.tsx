import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { INITIAL_MOVIE_OR_TV_ADDED } from '@/app/constants/CardMoviesOrTV';
import { optionsLocalStorageAndState } from '@/app/functions/context/optionsLocalStorageAndState';
import { MovieOrTVValuesType } from '@/app/types/context/MovieOrTVAddedType';
import { MovieOrTVLikedType } from '@/app/types/context/MovieOrTVLikedType';

const initialValue: MovieOrTVLikedType = {
	stateMovieOrTvLikedContext: INITIAL_MOVIE_OR_TV_ADDED,
	handleMovieOrTvLiked: () => {},
};
const MovieOrTvLikedContext = createContext<MovieOrTVLikedType>(initialValue);

export const MovieOrTvLikedContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [trueOrFalseMoviesLiked, setTrueOrFalseMoviesLiked] = useState<boolean>(true);
	const [stateMovieOrTvLikedContext, setStateMovieOrTvLikedContext] =
		useState<MovieOrTVValuesType[]>(INITIAL_MOVIE_OR_TV_ADDED);
	const handleMovieOrTvLiked = useCallback(
		(newMovie: MovieOrTVValuesType) => {
			optionsLocalStorageAndState({
				values: {
					newMovie,
					setStateAddedOrLiked: setStateMovieOrTvLikedContext,
					setStateTrueOrFalse: setTrueOrFalseMoviesLiked,
					stateAddedOrLiked: stateMovieOrTvLikedContext,
					stateTrueOrFalse: trueOrFalseMoviesLiked,
					keyLocalStorage: 'movies_liked',
				},
			});
		},

		[stateMovieOrTvLikedContext],
	);

	useEffect(() => {
		if (localStorage.getItem('movies_liked') === null) {
			setTrueOrFalseMoviesLiked(true);
		} else {
			const parseLocalStorage = JSON.parse(localStorage.getItem('movies_liked') as string);
			setStateMovieOrTvLikedContext([...parseLocalStorage]);
			setTrueOrFalseMoviesLiked(false);
		}
	}, []);

	return (
		<MovieOrTvLikedContext.Provider
			value={{
				stateMovieOrTvLikedContext,
				handleMovieOrTvLiked,
			}}
		>
			{children}
		</MovieOrTvLikedContext.Provider>
	);
};

export const useMovieOrTvLikedContext = () => useContext(MovieOrTvLikedContext);
