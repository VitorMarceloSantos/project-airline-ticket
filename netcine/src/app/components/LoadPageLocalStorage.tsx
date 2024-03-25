'use client';

import { useEffect, useState } from 'react';
import { LoadPageLocalStorageType } from '@/app/types/components/LoadPageLocalStorageType';
import { LoadCardsLocalStorage } from './LoadCardsLocalStorage';
import { useMovieOrTVAddedContext, useMovieOrTvLikedContext } from '@/app/context';

export const LoadPageLocalStorage = ({ value }: LoadPageLocalStorageType) => {
	const { localKey } = value;
	const { stateMovieOrTVAddedContext } = useMovieOrTVAddedContext();
	const { stateMovieOrTvLikedContext } = useMovieOrTvLikedContext();
	const [stateLocalStorage, setStateLocalStorage] = useState(
		localKey === 'movies_liked' ? stateMovieOrTvLikedContext : stateMovieOrTVAddedContext,
	);

	useEffect(() => {
		setStateLocalStorage(localKey === 'movies_liked' ? stateMovieOrTvLikedContext : stateMovieOrTVAddedContext);
	}, [stateMovieOrTVAddedContext, stateMovieOrTvLikedContext]);

	return <LoadCardsLocalStorage values={{ storageCards: stateLocalStorage }} />;
};
