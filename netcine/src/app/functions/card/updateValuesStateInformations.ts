import { UpdateValuesStateInformations } from '@/app/types/components/CardTypes';
import { getUrlVideo } from './getUrlVideo';
import { InformationsMoviesOrTVContextType } from '@/app/types/context/InformationsMoviesOrTVType';

export const updateValuesStateInformations = async ({ values }: UpdateValuesStateInformations) => {
	const {
		movie,
		urlMovie,
		setCardSelected,
		setUrlMovie,
		cardSelected,
		genres,
		languages,
		type,
		handleStateChangeInformationsMoviesOrTV,
	} = values;
	const url = await getUrlVideo({ values: { movieId: movie.id, urlMovie, setCardSelected, setUrlMovie } });
	const newInformations: InformationsMoviesOrTVContextType = {
		cardSelected,
		genres,
		languages,
		url,
		movieOrTV: movie,
		type,
	};
	handleStateChangeInformationsMoviesOrTV(newInformations);
};
