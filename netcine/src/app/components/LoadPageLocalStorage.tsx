'use client';

import { useEffect } from 'react';
import { LoadPageLocalStorageType } from '../types/components/LoadPageLocalStorageType';
import { LoadCardsLocalStorage } from './LoadCardsLocalStorage';
import { useMovieOrTVAddedContext, useMovieOrTvLikedContext } from '../context';

export const LoadPageLocalStorage = ({ value }: LoadPageLocalStorageType) => {
	const { localKey } = value;
	const { stateMovieOrTVAddedContext } = useMovieOrTVAddedContext();
	const { stateMovieOrTvLikedContext } = useMovieOrTvLikedContext();
	const stateLocalStorage = localKey === 'movies_liked' ? stateMovieOrTvLikedContext : stateMovieOrTVAddedContext;

	useEffect(() => {}, [stateMovieOrTVAddedContext, stateMovieOrTvLikedContext]);

	return <LoadCardsLocalStorage values={{ storageCards: stateLocalStorage }} />;
};
