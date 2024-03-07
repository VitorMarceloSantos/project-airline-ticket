import { Suspense } from 'react';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';
import { BannerMovieOrTvType } from '../types/components/PlayerVideoBannerType';

export default async function TredingDay({ value }: BannerMovieOrTvType) {
	const { results } = value;
	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies values={{ resultData: results, type: 'treding', title: 'Mais assistidos de Hoje' }} />
			</Suspense>
		</article>
	);
}
