import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';

const urlPopularTV = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';

export default async function PopularTV() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlPopularTV);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies
				values={{
					resultData: results.sort(function (a, b) {
						return a.id - b.id;
					}),
					type: 'tv',
					title: 'Populares',
				}}
			/>
		</article>
	);
}
