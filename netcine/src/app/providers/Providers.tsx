'use client';

import { SideMenuProvider } from '../context';
import { ChildrenType } from '../types/components/ChildrenType';

export const Providers = ({ children }: ChildrenType) => {
	return (
		<>
			<SideMenuProvider>{children}</SideMenuProvider>
		</>
	);
};
