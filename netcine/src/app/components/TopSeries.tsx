import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';

const urlTopSeries = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';

export default async function TopSeries() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlTopSeries);

	return (
		<article className='container-movies-tvs-peoples'>
			{<CarouselMovies values={{ resultData: results, type: 'tv', title: 'Top Séries' }} />}
		</article>
	);
}
