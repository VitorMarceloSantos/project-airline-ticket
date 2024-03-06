import NowPlaying from '../components/NowPlaying';
import TopMovies from '../components/TopMovies';
import UpComing from '../components/UpComing';
import PopularMovies from '../components/PopularMovies';
import TrendingMovies from '../components/TrendingMovies';
import { randomVideo } from '../functions/PlayerVideo/randomVideo';
import { PlayerVideoBannerURL } from '../components/PlayerVideoBannerURL';
import { RequestTopMovies } from '../functions/RequestAPI/requestAPI';

export default async function Movies() {
	const results = await RequestTopMovies();
	const videoBanner = results[randomVideo(results.length - 1)];

	return (
		<main>
			<PlayerVideoBannerURL values={{ type: 'movie', videoId: videoBanner.id, img: videoBanner.backdrop_path }} />
			<TopMovies value={{ results }} />
			<NowPlaying />
			<PopularMovies />
			<UpComing />
			<TrendingMovies />
		</main>
	);
}
