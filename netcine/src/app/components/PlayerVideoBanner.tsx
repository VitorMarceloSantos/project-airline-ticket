'use client';

import { useEffect, useState, useRef } from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Image from 'next/image';
import { usePlayerVideo, useVolumeVideo } from '../context';

export const PlayerVideoBanner = () => {
	const { statePlayerVideo } = usePlayerVideo();
	const { handleStateVolume, stateVolumeVideo } = useVolumeVideo();
	const [playOn, setPlayOn] = useState<boolean>(false);
	const playerVideo = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		setPlayOn(true);
	}, []);

	useEffect(() => {
		if (statePlayerVideo === true) {
			playerVideo.current?.play();
		} else {
			playerVideo.current?.pause();
		}
	}, [statePlayerVideo]);

	return (
		<section className='banner-video'>
			{playOn ? (
				<>
					<section className='banner-video-back'>
						<video preload='none' muted={stateVolumeVideo} autoPlay={true} loop={true} ref={playerVideo}>
							<source src='../../../videos/index.mp4' type='video/mp4' />
						</video>
					</section>
					<section className={'banner-video-button'}>
						<button
							className='
									carousel-card-back-body-buttons-btn
									carousel-card-back-body-buttons-btn-color'
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
				</>
			) : (
				<Image
					className='banner-video-front'
					src='/../../../images/index.jpg'
					width={1920}
					height={1080}
					alt={'Tv'}
					priority={true}
				/>
			)}
			<section className='banner-video-gradient'></section>
		</section>
	);
};
