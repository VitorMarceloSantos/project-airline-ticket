import PopularPeoples from './components/PopularPeoples';
import TopMovies from './components/TopMovies';
import TopSeries from './components/TopSeries';
import TredingDay from './components/TredingDay';
import TredingWeek from './components/TredingWeek';
import { Banner } from './components/Banner';
import { SkeletonCarousel } from './components/SkeletonCarousel';

export default function Home() {
	return (
		<main>
			<Banner type={'index'} />
			<TopMovies />
			{/* <TopSeries />
			<TredingDay />
			<TredingWeek />
			<PopularPeoples /> */}
		</main>
	);
}
