// /**
//  * @jest-environment node
//  */

// import { RequestUrlVideoType } from '../../src/app/types/api/RequestUrlVideos';
// import { RequestUrlVideo } from '../../src/app/api/RequestUrlVideo';
// // https://jestjs.io/docs/configuration#testenvironment-string

// describe('Verify Function - RequestUrlVideo', () => {
// 	const MOCK_RESULT: RequestUrlVideoType = {
// 		id: 278,
// 		results: [
// 			{
// 				iso_639_1: 'en',
// 				iso_3166_1: 'US',
// 				name: 'Trailer',
// 				key: 'PLl99DlL6b4',
// 				site: 'YouTube',
// 				size: 2160,
// 				type: 'Trailer',
// 				official: true,
// 				published_at: '2021-07-27T19:59:46.000Z',
// 				id: '6100de6e22931a00297462fe',
// 			},
// 		],
// 	};

// 	const MOCK_RESPONSE = {
// 		json: async () => MOCK_RESULT,
// 	} as Response;

// 	const URL_MOVIE =
// 		'https://www.youtube.com/embed/PLl99DlL6b4?controls=0&amp;autoplay=1&amp;showinfo=0&amp;enablejsapi=1';

// 	// let MOCK_FETCH: unknown = undefined;

// 	// beforeEach(() => {
// 	// 	MOCK_FETCH = jest.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
// 	// });

// 	afterEach(() => {
// 		jest.restoreAllMocks();
// 	});

// 	it('Request URLVideo - Correct ID', async () => {
// 		const ID_CORRECT = 278;

// 		const MOCK_FETCH = jest.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
// 		const resultMock = await RequestUrlVideo(ID_CORRECT);
// 		expect(MOCK_FETCH).toHaveBeenCalled();
// 		expect(resultMock).toBe(URL_MOVIE);
// 	});

// 	it('Request URLVideo - Incorrect ID', async () => {
// 		const ID_INCORRECT = 274445432;

// 		const resultMock = await RequestUrlVideo(ID_INCORRECT);
// 		const VALUE_ERROR = 0;
// 		expect(resultMock).toBe(`error: TypeError: Cannot read properties of undefined (reading '${VALUE_ERROR}')`);
// 	});
// });
