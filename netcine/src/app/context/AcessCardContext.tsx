// import { createContext, useCallback, useContext, useState } from 'react';

// type AcessCardContextType = {
// 	stateAcessCardContext: string;
// 	handleAcessCard: (newState: string) => void;
// };

// const initialValue: AcessCardContextType = { stateAcessCardContext: '', handleAcessCard: () => {} };

// const AcessCardContext = createContext<AcessCardContextType>(initialValue);

// export const AcessCardContextProvider = ({ children }: { children: React.ReactNode }) => {
// 	const [stateAcessCardContext, setStateAcessCardContext] = useState<string>('');
// 	const handleAcessCard = useCallback((newState: string) => {
// 		setStateAcessCardContext(newState);
// 	}, []);
// 	return (
// 		<AcessCardContext.Provider
// 			value={{
// 				stateAcessCardContext,
// 				handleAcessCard,
// 			}}
// 		>
// 			{children}
// 		</AcessCardContext.Provider>
// 	);
// };

// export const useAcessCardContext = () => useContext(AcessCardContext);
