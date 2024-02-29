import { createContext, useCallback, useContext, useState } from 'react';

type PlayerVideoType = {
	statePlayerVideo: boolean;
	handleStateVideo: (newState: boolean) => void;
};

const initialValue: PlayerVideoType = { statePlayerVideo: true, handleStateVideo: () => {} };

const PlayerVideo = createContext<PlayerVideoType>(initialValue);

export const PlayerVideoProvider = ({ children }: { children: React.ReactNode }) => {
	const [statePlayerVideo, setStatePlayerVideo] = useState<boolean>(true);
	const handleStateVideo = useCallback((newState: boolean) => {
		setStatePlayerVideo(newState);
	}, []);
	return <PlayerVideo.Provider value={{ statePlayerVideo, handleStateVideo }}>{children}</PlayerVideo.Provider>;
};

export const usePlayerVideo = () => useContext(PlayerVideo);
