import Image from 'next/image';
import ReactPlayer from 'react-player';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import { PlayerVideoType } from '@/app/types/components/PlayerVideoTypes';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ErroImagem from '@/app/images/errorVideo.png';
import { useVolumeVideo } from '@/app/context';
import { SkeletonVideoOrImage } from './SkeletonVideoOrImage';

export const PlayerVideo = ({ values }: PlayerVideoType) => {
	const { handleStateVolume, stateVolumeVideo } = useVolumeVideo();
	const { movie, urlMovie, cardSelected, type } = values;
	const playerVideo = useRef<ReactPlayer | undefined>(undefined);
	const URL_IMG = movie.poster_path === null ? ErroImagem : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	const sectionImagem = useRef<HTMLImageElement | null>(null);
	const sectionVideo = useRef<HTMLImageElement>(null);
	const NUMBER_FIVE = 5;
	const NUMBER_ONE_THOUSAND = 1000;
	const [isVisibleImage, setIsVisibleImage] = useState<string>('inline-flex');

	useEffect(() => {
		playerVideo.current?.seekTo(parseFloat('0'), 'seconds');
	}, [cardSelected]);

	useEffect(() => {
		const timeoutId = setInterval(() => {
			const loaded = playerVideo.current?.getSecondsLoaded() as number;
			if (loaded > NUMBER_FIVE) {
				sectionImagem.current!.style.display = 'none';
				sectionVideo.current!.style.opacity = '1';
				clearInterval(timeoutId);
			}
		}, NUMBER_ONE_THOUSAND);
	}, []);

	return (
		<section className='carousel-card-header' style={{ overflow: 'hidden' }}>
			<section style={{ display: `${isVisibleImage}`, transition: 'all 250ms ease-out' }}>
				<SkeletonVideoOrImage />
			</section>
			<Image
				onLoad={() => setIsVisibleImage('none')}
				ref={sectionImagem}
				className='carousel-card-image'
				src={URL_IMG}
				width={1920}
				height={1080}
				alt={`${type === 'movie' ? movie?.title : movie?.name} - Back`}
				priority={true}
			/>

			<section className='carousel-card-video carousel-card-video-position' ref={sectionVideo}>
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
		</section>
	);
};
