import AiringToday from '../components/AiringToday';
import OnTheAir from '../components/OnTheAir';
import { PlayerVideoBannerURL } from '../components/PlayerVideoBannerURL';
import PopularTV from '../components/PopularTV';
import TopSeries from '../components/TopSeries';
import TrendingTVs from '../components/TrendingTVs';
import { randomVideo } from '../functions/PlayerVideo/randomVideo';
import { RequestTopSeries } from '../functions/RequestAPI/requestAPI';

export default async function Tvs() {
	const results = await RequestTopSeries();
	const videoBanner = results[randomVideo(results.length - 1)];

	return (
		<main>
			<PlayerVideoBannerURL values={{ type: 'tv', videoId: videoBanner.id, img: videoBanner.backdrop_path }} />
			<TopSeries value={{ results }} />
			<AiringToday />
			<OnTheAir />
			<PopularTV />
			<TrendingTVs />
		</main>
	);
}
