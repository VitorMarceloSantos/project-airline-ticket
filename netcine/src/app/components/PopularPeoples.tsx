import { Suspense } from 'react';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { PeopleDataType } from '@/app/types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';

export default async function PopularPeoples() {
	const urlTopMovies = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';
	const { results } = await RequestInformationsAPI<PeopleDataType>(urlTopMovies);

	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies values={{ resultData: results, type: 'peoples', title: 'Populares' }} />
			</Suspense>
		</article>
	);
}
