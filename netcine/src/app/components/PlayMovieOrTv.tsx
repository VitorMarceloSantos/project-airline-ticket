'use client';

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { PlayMovieOrTvType } from '@/app/types/components/PlayMovieOrTvType';

export const PlayMovieOrTv = ({ value }: PlayMovieOrTvType) => {
	const { idMovie } = value;
	const urlMovie = `https://www.youtube.com/embed/${idMovie}?rel=0&amp;controls=0&amp;autoplay=1&amp;showinfo=0&amp;enablejsapi=1`;
	const [playMovie, setPlayMovie] = useState<boolean>(false);

	useEffect(() => {
		setPlayMovie(true);
	}, []);
	return <ReactPlayer url={urlMovie} playing={playMovie} width={272} height={255} muted={false} controls={true} />;
};
