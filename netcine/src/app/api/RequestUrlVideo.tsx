import { Authorization } from '../constants/Authorization';
import { RequestUrlVideoType } from '../types/api/RequestUrlVideos';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		// Authorization: process.env.DATA_API_KEY as string,
		Authorization: Authorization,
	},
};

export const RequestUrlVideo = async (id: number, type: string): Promise<string | void> => {
	return fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`, options)
		.then((response) => response.json())
		.then(
			(response: RequestUrlVideoType) =>
				`https://www.youtube.com/embed/${response.results[0].key}?rel=0&amp;controls=0&amp;autoplay=1&amp;showinfo=0&amp;enablejsapi=1`,
		)
		.catch((err) => `error: ${err}`);
};
