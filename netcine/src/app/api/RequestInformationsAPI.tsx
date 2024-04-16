import { Authorization } from '../constants/Authorization';

export async function RequestInformationsAPI<T>(url: string): Promise<T> {
	const res = await fetch(url, {
		headers: {
			accept: 'application/json',
			// Authorization: process.env.DATA_API_KEY as string,
			Authorization: Authorization,
		},
	});

	if (!res.ok) throw new Error('Erro no Fetch');
	const data: T = await res.json();

	return data;
}
