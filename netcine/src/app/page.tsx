import { NavBar } from './components/NavBar';
import { SideMenu } from './components/SideMenu';
import TopMovies from './components/TopMovies';
import TopSeries from './components/TopSeries';

export default function Home() {
	return (
		<main>
			<SideMenu>
				<NavBar />
				<TopMovies />
				<TopSeries />
			</SideMenu>
		</main>
	);
}
