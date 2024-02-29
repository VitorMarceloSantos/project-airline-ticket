import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';

const urlAiringToday = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';

export default async function AiringToday() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlAiringToday);

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
