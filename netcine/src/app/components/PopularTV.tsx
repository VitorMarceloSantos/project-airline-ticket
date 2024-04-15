import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';

export default async function PopularTV() {
	const urlPopularTV = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlPopularTV);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies
				values={{
					resultData: results.sort(function (a, b) {
						return a.id - b.id;
					}),
					type: 'tv',
					title: 'Populares',
				}}
			/>
		</article>
	);
}
