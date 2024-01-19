import { DataType, urlVideoMovieType } from '../types/TopMoviesTypes';
import CarouselMovies from './CarouselMovies';
import { getVideoData } from './RequestVideoCard';

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

export default async function TopMovies() {
	const urlVideoMovie: urlVideoMovieType[] = [];
	const moviesData = await getData();
	moviesData.forEach(async (movie) => {
		urlVideoMovie.push({ id: movie.id, url: await getVideoData(movie.id) });
	});

	return (
		<>
			{/* <h2>Topmovies</h2> */}
			<CarouselMovies values={{ moviesData, urlVideoMovie }} />
		</>
	);
}
