// import '@testing-library/jest-dom';
// import { fireEvent, render, screen } from '@testing-library/react';
// import Card from '../../src/app/components/Card';
// import { movie } from '../../src/app/data/_test/movie';
// import { act } from 'react-dom/test-utils';

// describe('should render <Card>', () => {
// 	beforeEach(() => {
// 		render(<Card values={{ movie, type: 'movie' }} />);
// 	});
// 	it('Verify Images', async () => {
// 		const imageFront = screen.getByAltText(`${movie.title} - Front`);
// 		expect(imageFront).toBeInTheDocument();

// 		const imageBack = screen.getByAltText(`${movie.title} - Back`);
// 		expect(imageBack).toBeInTheDocument();
// 	});
// 	it('Verify Buttons', () => {
// 		const buttonsCard = screen.getAllByRole('button');
// 		const QUANTIFY_BUTTONS = 4;
// 		expect(buttonsCard.length).toBe(QUANTIFY_BUTTONS);

// 		const buttonPlay = screen.getByLabelText('button-play');
// 		expect(buttonPlay).toBeInTheDocument();
// 		expect(buttonPlay.childElementCount).toBe(1);

// 		const buttonAdd = screen.getByLabelText('button-add');
// 		expect(buttonAdd).toBeInTheDocument();
// 		expect(buttonAdd.childElementCount).toBe(1);

// 		const buttonLike = screen.getByLabelText('button-like');
// 		expect(buttonLike).toBeInTheDocument();
// 		expect(buttonLike.childElementCount).toBe(1);

// 		const buttonArrowDown = screen.getByLabelText('button-arrow-down');
// 		expect(buttonArrowDown).toBeInTheDocument();
// 		expect(buttonArrowDown.childElementCount).toBe(1);
// 	});
// 	it('Verify Informations', () => {});

// 	it('Verify Card In', async () => {
// 		// TypeError: A dynamic import callback was invoked without --experimental-vm-modules
// 		// // Mock API Fetch
// 		// import * as RequestFetch from '../src/app/api/RequestUrlVideo';
// 		// const mockFetch = jest
// 		// 	.spyOn(RequestFetch, 'RequestUrlVideo')
// 		// 	.mockResolvedValue('https://www.youtube.com/embed/PLl99DlL6b4?controls=0&amp;autoplay=1&amp;showinfo=0&amp;enablejsapi=1');
// 		// Select Card
// 		// // https://github.com/mrdulin/react-act-examples/blob/master/sync.md
// 		// await act(async () => {
// 		// 	fireEvent.mouseEnter(imageFront);
// 		// });
// 		// // Verify Request API
// 		// expect(mockFetch).toHaveBeenCalled();
// 		// // Verify Player in document
// 		// const videoPlayer = document.querySelector('.carousel-card-video') as HTMLElement;
// 		// expect(videoPlayer).toBeInTheDocument();
// 		// expect(imageBack).not.toBeInTheDocument();
// 	});
// 	it('Verify Card Out', async () => {
// 		const imageFront = screen.getByAltText(`${movie.title} - Front`);
// 		const card = document.querySelector('.carousel-card') as HTMLElement;

// 		await act(async () => {
// 			fireEvent.mouseLeave(card);
// 		});
// 		expect(imageFront).toBeInTheDocument();
// 	});
// });
