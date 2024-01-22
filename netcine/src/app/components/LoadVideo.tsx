'use client';

import Image from 'next/image';
import { LoadVideoType } from '../types/CardTypes';
import ReactPlayer from 'react-player';
import { LegacyRef, useEffect, useRef, useState } from 'react';

export const LoadVideo = ({ values }: LoadVideoType) => {
	const { movie, urlMovie, cardSelected } = values;
	const [play, setPlay] = useState<boolean>(true);
	const playerVideo = useRef<ReactPlayer | undefined>(undefined);

	useEffect(() => {
		playerVideo.current?.seekTo(parseFloat('0'), 'seconds');
		setPlay(false);
	}, [cardSelected]);

	return (
		<div className='carousel-card-header' onMouseEnter={() => setPlay(true)}>
			{urlMovie === '' ? (
				<Image
					className='carousel-card-image'
					src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
					width={215}
					height={130}
					alt={movie.title}
					priority={true}
				/>
			) : (
				<>
					<div className='carousel-card-video'>
						<ReactPlayer
							url={urlMovie}
							playing={play}
							ref={playerVideo as unknown as LegacyRef<ReactPlayer> | undefined}
							// width={272}
							// height={255}
						/>
					</div>

					{/* <button onClick={() => setPlay(true)}>Play</button>
					<button onClick={() => setPlay(false)}>Stop</button> */}
				</>
			)}
		</div>
	);
};
