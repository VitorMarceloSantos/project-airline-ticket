import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { ResultsSeriesType, ResultsType } from '../types/components/CarouselMoviesTypes';
import CarouselMovies from './CarouselMovies';

const urlTopSeries = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';

export default async function TopSeries() {
	const seriesData = (await RequestInformationsAPI(urlTopSeries)) as unknown as ResultsSeriesType[];
	// Criar tipo dinâmico

	seriesData.forEach((item) => {
		delete Object.assign(item, { ['release_date']: item['first_air_date'] })['first_air_date'];
		delete Object.assign(item, { ['original_title']: item['original_name'] })['original_name'];
		delete Object.assign(item, { ['title']: item['name'] })['name'];
	});

	return (
		<article>
			{<CarouselMovies values={{ moviesData: seriesData as unknown as ResultsType[], title: 'Top Séries' }} />}
		</article>
	);
}
