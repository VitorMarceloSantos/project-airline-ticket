'use client';

import { InformationsMoviesOrTVProvider, ModalMoviesProvider, SideMenuProvider } from '../context';
import { ChildrenType } from '../types/components/ChildrenType';

export const Providers = ({ children }: ChildrenType) => {
	return (
		<>
			<SideMenuProvider>
				<ModalMoviesProvider>
					<InformationsMoviesOrTVProvider>{children}</InformationsMoviesOrTVProvider>
				</ModalMoviesProvider>
			</SideMenuProvider>
		</>
	);
};
