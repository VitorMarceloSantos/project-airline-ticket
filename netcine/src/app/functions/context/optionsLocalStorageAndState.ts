import { MovieOrTVValuesType } from '@/app/types/context/MovieOrTVAddedType';
import { verifyMovieAddedOrLiked } from '../card/verifyMovieAddedOrLiked';
import { OptionsLocalStorageAndState } from '@/app/types/context/OptionsLocalStorageAndState';

export const optionsLocalStorageAndState = ({ values }: OptionsLocalStorageAndState): void => {
	const { newMovie, setStateAddedOrLiked, setStateTrueOrFalse, stateAddedOrLiked, stateTrueOrFalse, keyLocalStorage } =
		values;
	if (stateTrueOrFalse === true) {
		setStateAddedOrLiked([newMovie]);
		setStateTrueOrFalse(false);
		localStorage.setItem(keyLocalStorage, JSON.stringify([newMovie]));
	} else {
		if (verifyMovieAddedOrLiked({ id: newMovie.movie.id, state: stateAddedOrLiked })) {
			const parseLocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage) as string) as MovieOrTVValuesType[];
			const newStateFilter = parseLocalStorage.filter((element) => element.movie.id !== newMovie.movie.id);
			if (newStateFilter.length === 0) {
				localStorage.removeItem(keyLocalStorage);
				setStateAddedOrLiked([]);
				setStateTrueOrFalse(true);
			} else {
				localStorage.setItem(keyLocalStorage, JSON.stringify(newStateFilter));
				setStateAddedOrLiked(newStateFilter);
			}
		} else {
			const parseLocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage) as string);
			const newState = [...parseLocalStorage, newMovie];
			setStateAddedOrLiked(newState);
			localStorage.setItem(keyLocalStorage, JSON.stringify(newState));
		}
	}
};
