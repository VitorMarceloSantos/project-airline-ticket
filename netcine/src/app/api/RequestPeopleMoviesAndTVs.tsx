import { DataTypeMoviesAndTVs } from '../types/api/RequestAPI';

export async function RequestPeopleMoviesAndTVs(id: number) {
	const url = `https://api.themoviedb.org/3/person/${id}/combined_credits?language=pt-BR`;
	const res = await fetch(url, {
		headers: {
			accept: 'application/json',
			// Authorization: process.env.DATA_API_KEY as string,
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc3ZDY5ZWQ1YWVhNTBhZWI0ZjY3MjAwZWI2N2Q5YiIsInN1YiI6IjY1ODE5ZDZkN2U0MDNkMDkyNWY1NjJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hrtuWGXYxuEm_5gwX5rqQm2ereT0CfRDkwghiA_SE0k',
		},
	});
	if (!res.ok) throw new Error('Erro no Fetch');

	const data: DataTypeMoviesAndTVs = await res.json();

	return data.cast;
}
