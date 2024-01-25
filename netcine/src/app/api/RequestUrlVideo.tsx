export async function RequestUrlVideo(id: number): Promise<string | void> {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			// Authorization: process.env.DATA_API_KEY as string,
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc3ZDY5ZWQ1YWVhNTBhZWI0ZjY3MjAwZWI2N2Q5YiIsInN1YiI6IjY1ODE5ZDZkN2U0MDNkMDkyNWY1NjJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hrtuWGXYxuEm_5gwX5rqQm2ereT0CfRDkwghiA_SE0k',
		},
	};

	return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
		.then((response) => response.json())
		.then((response) => `https://www.youtube.com/embed/${response.results[0].key}`)
		.catch((err) => console.error(err));
}
