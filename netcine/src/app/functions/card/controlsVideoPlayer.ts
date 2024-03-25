import { ControlVideoPlayerType } from '@/app/types/components/CardTypes';

export const controlsVideoPlayer = ({ playerFunct, playerVideo }: ControlVideoPlayerType): void => {
	playerVideo?.contentWindow?.postMessage(`{"event":"command","func":"${playerFunct}","args":""}`, '*');
};
