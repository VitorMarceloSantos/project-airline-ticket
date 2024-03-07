import { INITIAL_CAST } from '../../constants/CardBackBody';
import { GetRequestCastType } from '@/app/types/components/CardBackBodyTypes';
import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { CastDataType } from '@/app/types/api/RequestAPI';

export const GetRequestCast = async ({ values }: GetRequestCastType) => {
	const {
		movieId,
		type,
		castMovieOrTV,
		setCastMovieOrTV,
		handleStateChangeInformationsMoviesOrTV,
		stateInformationsMoviesOrTV,
	} = values;
	const url = `https://api.themoviedb.org/3/${type}/${movieId}/credits?language=en-US`;
	if (castMovieOrTV === INITIAL_CAST) {
		const cast = (await RequestInformationsAPI<CastDataType>(url)).cast;
		const NUMBER_FOUR = 4;
		const newCast = cast.length > NUMBER_FOUR ? cast.slice(0, NUMBER_FOUR) : cast;
		setCastMovieOrTV(newCast);
		handleStateChangeInformationsMoviesOrTV({ ...stateInformationsMoviesOrTV, cast: newCast });
	}
};
