import { RequestMovies } from '../src/app/api/RequestMovies';
import Home from '../src/app/page';
import { Card } from '@mui/material';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TopMovies from '../src/app/components/TopMovies';

describe('Page', () => {
	it('renders a heading', async () => {
		// render(<TopMovies />);
		// const heading = screen.getByRole('heading', { level: 1 });
		// expect(heading).toBeInTheDocument();
	});
	// test('the data is peanut butter', async () => {
	// 	// render(<TopMovies />);
	// 	const urlTopMovies =
	// 		'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';

	// 	const moviesData = await RequestMovies(urlTopMovies);
	// 	expect(moviesData).toBe('peanut butter');
	// });
});
