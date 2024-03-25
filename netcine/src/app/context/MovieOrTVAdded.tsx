import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { MovieOrTVAddedType, MovieOrTVValuesType } from '@/app/types/context/MovieOrTVAddedType';
import { INITIAL_MOVIE_OR_TV_ADDED } from '@/app/constants/CardMoviesOrTV';
import { optionsLocalStorageAndState } from '@/app/functions/context/optionsLocalStorageAndState';

const initialValue: MovieOrTVAddedType = {
	stateMovieOrTVAddedContext: INITIAL_MOVIE_OR_TV_ADDED,
	handleMovieOrTVAdded: () => {},
};
const MovieOrTVAddedContext = createContext<MovieOrTVAddedType>(initialValue);

export const MovieOrTVAddedContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [trueOrFalseMoviesAdded, setTrueOrFalseMoviesAdded] = useState<boolean>(true);
	const [stateMovieOrTVAddedContext, setStateMovieOrTVAddedContext] =
		useState<MovieOrTVValuesType[]>(INITIAL_MOVIE_OR_TV_ADDED);
	const handleMovieOrTVAdded = useCallback(
		(newMovie: MovieOrTVValuesType) => {
			optionsLocalStorageAndState({
				values: {
					newMovie,
					setStateAddedOrLiked: setStateMovieOrTVAddedContext,
					setStateTrueOrFalse: setTrueOrFalseMoviesAdded,
					stateAddedOrLiked: stateMovieOrTVAddedContext,
					stateTrueOrFalse: trueOrFalseMoviesAdded,
					keyLocalStorage: 'movies_added',
				},
			});
		},

		[stateMovieOrTVAddedContext],
	);

	useEffect(() => {
		if (localStorage.getItem('movies_added') === null) {
			setTrueOrFalseMoviesAdded(true);
		} else {
			const parseLocalStorage = JSON.parse(localStorage.getItem('movies_added') as string);
			setStateMovieOrTVAddedContext([...parseLocalStorage]);
			setTrueOrFalseMoviesAdded(false);
		}
	}, []);

	return (
		<MovieOrTVAddedContext.Provider
			value={{
				stateMovieOrTVAddedContext,
				handleMovieOrTVAdded,
			}}
		>
			{children}
		</MovieOrTVAddedContext.Provider>
	);
};

export const useMovieOrTVAddedContext = () => useContext(MovieOrTVAddedContext);
