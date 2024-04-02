import { CarouselMovies } from './CarouselMovies';
import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';
import { Suspense } from 'react';
import { SkeletonCarousel } from './SkeletonCarouselWithTitle';

export default async function TopSeries() {
	const urlTopSeries = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlTopSeries);

	return (
		<article className='container-movies-tvs-peoples'>
			{<CarouselMovies values={{ resultData: results, type: 'tv', title: 'Top Séries' }} />}
		</article>
	);
}
