import { createContext, useCallback, useContext, useState } from 'react';
import { SideMenuContextType } from '@/app/types/context/SideMenuContextType';

const initialValue: SideMenuContextType = { stateSideMenu: false, handleStateChange: () => {} };
const SideMenuContext = createContext<SideMenuContextType>(initialValue);

export const SideMenuProvider = ({ children }: { children: React.ReactNode }) => {
	const [stateSideMenu, setStateSideMenu] = useState<boolean>(false);
	const handleStateChange = useCallback((newState: boolean) => {
		setStateSideMenu(newState);
	}, []);

	return <SideMenuContext.Provider value={{ stateSideMenu, handleStateChange }}>{children}</SideMenuContext.Provider>;
};

export const useSideMenuContext = () => useContext(SideMenuContext);
