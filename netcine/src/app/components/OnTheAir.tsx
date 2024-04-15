import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';

export default async function OnTheAir() {
	const urlOnTheAir = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlOnTheAir);

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
