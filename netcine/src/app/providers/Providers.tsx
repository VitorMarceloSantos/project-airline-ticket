'use client';

import { InformationsMoviesOrTVProvider, PlayerVideoProvider, SideMenuProvider, VolumeVideoProvider } from '../context';
import { ChildrenType } from '../types/components/ChildrenType';

export const Providers = ({ children }: ChildrenType) => {
	return (
		<>
			<SideMenuProvider>
				<PlayerVideoProvider>
					<VolumeVideoProvider>
						<InformationsMoviesOrTVProvider>{children}</InformationsMoviesOrTVProvider>
					</VolumeVideoProvider>
				</PlayerVideoProvider>
			</SideMenuProvider>
		</>
	);
};
