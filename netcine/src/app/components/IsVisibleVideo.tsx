import { IconButton } from '@mui/material';
import ReactPlayer from 'react-player';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { LegacyRef } from 'react';
import { usePlayerVideo, useVolumeVideo } from '../context';
import { IsVisibleVideoType } from '../types/components/PlayerVideoBannerType';

export const IsVisibleVideo = ({ values }: IsVisibleVideoType) => {
	const { playOn, sectionVideo, URL_Video, playerVideo } = values;
	const { statePlayerVideo } = usePlayerVideo();
	const { handleStateVolume, stateVolumeVideo } = useVolumeVideo();

	return (
		<>
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
					<section className='banner-video-button'>
						<IconButton
							className='
									carousel-card-back-body-buttons-btn button-banner'
							onClick={() => handleStateVolume(!stateVolumeVideo)}
						>
							{stateVolumeVideo ? (
								<VolumeOffIcon className='button-banner-color' />
							) : (
								<VolumeUpIcon className='button-banner-color' />
							)}
						</IconButton>
					</section>
				</>
			)}
		</>
	);
};
