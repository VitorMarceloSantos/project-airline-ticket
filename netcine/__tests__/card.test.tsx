import '@testing-library/jest-dom';
// import * as sinon from 'sinon';
import { fireEvent, render, screen } from '@testing-library/react';
import { ResultsType } from '@/app/types/components/CarouselMoviesTypes';
import Card from '../src/app/components/Card';
import * as RequestFetch from '../src/app/api/RequestUrlVideo';
import { act } from 'react-dom/test-utils';

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
	it('should render <Card>', async () => {
		render(<Card movie={movie} />);

		// const urlTopMovies =
		// 	'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';

		// sinon.stub(RequestUrlVideo(movie.id), 'then').resolves('https://www.youtube.com/embed/PLl99DlL6b4');
		// const RequestUrlVideo = jest.fn().mockReturnValue('https://www.youtube.com/embed/PLl99DlL6b4');
		// RequestUrlVideo();
		// expect(RequestUrlVideo).toHaveBeenCalled();
		// expect(RequestUrlVideo()).toBe('https://www.youtube.com/embed/PLl99DlL6b4');

		// const MOCK_RESPONSE = {
		// 	ok: true,
		// 	status: 200,
		// 	json: async () => 'https://www.youtube.com/embed/PLl99DlL6b4',
		// } as Response;

		const imageFront = screen.getByAltText(`${movie.title} - Front`);

		expect(imageFront).toBeInTheDocument();

		const imageBack = screen.getByAltText(`${movie.title} - Back`);

		expect(imageBack).toBeInTheDocument();

		const mockFetch = jest
			.spyOn(RequestFetch, 'RequestUrlVideo')
			.mockResolvedValue('https://www.youtube.com/embed/PLl99DlL6b4');
		// const result = RequestFetch.RequestUrlVideo(movie.id);
		// expect(mockFetch).toHaveBeenCalled();
		// expect(result).resolves.toBe('https://www.youtube.com/embed/PLl99DlL6b4');

		act(() => {
			fireEvent.mouseEnter(imageFront);
		});

		// const movieVideo = document.querySelector('.carousel-card-video') as HTMLElement;
		// expect(movieVideo).toBeInTheDocument();
		expect(mockFetch).toHaveBeenCalled();
		expect(imageBack).toBeInTheDocument();

		// const movieVideo = screen.findAllByTestId('movie-video') as Promise<HTMLElement[]>;
	});
});

// export const math = (value1: number, value2: number) => {
// 	// somar = () => {
// 	// 	return value1 + value2;
// 	// }
// 	return {
// 		somar: value1 + value2,
// 	};
// };

// test('#somar', () => {
// 	const mockSomar = jest.spyOn(math, 'somar');

// 	math.somar(1, 2);
// 	expect(mockSomar).toHaveBeenCalled();
// 	expect(mockSomar).toHaveBeenCalledTimes(1);
// 	expect(mockSomar).toHaveBeenCalledWith(1, 2);
// });
