export async function RequestInformationsAPI<T>(url: string): Promise<T> {
	const res = await fetch(url, {
		headers: {
			accept: 'application/json',
			// Authorization: process.env.DATA_API_KEY as string,
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc3ZDY5ZWQ1YWVhNTBhZWI0ZjY3MjAwZWI2N2Q5YiIsInN1YiI6IjY1ODE5ZDZkN2U0MDNkMDkyNWY1NjJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hrtuWGXYxuEm_5gwX5rqQm2ereT0CfRDkwghiA_SE0k',
		},
	});
	if (!res.ok) throw new Error('Erro no Fetch');

	const data: T = await res.json();
	return data;
}
