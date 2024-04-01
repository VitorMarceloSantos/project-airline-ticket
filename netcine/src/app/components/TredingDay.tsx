import { CarouselMovies } from './CarouselMovies';
import { BannerMovieOrTvType } from '@/app/types/components/PlayerVideoBannerType';

export default async function TredingDay({ value }: BannerMovieOrTvType) {
	const { results } = value;

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies values={{ resultData: results, type: 'treding', title: 'Mais assistidos de Hoje' }} />
		</article>
	);
}
