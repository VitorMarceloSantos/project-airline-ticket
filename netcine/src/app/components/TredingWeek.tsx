import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import { CarouselMovies } from './CarouselMovies';

const urlTredingWeek = 'https://api.themoviedb.org/3/trending/all/week?language=en-US';

export default async function TredingWeek() {
	const moviesData = await RequestInformationsAPI(urlTredingWeek);

	return (
		<article className='container-movies-tvs-peoples'>
			<CarouselMovies values={{ moviesData, type: 'treding', title: 'Mais assistidos da Semana' }} />
		</article>
	);
}
