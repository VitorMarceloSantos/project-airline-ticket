import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';

export default async function TredingWeek() {
	const urlTredingWeek = 'https://api.themoviedb.org/3/trending/all/week?language=en-US';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlTredingWeek);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies values={{ resultData: results, type: 'treding', title: 'Mais assistidos da Semana' }} />
		</article>
	);
}
