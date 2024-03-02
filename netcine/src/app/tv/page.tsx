import AiringToday from '../components/AiringToday';
import { Banner } from '../components/Banner';
import OnTheAir from '../components/OnTheAir';
import PopularTV from '../components/PopularTV';
import TopSeries from '../components/TopSeries';
import TrendingTVs from '../components/TrendingTVs';

export default function Tvs() {
	return (
		<main>
			<Banner type={'tv'} />
			<TopSeries />
			<AiringToday />
			<OnTheAir />
			<PopularTV />
			<TrendingTVs />
		</main>
	);
}
