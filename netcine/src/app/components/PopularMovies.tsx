import { Suspense } from 'react';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';
import { MovieOrTVDataType } from '../types/api/RequestAPI';

const urlPopularMovies = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export default async function PopularMovies() {
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlPopularMovies);

	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies
					values={{
						resultData: results.sort(function (a, b) {
							return a.id - b.id;
						}),
						type: 'movie',
						title: 'Populares',
					}}
				/>
			</Suspense>
		</article>
	);
}
