import Image from 'next/image';
import ReactPlayer from 'react-player';
import { LegacyRef, useEffect, useRef } from 'react';
import { PlayerVideoType } from '../types/components/PlayerVideoTypes';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ErroImagem from '../images/errorVideo.png';
import { useVolumeVideo } from '../context';

export const PlayerVideo = ({ values }: PlayerVideoType) => {
	const { handleStateVolume, stateVolumeVideo } = useVolumeVideo();
	const { movie, urlMovie, cardSelected, type } = values;
	const playerVideo = useRef<ReactPlayer | undefined>(undefined);
	const URL_IMG = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;

	useEffect(() => {
		playerVideo.current?.seekTo(parseFloat('0'), 'seconds');
	}, [cardSelected]);

	return (
		<section className='carousel-card-header'>
			{urlMovie === '' ? (
				<Image
					className='carousel-card-image'
					src={movie.poster_path === null ? ErroImagem : URL_IMG}
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
						width={272}
						height={255}
						muted={stateVolumeVideo}
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
