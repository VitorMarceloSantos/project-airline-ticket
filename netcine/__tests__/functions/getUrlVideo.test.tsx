/* eslint-disable @typescript-eslint/no-var-requires */
import { getUrlVideo } from '../../src/app/functions/card/getUrlVideo';
import '@testing-library/jest-dom';
import * as RequestFetch from '../../src/app/api/RequestUrlVideo';
// https://allmaddesigns.com/test-react-usestate-with-jest/
// https://jestjs.io/docs/jest-object#jestrequireactualmodulename

jest.mock('react', () => {
	const originalModule = jest.requireActual<typeof import('react')>('react');
	return {
		...originalModule,
		useState: jest.fn(),
	};
});

const useState = require('react').useState;
const setState = jest.fn();
const setUrl = useState.mockImplementationOnce(() => [URL_MOVIE, setState]);
const setCard = useState.mockImplementationOnce(() => [true, setState]);

const URL_MOVIE: string =
	'https://www.youtube.com/embed/PLl99DlL6b4?controls=0&amp;autoplay=1&amp;showinfo=0&amp;enablejsapi=1';
const URL_MOVIE_EMPTY: string = '';

const mockFetch = jest
	.spyOn(RequestFetch, 'RequestUrlVideo')
	.mockResolvedValue(
		'https://www.youtube.com/embed/PLl99DlL6b4?controls=0&amp;autoplay=1&amp;showinfo=0&amp;enablejsapi=1',
	);

describe('Verify Function - GetUrlVideo', () => {
	it('Verify - URL_EMPTY', async () => {
		getUrlVideo({
			values: { movieId: 278, setCardSelected: setState, setUrlMovie: setState, urlMovie: URL_MOVIE_EMPTY },
		});

		expect(setUrl).toBeTruthy();
		expect(setCard).toBeTruthy();
		expect(mockFetch).toHaveBeenCalled();
	});
	it('Verify - URL_EXIST', () => {
		getUrlVideo({
			values: { movieId: 278, setCardSelected: setState, setUrlMovie: setState, urlMovie: URL_MOVIE },
		});

		expect(setUrl).toBeTruthy();
		expect(setCard).toBeTruthy();
		expect(mockFetch).not.toHaveBeenCalled();
	});
});
