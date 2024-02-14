import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';

const urlTopMovies = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';

export default async function PopularPeoples() {
	const peopleData = await RequestInformationsAPI(urlTopMovies);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies values={{ moviesData: peopleData, type: 'peoples', title: 'Populares' }} />
		</article>
	);
}
