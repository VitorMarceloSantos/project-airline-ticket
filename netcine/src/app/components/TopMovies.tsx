import { CarouselMovies } from './CarouselMovies';
import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';
import { ResultsType } from '../types/components/CarouselMoviesTypes';

export default async function TopMovies() {
	const urlTopMovies =
		'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlTopMovies);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies
				values={{
					resultData: results,
					type: 'movie',
					title: 'Top Filmes',
				}}
			/>
		</article>
	);
}
