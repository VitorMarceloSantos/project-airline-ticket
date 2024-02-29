import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';

const urlPopularMovies = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export default async function PopularMovies() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlPopularMovies);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies
				values={{
					resultData: results.sort(function (a, b) {
						return a.id - b.id;
					}),
					type: 'movie',
					title: 'Populares',
				}}
			/>
		</article>
	);
}
