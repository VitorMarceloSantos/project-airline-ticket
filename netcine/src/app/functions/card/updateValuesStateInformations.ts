import { UpdateValuesStateInformations } from '@/app/types/components/CardTypes';
import { getUrlVideo } from './getUrlVideo';
import { InformationsMoviesOrTVContextType } from '@/app/types/context/InformationsMoviesOrTVType';

export const updateValuesStateInformations = async ({ values }: UpdateValuesStateInformations) => {
	const {
		movie,
		urlMovie,
		setCardSelected,
		setUrlMovie,
		genres,
		languages,
		type,
		handleStateChangeInformationsMoviesOrTV,
	} = values;
	setCardSelected(true);
	const url = await getUrlVideo({ values: { movieId: movie.id, urlMovie, setUrlMovie, type } });
	const newInformations: InformationsMoviesOrTVContextType = {
		genres,
		languages,
		url,
		movieOrTV: movie,
		type,
	};
	handleStateChangeInformationsMoviesOrTV(newInformations);
};
