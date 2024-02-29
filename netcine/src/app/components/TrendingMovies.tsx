import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';

const urlTrendingMovies = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

export default async function TrendingMovies() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlTrendingMovies);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies
				values={{
					resultData: results.sort(function (a, b) {
						return a.id - b.id;
					}),
					type: 'movie',
					title: 'Tendências',
				}}
			/>
		</article>
	);
}
