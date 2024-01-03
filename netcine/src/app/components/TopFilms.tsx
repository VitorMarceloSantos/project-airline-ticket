// import { NextResponse } from 'next/server';

type ResultType = {
	title: string;
	overview: string;
};
type DataType = {
	page: string;
	results: ResultType[];
};

export async function getData() {
	const res = await fetch(
		'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200',
		{
			headers: {
				accept: 'application/json',
				Authorization: process.env.DATA_API_KEY as string,
			},
		},
	);
	if (!res.ok) throw new Error('Erro no Fetch');

	const data: DataType = await res.json();

	return data.results;
}

export default async function TopFilms() {
	const topFilms = await getData();
	return (
		<>
			<h2>TopFilms</h2>
			<ul>
				{topFilms.map((films, index) => (
					<li key={index}>
						<h2>{`Nome: ${films.title}`}</h2>
					</li>
				))}
			</ul>
			<h3></h3>
		</>
	);
}
