import { createContext, useCallback, useContext, useState } from 'react';

type ModalMoviesContextType = {
	stateModalMovies: boolean;
	handleStateChange: (newState: boolean) => void;
};

const initialValue: ModalMoviesContextType = { stateModalMovies: false, handleStateChange: () => {} };

const ModalMoviesContext = createContext<ModalMoviesContextType>(initialValue);

export const ModalMoviesProvider = ({ children }: { children: React.ReactNode }) => {
	const [stateModalMovies, setStateModalMovies] = useState<boolean>(false);
	const handleStateChange = useCallback((newState: boolean) => {
		setStateModalMovies(newState);
	}, []);
	return (
		<ModalMoviesContext.Provider value={{ stateModalMovies, handleStateChange }}>
			{children}
		</ModalMoviesContext.Provider>
	);
};

export const useModalMoviesContext = () => useContext(ModalMoviesContext);
