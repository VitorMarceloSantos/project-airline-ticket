import { Suspense } from 'react';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';
import { MovieOrTVDataType } from '../types/api/RequestAPI';

const urlPopularTV = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';

export default async function PopularTV() {
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlPopularTV);

	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies
					values={{
						resultData: results.sort(function (a, b) {
							return a.id - b.id;
						}),
						type: 'tv',
						title: 'Populares',
					}}
				/>
			</Suspense>
		</article>
	);
}
