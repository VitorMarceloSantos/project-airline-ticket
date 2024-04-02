import { Suspense } from 'react';
import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarouselWithTitle';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';

export default async function PopularMovies() {
	const urlPopularMovies = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
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
