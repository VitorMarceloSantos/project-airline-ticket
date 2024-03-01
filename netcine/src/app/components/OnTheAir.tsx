import { Suspense } from 'react';
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';
import { MovieOrTVDataType } from '../types/api/RequestAPI';

const urlOnTheAir = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1';

export default async function OnTheAir() {
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlOnTheAir);

	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies
					values={{
						resultData: results,
						type: 'tv',
						title: 'No Ar',
					}}
				/>
			</Suspense>
		</article>
	);
}
