import { createContext, useCallback, useContext, useState } from 'react';
import { ModalOpenCloseContextType } from '@/app/types/context/ModalOpenCloseContextType';

const initialValue: ModalOpenCloseContextType = { stateModalOpenCloseContext: false, handleModalOpenClose: () => {} };
const ModalOpenCloseContext = createContext<ModalOpenCloseContextType>(initialValue);

export const ModalOpenCloseContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [stateModalOpenCloseContext, setStateModalOpenCloseContext] = useState<boolean>(false);
	const handleModalOpenClose = useCallback((newState: boolean) => {
		setStateModalOpenCloseContext(newState);
	}, []);

	return (
		<ModalOpenCloseContext.Provider
			value={{
				stateModalOpenCloseContext,
				handleModalOpenClose,
			}}
		>
			{children}
		</ModalOpenCloseContext.Provider>
	);
};

export const useModalOpenCloseContext = () => useContext(ModalOpenCloseContext);
