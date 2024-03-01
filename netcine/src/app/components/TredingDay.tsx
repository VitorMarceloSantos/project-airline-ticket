import { Suspense } from 'react';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';

const urlTredingDay = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

export default async function TredingDay() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlTredingDay);

	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies values={{ resultData: results, type: 'treding', title: 'Mais assistidos de Hoje' }} />
			</Suspense>
		</article>
	);
}
