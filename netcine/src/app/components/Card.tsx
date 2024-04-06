'use client';

import { CardGenresType, CardLanguagesType, CardType } from '@/app/types/components/CardTypes';
import { searchGenresMovie } from '@/app/functions/card/searchGenresMovie';
import { filterLanguage } from '@/app/functions/card/filterLanguageMovie';
import CardGeneric from './CardGeneric';

export default function Card({ values }: CardType) {
	const { movie, type, index, title, setList } = values;
	const genres: CardGenresType[] = movie.genre_ids !== undefined ? searchGenresMovie(movie.genre_ids) : [];
	const languages: CardLanguagesType = filterLanguage(movie.original_language);
	const valuesProps = {
		movie,
		type,
		index,
		title,
		setList,
		genres,
		languages,
	};

	return <CardGeneric values={valuesProps} />;
}
