import { Suspense } from 'react';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';

const urlTopMovies =
	'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';

export default async function TopMovies() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlTopMovies);

	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies
					values={{
						resultData: results,
						type: 'movie',
						title: 'Top Filmes',
					}}
				/>
			</Suspense>
		</article>
	);
}
