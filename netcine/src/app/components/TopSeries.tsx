import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';

const urlTopSeries = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';

export default async function TopSeries() {
	const seriesData = await RequestInformationsAPI(urlTopSeries);

	return (
		<article className='container-movies-tvs-peoples'>
			{<CarouselMovies values={{ moviesData: seriesData, type: 'tv', title: 'Top Séries' }} />}
		</article>
	);
}
