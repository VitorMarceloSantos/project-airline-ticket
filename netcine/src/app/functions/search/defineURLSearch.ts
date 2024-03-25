import { SearchPageType } from '@/app/types/components/SearchTypes';

export const defineURLSearch = ({ values }: SearchPageType): string => {
	const { code, type } = values;
	switch (type) {
		case 'movie':
			return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${code}`;
		case 'tv':
			return `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${code}`;
		case 'others':
			return `https://api.themoviedb.org/3/search/multi?query=${code}&include_adult=false&language=en-US&page=1`;
		default:
			return '';
	}
};
