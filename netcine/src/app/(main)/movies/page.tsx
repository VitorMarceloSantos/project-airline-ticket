import NowPlaying from '@/app/components/NowPlaying';
import TopMovies from '@/app/components/TopMovies';
import UpComing from '@/app/components/UpComing';
import PopularMovies from '@/app/components/PopularMovies';
import TrendingMovies from '@/app/components/TrendingMovies';
import { randomVideo } from '@/app/functions/PlayerVideo/randomVideo';
import { PlayerVideoBannerURL } from '@/app/components/PlayerVideoBannerURL';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';
import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';

export default async function Movies() {
	const urlNowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlNowPlaying);
	const numberRandom = randomVideo(results.length - 1);
	const videoBanner = results[numberRandom];

	return (
		<main>
			<PlayerVideoBannerURL
				values={{
					type: 'movie',
					videoId: videoBanner.id,
					img: videoBanner.backdrop_path,
					title: videoBanner?.title as string,
					overview: videoBanner.overview,
					index: numberRandom,
				}}
			/>
			<TopMovies />
			<NowPlaying value={{ results }} />
			<PopularMovies />
			<UpComing />
			<TrendingMovies />
		</main>
	);
}
