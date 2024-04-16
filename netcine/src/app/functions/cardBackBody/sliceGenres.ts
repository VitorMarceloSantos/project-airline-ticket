import { CardGenresType } from '@/app/types/components/CardTypes';

export const sliceGenres = (listGenres: CardGenresType[]) => {
	const NUMBER_THREE = 3;
	if (listGenres.length <= 2) return listGenres;
	return listGenres.slice(0, NUMBER_THREE);
};
