/* eslint-disable max-lines-per-function */
'use client';

import { useEffect, useState } from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Image from 'next/image';

export const PlayerVideoBanner = () => {
	const [soundOff, setSoundOff] = useState<boolean>(true);
	const [playOn, setPlayOn] = useState<boolean>(false);
	const tv = '/lzZpWEaqzP0qVA5nkCc5ASbNcSy.jpg';
	const URL_IMG = `https://image.tmdb.org/t/p/w342${tv}`;

	useEffect(() => {
		setPlayOn(true);
	}, []);

	return (
		<section className='banner-video'>
			{playOn ? (
				<>
					<section className='banner-video-back'>
						<video preload='none' muted={soundOff} autoPlay={true} loop={true}>
							<source src='../../../videos/tv.mp4' type='video/mp4' />
						</video>
					</section>
					<section className={'banner-video-button'}>
						<button
							className='
									carousel-card-back-body-buttons-btn
									carousel-card-back-body-buttons-btn-color'
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
				</>
			) : (
				<Image className='banner-video-front' src={URL_IMG} width={215} height={130} alt={'Tv'} priority={true} />
			)}

			{/* {playOn && (
				<section className='banner-video-back' ref={sectionVideo}>
					<ReactPlayer
						// url={
						// 	'https://www.youtube.com/embed/THNsNv_ryyM?si=mmyV_6Hk2MKHwvbK?controls=0&amp;autoplay=1&amp;showinfo=0&amp;enablejsapi=1'
						// }
						url={'../../../videos/novo.mp4'}
						playing={playOn}
						ref={playerVideo as unknown as LegacyRef<ReactPlayer> | undefined}
						width={500}
						height={255}
						muted={soundOff}
						loop={true}
					/>
					<button
						className='
          					carousel-card-back-body-buttons-btn
          					carousel-card-back-body-buttons-btn-color
          					banner-video-back-position-button'
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
			)} */}
			<section className='banner-video-gradient'></section>
		</section>
	);
};
