'use client';

import { useEffect, useState } from 'react';
import { LoadPageLocalStorageType } from '@/app/types/components/LoadPageLocalStorageType';
import { LoadCardsLocalStorage } from './LoadCardsLocalStorage';
import { useMovieOrTVAddedContext, useMovieOrTvLikedContext } from '@/app/context';
import { randomVideo } from '../functions/PlayerVideo/randomVideo';

export const LoadPageLocalStorage = ({ value }: LoadPageLocalStorageType) => {
	const { localKey } = value;
	const { stateMovieOrTVAddedContext } = useMovieOrTVAddedContext();
	const { stateMovieOrTvLikedContext } = useMovieOrTvLikedContext();
	const [stateLocalStorage, setStateLocalStorage] = useState(
		localKey === 'movies_liked' ? stateMovieOrTvLikedContext : stateMovieOrTVAddedContext,
	);
	const numberRandom = randomVideo(stateLocalStorage.length - 1);

	useEffect(() => {
		setStateLocalStorage(localKey === 'movies_liked' ? stateMovieOrTvLikedContext : stateMovieOrTVAddedContext);
	}, [stateMovieOrTVAddedContext, stateMovieOrTvLikedContext]);

	return <LoadCardsLocalStorage values={{ storageCards: stateLocalStorage, numberRandom, type: localKey }} />;
};
