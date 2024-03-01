import { Suspense } from 'react';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';

const urlUpComing = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export default async function UpComing() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlUpComing);

	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies
					values={{
						resultData: results.sort(function (a, b) {
							return a.id - b.id;
						}),
						type: 'movie',
						title: 'Em Breve',
					}}
				/>
			</Suspense>
		</article>
	);
}
