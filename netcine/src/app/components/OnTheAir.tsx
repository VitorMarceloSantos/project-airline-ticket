import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { MovieDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';

const urlOnTheAir = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1';

export default async function OnTheAir() {
	const { results } = await RequestInformationsAPI<MovieDataType>(urlOnTheAir);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies
				values={{
					resultData: results,
					type: 'tv',
					title: 'No Ar',
				}}
			/>
		</article>
	);
}
