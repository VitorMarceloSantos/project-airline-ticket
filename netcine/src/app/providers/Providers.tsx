'use client';

import { InformationsMoviesOrTVProvider, SideMenuProvider } from '../context';
import { ChildrenType } from '../types/components/ChildrenType';

export const Providers = ({ children }: ChildrenType) => {
	return (
		<>
			<SideMenuProvider>
					<InformationsMoviesOrTVProvider>{children}</InformationsMoviesOrTVProvider>
			</SideMenuProvider>
		</>
	);
};
