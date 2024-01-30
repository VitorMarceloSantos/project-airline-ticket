import { ControlVideoPlayerType } from '@/app/types/components/CardTypes';

export const controlsVideoPlayer = ({ playerFunct, playerVideo }: ControlVideoPlayerType) => {
	playerVideo?.contentWindow?.postMessage(`{"event":"command","func":"${playerFunct}","args":""}`, '*');
};
