import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { ResultsType } from '../types/components/CarouselMoviesTypes';
import { CarouselMovies } from './CarouselMovies';

const urlTopMovies =
	'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';

export default async function TopMovies() {
	const moviesData: ResultsType[] = await RequestInformationsAPI(urlTopMovies);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies values={{ moviesData, type: 'movie', title: 'Top Filmes' }} />
		</article>
	);
}
