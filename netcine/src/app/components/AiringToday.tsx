import { Suspense } from 'react';
import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';

export default async function AiringToday() {
	const urlAiringToday = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlAiringToday);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies
				values={{
					resultData: results.sort(function (a, b) {
						return b.id - a.id;
					}),
					type: 'tv',
					title: 'Em Exibição Hoje',
				}}
			/>
		</article>
	);
}
