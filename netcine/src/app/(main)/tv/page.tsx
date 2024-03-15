import { RequestInformationsAPI } from '../../api/RequestInformationsAPI';
import AiringToday from '../../components/AiringToday';
import OnTheAir from '../../components/OnTheAir';
import { PlayerVideoBannerURL } from '../../components/PlayerVideoBannerURL';
import PopularTV from '../../components/PopularTV';
import TopSeries from '../../components/TopSeries';
import TrendingTVs from '../../components/TrendingTVs';
import { randomVideo } from '../../functions/PlayerVideo/randomVideo';
import { MovieOrTVDataType } from '../../types/api/RequestAPI';

export default async function Tvs() {
	const urlTrendingTVs = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlTrendingTVs);
	const videoBanner = results[randomVideo(results.length - 1)];

	return (
		<main>
			<PlayerVideoBannerURL values={{ type: 'tv', videoId: videoBanner.id, img: videoBanner.backdrop_path }} />
			<TopSeries />
			<AiringToday />
			<OnTheAir />
			<PopularTV />
			<TrendingTVs value={{ results }} />
		</main>
	);
}
