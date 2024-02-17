import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { PeopleDataType } from '../types/api/RequestAPI';
import { CarouselMovies } from './CarouselMovies';

const urlTopMovies = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';

export default async function PopularPeoples() {
	const { results } = await RequestInformationsAPI<PeopleDataType>(urlTopMovies);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies values={{ resultData: results, type: 'peoples', title: 'Populares' }} />
		</article>
	);
}
