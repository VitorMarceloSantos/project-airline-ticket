import { DataVideoType } from '../types/ResquestVideoType';

export async function getVideoData(id: number): Promise<string> {
	// alterar idioma do trailer: en-us
	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
		headers: {
			accept: 'application/json',
			Authorization: process.env.DATA_API_KEY as string,
		},
	});
	if (!res.ok) throw new Error('Erro no Fetch Video');

	const data: DataVideoType = await res.json();
	// return { key: data.results[0].key, site: data.results[0].site };
	return `https://www.youtube.com/embed/${data.results[0].key}`;
}
