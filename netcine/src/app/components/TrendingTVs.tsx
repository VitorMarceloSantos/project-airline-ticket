import { Suspense } from 'react';
import { CarouselMovies } from './CarouselMovies';
import { SkeletonCarousel } from './SkeletonCarousel';
import { BannerMovieOrTvType } from '../types/components/PlayerVideoBannerType';

export default async function TrendingTVs({ value }: BannerMovieOrTvType) {
	const { results } = value;
	return (
		<article className='container-movies-tvs-peoples'>
			<Suspense fallback={<SkeletonCarousel />}>
				<CarouselMovies
					values={{
						resultData: results.sort(function (a, b) {
							return a.id - b.id;
						}),
						type: 'tv',
						title: 'Tendências',
					}}
				/>
			</Suspense>
		</article>
	);
}
