import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';

const urlTrendingTVs = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';

export default async function TrendingTVs() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlTrendingTVs);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies
				values={{
					resultData: results.sort(function (a, b) {
						return a.id - b.id;
					}),
					type: 'tv',
					title: 'Tendências',
				}}
			/>
		</article>
	);
}
