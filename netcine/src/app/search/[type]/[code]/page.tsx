import { RequestInformationsAPI } from '../../../../app/api/RequestInformationsAPI';
import { SkeletonCarousel } from '../../../components/SkeletonCarousel';
import { MovieOrTVDataType } from '../../../types/api/RequestAPI';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { type: string; code: number } }) {
	const { code, type } = params;
	const urlSearch =
		type === 'movie'
			? `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${code}`
			: `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${code}`;
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlSearch);
	return (
		<article>
			<Suspense fallback={<SkeletonCarousel />}>
				<div style={{ color: 'white' }}>My Post: {params.type}</div>;
				<div style={{ color: 'white' }}>My Post: {params.code}</div>;
			</Suspense>
		</article>
	);
}
