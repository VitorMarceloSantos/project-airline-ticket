'use client';

import { useEffect, useState, useRef, LegacyRef, useCallback } from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { RequestUrlVideo } from '@/app/api/RequestUrlVideo';
import { usePlayerVideo, useVolumeVideo } from '@/app/context';
import { PlayerVideoBannerURLType } from '@/app/types/components/PlayerVideoBannerType';

export const PlayerVideoBannerURL = ({ values }: PlayerVideoBannerURLType) => {
	const { type, videoId, img } = values;
	const { statePlayerVideo } = usePlayerVideo();
	const { handleStateVolume, stateVolumeVideo } = useVolumeVideo();
	const playerVideo = useRef<ReactPlayer | undefined>(undefined);
	const sectionImagem = useRef<HTMLImageElement | null>(null);
	const sectionVideo = useRef<HTMLImageElement>(null);
	const [playOn, setPlayOn] = useState<boolean>(false);
	const [URL_Video, setURL_Video] = useState<string>('');
	const URL_IMG = `https://image.tmdb.org/t/p/original${img}`;
	const NUMBER_FIVE = 5;
	const NUMBER_ONE_THOUSAND = 1000;

	const getURLVideo = useCallback(async () => {
		const URL = await RequestUrlVideo(videoId, type);
		setURL_Video(URL as string);
	}, [type, videoId]);

	useEffect(() => {
		getURLVideo();
		setPlayOn(true);
		const timeoutId = setInterval(() => {
			const loaded = playerVideo.current?.getSecondsLoaded() as number;
			if (loaded > NUMBER_FIVE) {
				sectionImagem.current!.style.opacity = '0';
				sectionVideo.current!.style.opacity = '1';
				sectionVideo.current!.style.display = 'inline';
				clearInterval(timeoutId);
			}
		}, NUMBER_ONE_THOUSAND);
	}, [getURLVideo]);

	return (
		<section className='banner-video'>
			<Image
				className='banner-video-front'
				ref={sectionImagem}
				src={URL_IMG}
				width={1920}
				height={1080}
				alt='Banner Video'
				priority={true}
			/>
			{playOn && (
				<>
					<section className='banner-video-back-url' ref={sectionVideo}>
						<ReactPlayer
							url={URL_Video}
							playing={statePlayerVideo}
							ref={playerVideo as unknown as LegacyRef<ReactPlayer> | undefined}
							muted={stateVolumeVideo}
							loop={true}
							config={{
								youtube: {
									embedOptions: { height: '1920', width: '1080' },
								},
							}}
						/>
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
			)}
		</section>
	);
};
