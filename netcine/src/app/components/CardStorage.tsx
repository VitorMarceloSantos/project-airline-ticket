'use client';

import { CardStorageType } from '@/app/types/components/CardStorage';
import CardGeneric from './CardGeneric';
import { Dispatch, SetStateAction } from 'react';

export default function CardStorage({ values }: CardStorageType) {
	const { genres, languages, movie, type, urlParams, title, index, setList } = values;
	const setListNotNull = setList as Dispatch<SetStateAction<string[]>>;
	const valuesProps = {
		movie,
		type,
		index,
		title,
		setList: setListNotNull,
		genres,
		languages,
		urlParams,
	};

	return <CardGeneric values={valuesProps} />;
}
