import { Suspense } from 'react';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';

const urlNowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export default async function NowPlaying() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlNowPlaying);

	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies
					values={{
						resultData: results.sort(function (a, b) {
							return a.id - b.id;
						}),
						type: 'movie',
						title: 'Em Exibição',
					}}
				/>
			</Suspense>
		</article>
	);
}
