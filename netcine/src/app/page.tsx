import { ModalMovies } from './components/ModalMovies';
import { NavBar } from './components/NavBar';
import PopularPeoples from './components/PopularPeoples';
import { SideMenu } from './components/SideMenu';
import TopMovies from './components/TopMovies';
import TopSeries from './components/TopSeries';
import TredingDay from './components/TredingDay';
import TredingWeek from './components/TredingWeek';

export default function Home() {
	return (
		<main>
			<SideMenu>
				<NavBar />
				<ModalMovies />
				<TopMovies />
				<TopSeries />
				{/* <TredingDay />
				<TredingWeek />
				<PopularPeoples /> */}
			</SideMenu>
		</main>
	);
}
