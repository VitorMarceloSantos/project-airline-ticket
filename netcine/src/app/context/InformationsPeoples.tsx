import { createContext, useCallback, useContext, useState } from 'react';
import {
	InformationsPeoplesContextType,
	NewInformationsPeoplesContextType,
} from '@/app/types/context/InformationsPeoplesType';
import { INITIAL_INFORMATIONS_PEOPLE } from '@/app/constants/cardPeople';

const InformationsPeoplesContext = createContext<NewInformationsPeoplesContextType>({
	stateInformationsPeoples: INITIAL_INFORMATIONS_PEOPLE,
	handleStateChangeInformationsPeoples: () => {},
});

export const InformationsPeoplesProvider = ({ children }: { children: React.ReactNode }) => {
	const [stateInformationsPeoples, setStateInformationsPeoples] =
		useState<InformationsPeoplesContextType>(INITIAL_INFORMATIONS_PEOPLE);
	const handleStateChangeInformationsPeoples = useCallback((newInform: InformationsPeoplesContextType) => {
		setStateInformationsPeoples(newInform);
	}, []);
	
	return (
		<InformationsPeoplesContext.Provider value={{ stateInformationsPeoples, handleStateChangeInformationsPeoples }}>
			{children}
		</InformationsPeoplesContext.Provider>
	);
};

export const useInformationsPeoplesContext = () => useContext(InformationsPeoplesContext);
