import Image from 'next/image';
import ReactPlayer from 'react-player';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import { PlayerVideoType } from '../types/components/PlayerVideoTypes';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export const PlayerVideo = ({ values }: PlayerVideoType) => {
	const { movie, urlMovie, cardSelected } = values;
	const [autoPlay, setAutoPlay] = useState<boolean>(true);
	const [soundOff, setSoundOff] = useState<boolean>(true);
	const playerVideo = useRef<ReactPlayer | undefined>(undefined);

	useEffect(() => {
		playerVideo.current?.seekTo(parseFloat('0'), 'seconds');
		setAutoPlay(false);
	}, [cardSelected]);

	return (
		<section className='carousel-card-header' onMouseEnter={() => setAutoPlay(true)}>
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
				<section className='carousel-card-video carousel-card-video-position'>
					<ReactPlayer
						url={urlMovie}
						playing={autoPlay}
						ref={playerVideo as unknown as LegacyRef<ReactPlayer> | undefined}
						width={272}
						height={255}
						muted={soundOff}
					/>
					<button
						className='
							carousel-card-back-body-buttons-btn
							carousel-card-back-body-buttons-btn-color
							carousel-card-video-position-button'
					>
						{soundOff ? (
							<VolumeOffIcon
								onClick={() => setSoundOff((prevState) => !prevState)}
								className='carousel-card-back-body-buttons-btn-text-color'
							/>
						) : (
							<VolumeUpIcon
								onClick={() => setSoundOff((prevState) => !prevState)}
								className='carousel-card-back-body-buttons-btn-text-color'
							/>
						)}
					</button>
				</section>
			)}
		</section>
	);
};
