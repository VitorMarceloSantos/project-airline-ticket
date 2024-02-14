import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { ResultsType } from '../types/components/CarouselMoviesTypes';
import { CarouselMovies } from './CarouselMovies';

const urlTopMovies =
	'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';

export default async function TopMovies() {
	const moviesData: ResultsType[] = await RequestInformationsAPI(urlTopMovies);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies values={{ moviesData, type: 'movie', title: 'Top Filmes' }} />
		</article>
	);
}
