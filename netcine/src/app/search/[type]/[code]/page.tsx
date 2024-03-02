import { RequestInformationsAPI } from '../../../../app/api/RequestInformationsAPI';
import { SkeletonCarousel } from '../../../components/SkeletonCarousel';
import { MovieOrTVDataType } from '../../../types/api/RequestAPI';
import { Suspense } from 'react';
import { ListCardsSearch } from '@/app/components/ListCardsSearch';

// Search Bar: https://api.themoviedb.org/3/search/multi?query=avatar&include_adult=false&language=en-US&page=1
type SearchPageType = {
	values: {
		type: string;
		code: string;
	};
};

const defineURLSearch = ({ values }: SearchPageType): string => {
	const { code, type } = values;
	switch (type) {
		case 'movie':
			return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${code}`;
			break;
		case 'tv':
			return `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${code}`;
			break;
		case 'searchBar':
			return `https://api.themoviedb.org/3/search/multi?query=${code}&include_adult=false&language=en-US&page=1`;
		default:
			return '';
	}
};

export default async function Page({ params }: { params: { type: string; code: string } }) {
	const { code, type } = params;
	const urlSearch = defineURLSearch({ values: { code, type } });

	// Corrigir busca na searchBar
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlSearch);
	return (
		<article>
			<Suspense fallback={<SkeletonCarousel />}>
				<div style={{ color: 'white' }}>My Post: {params.type}</div>;
				<div style={{ color: 'white' }}>My Post: {params.code}</div>;
				<ListCardsSearch values={{ results, type }} />
			</Suspense>
		</article>
	);
}
