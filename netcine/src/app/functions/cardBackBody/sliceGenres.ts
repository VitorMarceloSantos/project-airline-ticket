import { CardGenresType } from '@/app/types/components/CardTypes';

export const sliceGenres = (listGenres: CardGenresType[]) => {
	if (listGenres.length <= 2) return listGenres;
	return listGenres.slice(0, 3);
};
