import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from '../src/app/components/Card';
import * as RequestFetch from '../src/app/api/RequestUrlVideo';
import { act } from 'react-dom/test-utils';
import { movie } from '../src/app/data/_test/movie';

describe('Page', () => {
	it('renders a heading', async () => {
		// render(<TopMovies />);
		// const heading = screen.getByRole('heading', { level: 1 });
		// expect(heading).toBeInTheDocument();
	});
	it('should render <Card>', async () => {
		// https://github.com/mrdulin/react-act-examples/blob/master/sync.md
		act(() => {
			render(<Card movie={movie} />);
		});

		const imageFront = screen.getByAltText(`${movie.title} - Front`);

		expect(imageFront).toBeInTheDocument();

		const imageBack = screen.getByAltText(`${movie.title} - Back`);

		expect(imageBack).toBeInTheDocument();

		const mockFetch = jest
			.spyOn(RequestFetch, 'RequestUrlVideo')
			.mockResolvedValue('https://www.youtube.com/embed/PLl99DlL6b4');

		await act(async () => {
			fireEvent.mouseEnter(imageFront);
		});

		// Verificando Player no documento
		const videoPlayer = document.querySelector('.carousel-card-video') as HTMLElement
		expect(videoPlayer).toBeInTheDocument()
		expect(imageBack).not.toBeInTheDocument()

		await act(async () => {
			fireEvent.mouseLeave(videoPlayer);
		});
		expect(imageFront).toBeInTheDocument();

		expect(mockFetch).toHaveBeenCalled();
		
		// expect(imageBack).toBeInTheDocument()

		

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
