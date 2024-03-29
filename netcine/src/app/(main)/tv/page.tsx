import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import AiringToday from '@/app/components/AiringToday';
import OnTheAir from '@/app/components/OnTheAir';
import { PlayerVideoBannerURL } from '@/app/components/PlayerVideoBannerURL';
import PopularTV from '@/app/components/PopularTV';
import TopSeries from '@/app/components/TopSeries';
import TrendingTVs from '@/app/components/TrendingTVs';
import { randomVideo } from '@/app/functions/PlayerVideo/randomVideo';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';

export default async function Tvs() {
	const urlTrendingTVs = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlTrendingTVs);
	const numberRandom = randomVideo(results.length - 1);
	const videoBanner = results[numberRandom];

	return (
		<main>
			<PlayerVideoBannerURL
				values={{
					type: 'tv',
					videoId: videoBanner.id,
					img: videoBanner.backdrop_path,
					title: videoBanner?.name as string,
					overview: videoBanner.overview,
					index: numberRandom,
				}}
			/>
			<TopSeries />
			<AiringToday />
			<OnTheAir />
			<PopularTV />
			<TrendingTVs value={{ results }} />
		</main>
	);
}
