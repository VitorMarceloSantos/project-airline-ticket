'use client';

import { CardStorageType } from '@/app/types/components/CardStorage';
import CardGeneric from './CardGeneric';

export default function CardStorage({ values }: CardStorageType) {
	const { genres, languages, movie, type, urlParams, title, index, setList } = values;
	const valuesProps = {
		movie,
		type,
		index,
		title,
		setList,
		genres,
		languages,
		urlParams,
	};

	return <CardGeneric values={valuesProps} />;
}
