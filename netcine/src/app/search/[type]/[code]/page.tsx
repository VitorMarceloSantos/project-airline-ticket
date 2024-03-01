import { RequestInformationsAPI } from '../../../../app/api/RequestInformationsAPI';
import { SkeletonCarousel } from '../../../components/SkeletonCarousel';
import { MovieDataType } from '../../../types/api/RequestAPI';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { type: string; code: number } }) {
	// Filmes: https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28

	//Series: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10759'
	const urlAiringToday = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';
	const { results } = await RequestInformationsAPI<MovieDataType>(urlAiringToday);
	return (
		<article>
			<Suspense fallback={<SkeletonCarousel />}>
				<div style={{ color: 'white' }}>My Post: {params.type}</div>;
				<div style={{ color: 'white' }}>My Post: {params.code}</div>;
			</Suspense>
		</article>
	);
}
