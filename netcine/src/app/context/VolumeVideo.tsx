import { createContext, useCallback, useContext, useState } from 'react';
import { VolumeVideoContextType } from '@/app/types/context/VolumeVideoContextType';

const initialValue: VolumeVideoContextType = { stateVolumeVideo: true, handleStateVolume: () => {} };
const VolumeVideo = createContext<VolumeVideoContextType>(initialValue);

export const VolumeVideoProvider = ({ children }: { children: React.ReactNode }) => {
	const [stateVolumeVideo, setStateVolumeVideo] = useState<boolean>(true);
	const handleStateVolume = useCallback((newState: boolean) => {
		setStateVolumeVideo(newState);
	}, []);

	return <VolumeVideo.Provider value={{ stateVolumeVideo, handleStateVolume }}>{children}</VolumeVideo.Provider>;
};

export const useVolumeVideo = () => useContext(VolumeVideo);
