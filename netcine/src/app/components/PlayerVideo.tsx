import Image from 'next/image';
import ReactPlayer from 'react-player';
import { LegacyRef, useEffect, useRef } from 'react';
import { PlayerVideoType } from '@/app/types/components/PlayerVideoTypes';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ErroImagem from '@/app/images/errorVideo.png';
import { useVolumeVideo } from '@/app/context';

export const PlayerVideo = ({ values }: PlayerVideoType) => {
	const { handleStateVolume, stateVolumeVideo } = useVolumeVideo();
	const { movie, urlMovie, cardSelected, type } = values;
	const playerVideo = useRef<ReactPlayer | undefined>(undefined);
	// const URL_IMG = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	const URL_IMG = movie.poster_path === null ? ErroImagem : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	useEffect(() => {
		playerVideo.current?.seekTo(parseFloat('0'), 'seconds');
	}, [cardSelected]);

	return (
		<section className='carousel-card-header'>
			{urlMovie === '' ? (
				<Image
					className='carousel-card-image'
					src={URL_IMG}
					width={215}
					height={130}
					alt={`${type === 'movie' ? movie?.title : movie?.name} - Back`}
					priority={true}
				/>
			) : (
				<section className='carousel-card-video carousel-card-video-position'>
					<ReactPlayer
						url={urlMovie}
						playing={cardSelected}
						ref={playerVideo as unknown as LegacyRef<ReactPlayer> | undefined}
						muted={stateVolumeVideo}
						loop={true}
						config={{
							youtube: {
								embedOptions: { height: '1920', width: '1080' },
							},
						}}
					/>
					<button
						className='
							carousel-card-back-body-buttons-btn
							carousel-card-back-body-buttons-btn-color
							carousel-card-video-position-button'
					>
						{stateVolumeVideo ? (
							<VolumeOffIcon
								onClick={() => handleStateVolume(!stateVolumeVideo)}
								className='carousel-card-back-body-buttons-btn-text-color'
							/>
						) : (
							<VolumeUpIcon
								onClick={() => handleStateVolume(!stateVolumeVideo)}
								className='carousel-card-back-body-buttons-btn-text-color'
							/>
						)}
					</button>
				</section>
			)}
		</section>
	);
};
