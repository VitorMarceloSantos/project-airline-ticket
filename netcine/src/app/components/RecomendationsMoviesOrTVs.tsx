import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';
import { RecomendationsMoviesOrTVsType } from '@/app/types/components/ModalTypes';
import { ListCardsRecomendations } from './ListCardsRecomendations';

export default async function RecomendationsMoviesOrTVs({ values }: RecomendationsMoviesOrTVsType) {
	const { movieOrTV, type, english_name } = values;
	const urlRecomendations = `https://api.themoviedb.org/3/${type}/${movieOrTV.id}/similar?language=en-US&page=1`;
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlRecomendations);

	return (
		<article className='container-movies-tvs-recomendations'>
			<ListCardsRecomendations values={{ english_name, type, results }} />
		</article>
	);
}
