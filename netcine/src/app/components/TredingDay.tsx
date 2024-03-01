import { Suspense } from 'react';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';
import { MovieOrTVDataType } from '../types/api/RequestAPI';

const urlTredingDay = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

export default async function TredingDay() {
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlTredingDay);

	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies values={{ resultData: results, type: 'treding', title: 'Mais assistidos de Hoje' }} />
			</Suspense>
		</article>
	);
}
