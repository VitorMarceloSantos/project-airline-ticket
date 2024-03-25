import { createContext, useCallback, useContext, useState } from 'react';
import {
	InformationsMoviesOrTVContextType,
	NewInformationsMoviesOrTVContextType,
} from '@/app/types/context/InformationsMoviesOrTVType';
import { INITIAL_INFORMATIONS_MOVIES_TV } from '@/app/constants/CardMoviesOrTV';

const InformationsMoviesOrTVContext = createContext<NewInformationsMoviesOrTVContextType>({
	stateInformationsMoviesOrTV: INITIAL_INFORMATIONS_MOVIES_TV,
	handleStateChangeInformationsMoviesOrTV: () => {},
});

export const InformationsMoviesOrTVProvider = ({ children }: { children: React.ReactNode }) => {
	const [stateInformationsMoviesOrTV, setStateInformationsMoviesOrTV] =
		useState<InformationsMoviesOrTVContextType>(INITIAL_INFORMATIONS_MOVIES_TV);
	const handleStateChangeInformationsMoviesOrTV = useCallback((newInform: InformationsMoviesOrTVContextType) => {
		setStateInformationsMoviesOrTV(newInform);
	}, []);

	return (
		<InformationsMoviesOrTVContext.Provider
			value={{ stateInformationsMoviesOrTV, handleStateChangeInformationsMoviesOrTV }}
		>
			{children}
		</InformationsMoviesOrTVContext.Provider>
	);
};

export const useInformationsMoviesOrTVContext = () => useContext(InformationsMoviesOrTVContext);
