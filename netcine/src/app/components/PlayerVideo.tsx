import Image from 'next/image';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import { PlayerVideoType } from '../types/components/PlayerVideoTypes';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { controlsVideoPlayer } from '../functions/card/controlsVideoPlayer';
import useScript from '../hooks/UseScript';
import ReactPlayer from 'react-player';

export const PlayerVideo = ({ values }: PlayerVideoType) => {
	const { movie, urlMovie, cardSelected } = values;
	const [soundOff, setSoundOff] = useState<number>(1);
	const playerVideo = useRef<HTMLIFrameElement>(null);

	// useEffect(() => {
	// 	controlsVideoPlayer({ playerFunct: 'stopVideo', playerVideo: playerVideo.current as HTMLIFrameElement });
	// }, [cardSelected]);

	// useScript();

	return (
		<section className='carousel-card-header'>
			{urlMovie === '' ? (
				<Image
					className='carousel-card-image'
					src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
					width={215}
					height={130}
					alt={`${movie.title} - Back`}
					priority={true}
				/>
			) : (
				<section
					className='carousel-card-video carousel-card-video-position'
					data-testid='movie-video'
					onMouseEnter={() =>
						controlsVideoPlayer({ playerFunct: 'playVideo', playerVideo: playerVideo.current as HTMLIFrameElement })
					}
				>
					{/* <ReactPlayer
						url={urlMovie}
						playing={true}
						ref={playerVideo as unknown as LegacyRef<ReactPlayer> | undefined}
						width={272}
						height={255}
						muted={true}
					/> */}
					{/* <iframe
						src={`${urlMovie}?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1&amp;mute=${soundOff};enablejsapi=1`}
						allow='autoplay; encrypted-media'
						ref={playerVideo}
					></iframe> */}

					<div id='player-container'>
						<div id='player'></div>
					</div>

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
