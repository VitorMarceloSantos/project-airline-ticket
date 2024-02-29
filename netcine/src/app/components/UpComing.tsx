import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';

const urlUpComing = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export default async function UpComing() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlUpComing);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies
				values={{
					resultData: results.sort(function (a, b) {
						return a.id - b.id;
					}),
					type: 'movie',
					title: 'Em Breve',
				}}
			/>
		</article>
	);
}
