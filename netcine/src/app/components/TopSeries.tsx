import { Suspense } from 'react';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';
import { MovieOrTVDataType } from '../types/api/RequestAPI';

const urlTopSeries = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';

export default async function TopSeries() {
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlTopSeries);

	return (
		<article className='container-movies-tvs-peoples'>
			{
				<Suspense fallback={<SkeletonCarousel />}>
					<CarouselMovies values={{ resultData: results, type: 'tv', title: 'Top Séries' }} />
				</Suspense>
			}
		</article>
	);
}
