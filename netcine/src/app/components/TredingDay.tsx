import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';

const urlTredingDay = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

export default async function TredingDay() {
	const moviesData = await RequestInformationsAPI(urlTredingDay);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies values={{ moviesData, type: 'treding', title: 'Mais assistidos de Hoje' }} />
		</article>
	);
}
