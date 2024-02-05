import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export const Home = <HomeIcon />;
export const Movies = <LocalMoviesIcon />;
export const Series = <LiveTvIcon />;

export const listIcons = [
	{ name: 'Home', component: Home },
	{ name: 'Movies', component: Movies },
	{ name: 'Series', component: Series },
];
