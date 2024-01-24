import { RequestMovies } from '../api/RequestMovies';
import CarouselMovies from './CarouselMovies';

const urlTopMovies =
	'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';

export default async function TopMovies() {
	const moviesData = await RequestMovies(urlTopMovies);

	return (
		<article>
			<CarouselMovies moviesData={moviesData} />
		</article>
	);
}
