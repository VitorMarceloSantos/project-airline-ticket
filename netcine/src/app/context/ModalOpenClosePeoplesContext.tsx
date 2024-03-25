import { createContext, useCallback, useContext, useState } from 'react';
import { ModalOpenClosePeoplesContextType } from '@/app/types/context/ModalOpenClosePeoplesContextType';

const initialValue: ModalOpenClosePeoplesContextType = {
	stateModalOpenClosePeoplesContext: false,
	handleModalOpenClosePeoples: () => {},
};
const ModalOpenClosePeoplesContext = createContext<ModalOpenClosePeoplesContextType>(initialValue);

export const ModalOpenClosePeoplesContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [stateModalOpenClosePeoplesContext, setStateModalOpenClosePeoplesContext] = useState<boolean>(false);
	const handleModalOpenClosePeoples = useCallback((newState: boolean) => {
		setStateModalOpenClosePeoplesContext(newState);
	}, []);
	
	return (
		<ModalOpenClosePeoplesContext.Provider
			value={{
				stateModalOpenClosePeoplesContext,
				handleModalOpenClosePeoples,
			}}
		>
			{children}
		</ModalOpenClosePeoplesContext.Provider>
	);
};

export const useModalOpenClosePeoplesContext = () => useContext(ModalOpenClosePeoplesContext);
