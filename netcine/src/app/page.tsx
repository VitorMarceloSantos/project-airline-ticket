import { NavBar } from './components/NavBar';
import { SideMenu } from './components/SideMenu';
import TopMovies from './components/TopMovies';

export default function Home() {
	return (
		<main>
			<SideMenu>
				<NavBar />
				<TopMovies />
			</SideMenu>
		</main>
	);
}
