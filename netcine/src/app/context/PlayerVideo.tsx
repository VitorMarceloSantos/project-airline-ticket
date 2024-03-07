import { createContext, useCallback, useContext, useState } from 'react';
import { PlayerVideoContextType } from '../types/context/PlayerVideoType';

const initialValue: PlayerVideoContextType = { statePlayerVideo: true, handleStateVideo: () => {} };

const PlayerVideo = createContext<PlayerVideoContextType>(initialValue);

export const PlayerVideoProvider = ({ children }: { children: React.ReactNode }) => {
	const [statePlayerVideo, setStatePlayerVideo] = useState<boolean>(true);
	const handleStateVideo = useCallback((newState: boolean) => {
		setStatePlayerVideo(newState);
	}, []);
	return <PlayerVideo.Provider value={{ statePlayerVideo, handleStateVideo }}>{children}</PlayerVideo.Provider>;
};

export const usePlayerVideo = () => useContext(PlayerVideo);
