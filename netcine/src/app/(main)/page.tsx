import PopularPeoples from '@/app/components/PopularPeoples';
import TopMovies from '@/app/components/TopMovies';
import TopSeries from '@/app/components/TopSeries';
import TredingDay from '@/app/components/TredingDay';
import TredingWeek from '@/app/components/TredingWeek';
import { PlayerVideoBannerURL } from '@/app/components/PlayerVideoBannerURL';
import { randomVideo } from '@/app/functions/PlayerVideo/randomVideo';
import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';

export default async function Home() {
	const urlTrendingHom = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlTrendingHom);
	const numberRandom = randomVideo(results.length - 1);
	const videoBanner = results[numberRandom];

	return (
		<main>
			<PlayerVideoBannerURL
				values={{
					type: videoBanner.media_type as string,
					videoId: videoBanner.id,
					img: videoBanner.backdrop_path,
				}}
			/>
			<TopMovies />
			<TopSeries />
			<TredingDay value={{ results }} />
			<TredingWeek />
			<PopularPeoples />
		</main>
	);
}
