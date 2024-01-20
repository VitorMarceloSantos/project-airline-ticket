export async function getVideoData(id: number): Promise<string | void> {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: process.env.DATA_API_KEY as string,
		},
	};

	return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
		.then((response) => response.json())
		.then((response) => `https://www.youtube.com/embed/${response.results[0].key}`)
		.catch((err) => console.error(err));
}
