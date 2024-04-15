import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';

export default async function UpComing() {
	const urlUpComing = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlUpComing);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies
				values={{
					resultData: results.sort(function (a, b) {
						return a.id - b.id;
					}),
					type: 'movie',
					title: 'Em Breve',
				}}
			/>
		</article>
	);
}
