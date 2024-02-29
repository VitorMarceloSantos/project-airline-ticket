import { createContext, useCallback, useContext, useState } from 'react';

type VolumeVideoType = {
	stateVolumeVideo: boolean;
	handleStateVolume: (newState: boolean) => void;
};

const initialValue: VolumeVideoType = { stateVolumeVideo: true, handleStateVolume: () => {} };

const VolumeVideo = createContext<VolumeVideoType>(initialValue);

export const VolumeVideoProvider = ({ children }: { children: React.ReactNode }) => {
	const [stateVolumeVideo, setStateVolumeVideo] = useState<boolean>(true);
	const handleStateVolume = useCallback((newState: boolean) => {
		setStateVolumeVideo(newState);
	}, []);
	return <VolumeVideo.Provider value={{ stateVolumeVideo, handleStateVolume }}>{children}</VolumeVideo.Provider>;
};

export const useVolumeVideo = () => useContext(VolumeVideo);
