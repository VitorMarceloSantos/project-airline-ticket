import { RequestMovies } from '../src/app/api/RequestMovies';
import Home from '../src/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TopMovies from '../src/app/components/TopMovies';
import { CardType } from '@/app/types/components/CardTypes';
import { ResultsType } from '@/app/types/components/CarouselMoviesTypes';
import Card from '../src/app/components/Card';

const movie: ResultsType = {
	backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
	genre_ids: [18, 80],
	id: 278,
	original_language: 'en',
	original_title: 'The Shawshank Redemption',
	overview:
		'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
	popularity: 121.863,
	poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
	release_date: '1994-09-23',
	title: 'The Shawshank Redemption',
	video: false,
	vote_average: 8.7,
	vote_count: 25408,
};

describe('Page', () => {
	it('renders a heading', async () => {
		// render(<TopMovies />);
		// const heading = screen.getByRole('heading', { level: 1 });
		// expect(heading).toBeInTheDocument();
	});
	test('the data is peanut butter', async () => {
		render(<Card movie={movie} />);
		const urlTopMovies =
			'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';

		// const moviesData = await RequestMovies(urlTopMovies);
		// expect(moviesData).toBe('peanut butter');
	});
});
