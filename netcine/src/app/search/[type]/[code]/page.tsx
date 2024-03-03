import { RequestInformationsAPI } from '../../../../app/api/RequestInformationsAPI';
import { SkeletonCarousel } from '../../../components/SkeletonCarousel';
import { MovieOrTVDataType } from '../../../types/api/RequestAPI';
import { Suspense } from 'react';
import { ListCardsSearch } from '@/app/components/ListCardsSearch';
import { PlayerVideoBannerURL } from '@/app/components/PlayerVideoBannerURL';

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
		case 'tv':
			return `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${code}`;
		case 'searchBar':
			return `https://api.themoviedb.org/3/search/multi?query=${code}&include_adult=false&language=en-US&page=1`;
		default:
			return '';
	}
};

const randomVideo = (maxNumber: number) => {
	return Math.floor(Math.random() * (maxNumber - 0 + 1)) + 0;
};

export default async function Page({ params }: { params: { type: string; code: string } }) {
	const { code, type } = params;
	const urlSearch = defineURLSearch({ values: { code, type } });
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlSearch);
	const videoBanner = results[randomVideo(results.length - 1)];

	return (
		<article className='list-cards'>
			<PlayerVideoBannerURL values={{ type, videoId: videoBanner.id, img: videoBanner.backdrop_path }} />
			<Suspense fallback={<SkeletonCarousel />}>
				<h2>Resultado:</h2>
				<ListCardsSearch values={{ results, type }} />
			</Suspense>
		</article>
	);
}
