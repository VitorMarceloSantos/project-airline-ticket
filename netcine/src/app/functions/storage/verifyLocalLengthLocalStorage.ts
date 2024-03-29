import { INITIAL_MOVIE_OR_TV_ADDED } from "@/app/constants/CardMoviesOrTV";
import { MovieOrTVValuesType } from "@/app/types/context/MovieOrTVAddedType";

export const verifyLocalLengthLocalStorage = (storage: MovieOrTVValuesType[]) => {
	if (storage.length === 1 && storage[0] === INITIAL_MOVIE_OR_TV_ADDED[0]) {
		return false;
	}
	if (storage.length === 0) return false;
	return true;
};
