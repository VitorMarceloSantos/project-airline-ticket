import { RequestUrlVideoType } from '../types/api/RequestUrlVideos';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		// Authorization: process.env.DATA_API_KEY as string,
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc3ZDY5ZWQ1YWVhNTBhZWI0ZjY3MjAwZWI2N2Q5YiIsInN1YiI6IjY1ODE5ZDZkN2U0MDNkMDkyNWY1NjJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hrtuWGXYxuEm_5gwX5rqQm2ereT0CfRDkwghiA_SE0k',
	},
};

export const RequestUrlVideo = async (id: number): Promise<string | void> => {
	return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
		.then((response) => response.json())
		.then(
			(response: RequestUrlVideoType) =>
				`https://www.youtube.com/embed/${response.results[0].key}?controls=0&amp;autoplay=1&amp;showinfo=0&amp;enablejsapi=1`,
		)
		.catch((err) => `error: ${err}`);
};
