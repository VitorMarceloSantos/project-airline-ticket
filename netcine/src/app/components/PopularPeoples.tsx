import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import CarouselMovies from './CarouselMovies';

const urlTopMovies = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';

export default async function PopularPeoples() {
	const peopleData = await RequestInformationsAPI(urlTopMovies);

	return (
		<article>
			<h1 style={{ color: 'white', fontSize: '2rem' }}>Peoples</h1>
			{/* <CarouselMovies values={{ moviesData, type: 'movie', title: 'Top Filmes' }} /> */}
		</article>
	);
}
