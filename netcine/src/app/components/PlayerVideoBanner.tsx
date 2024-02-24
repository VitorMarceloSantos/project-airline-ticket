'use client';

import ReactPlayer from 'react-player';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Image from 'next/image';
// import movie from '../videos/';

export const PlayerVideoBanner = () => {
	const [soundOff, setSoundOff] = useState<boolean>(true);
	const playerVideo = useRef<ReactPlayer | undefined>(undefined);
	const sectionImagem = useRef<HTMLImageElement | null>(null);
	const sectionVideo = useRef<HTMLImageElement>(null);
	// const [loadedPlay, setLoadedPlay] = useState<number>(0);
	const [playOn, setPlayOn] = useState<boolean>(false);
	const tv = '/lzZpWEaqzP0qVA5nkCc5ASbNcSy.jpg';
	const URL_IMG = `https://image.tmdb.org/t/p/w342${tv}`;

	useEffect(() => {
		// playerVideo.current?.seekTo(parseFloat('0'), 'seconds');
		// setPlayOn(true);
		// setSoundOff(true);
	}, []);

	useEffect(() => {
		setPlayOn(true);
		const timeoutId = setInterval(() => {
			const loaded = playerVideo.current?.getSecondsLoaded() as number;
			console.log(loaded);

			if (loaded > 5) {
				// setLoadedPlay(loaded);
				sectionImagem.current!.style.opacity = '0';
				sectionVideo.current!.style.opacity = '1';
				sectionVideo.current!.style.display = 'inline';
				clearInterval(timeoutId);
			}
		}, 1000);
	}, []);

	return (
		<section className='banner-video'>
			<Image
				className='banner-video-front'
				ref={sectionImagem}
				src={URL_IMG}
				width={215}
				height={130}
				alt={'Tv'}
				priority={true}
			/>
			{playOn && (
				<section className='banner-video-back' ref={sectionVideo}>
					<ReactPlayer
						url={
							'https://www.youtube.com/embed/THNsNv_ryyM?si=mmyV_6Hk2MKHwvbK?controls=0&amp;autoplay=1&amp;showinfo=0&amp;enablejsapi=1'
						}
						playing={playOn}
						ref={playerVideo as unknown as LegacyRef<ReactPlayer> | undefined}
						width={272}
						height={255}
						muted={soundOff}
						loop={true}
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
