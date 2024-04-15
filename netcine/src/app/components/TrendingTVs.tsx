import { CarouselMovies } from './CarouselMovies';
import { BannerMovieOrTvType } from '@/app/types/components/PlayerVideoBannerType';

export default async function TrendingTVs({ value }: BannerMovieOrTvType) {
	const { results } = value;

	return (
		<article className='container-movies-tvs-peoples'>
				<CarouselMovies
					values={{
						resultData: results.sort(function (a, b) {
							return a.id - b.id;
						}),
						type: 'tv',
						title: 'Tendências',
					}}
				/>
		</article>
	);
}
