import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';

export default async function TrendingMovies() {
	const urlTrendingMovies = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlTrendingMovies);

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
