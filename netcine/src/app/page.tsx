import PopularPeoples from './components/PopularPeoples';
import TopMovies from './components/TopMovies';
import TopSeries from './components/TopSeries';
import TredingDay from './components/TredingDay';
import TredingWeek from './components/TredingWeek';
import { RequestTopMovies, RequestTopSeries } from './functions/RequestAPI/requestAPI';
import { PlayerVideoBannerURL } from './components/PlayerVideoBannerURL';
import { randomVideo } from './functions/PlayerVideo/randomVideo';

export default async function Home() {
	const resultMovies = await RequestTopMovies();
	const resultSeries = await RequestTopSeries();
	const sumResults = [...resultMovies, ...resultSeries];
	const numberRandom = randomVideo(sumResults.length - 1);
	const videoBanner = sumResults[numberRandom];
	const NUMBER_NINETEEN = 19;
	return (
		<main>
			<PlayerVideoBannerURL
				values={{
					type: numberRandom <= NUMBER_NINETEEN ? 'movie' : 'tv',
					videoId: videoBanner.id,
					img: videoBanner.backdrop_path,
				}}
			/>
			<TopMovies value={{ results: resultMovies }} />
			<TopSeries value={{ results: resultSeries }} />
			<TredingDay />
			<TredingWeek />
			<PopularPeoples />
		</main>
	);
}
