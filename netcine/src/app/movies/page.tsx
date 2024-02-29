import { Banner } from '../components/Banner';
import NowPlaying from '../components/NowPlaying';
import TopMovies from '../components/TopMovies';
import UpComing from '../components/UpComing';
import PopularMovies from '../components/PopularMovies';
import TrendingMovies from '../components/TrendingMovies';

export default function Movies() {
	return (
		<main>
			<Banner type={'movie'} />
			<TopMovies />
			<NowPlaying />
			<PopularMovies />
			<UpComing />
			<TrendingMovies />
		</main>
	);
}
