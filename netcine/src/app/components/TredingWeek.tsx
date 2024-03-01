import { Suspense } from 'react';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';
import { MovieOrTVDataType } from '../types/api/RequestAPI';

const urlTredingWeek = 'https://api.themoviedb.org/3/trending/all/week?language=en-US';

export default async function TredingWeek() {
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlTredingWeek);

	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies values={{ resultData: results, type: 'treding', title: 'Mais assistidos da Semana' }} />
			</Suspense>
		</article>
	);
}
