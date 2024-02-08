import { DataType } from '../types/api/RequestAPI';

export async function RequestInformationsAPI(url: string) {
	const res = await fetch(url, {
		headers: {
			accept: 'application/json',
			Authorization: process.env.DATA_API_KEY as string,
		},
	});
	if (!res.ok) throw new Error('Erro no Fetch');

	const data: DataType = await res.json();

	return data.results;
}
