'use client';

import {
	// AcessCardContextProvider,
	InformationsMoviesOrTVProvider,
	PlayerVideoProvider,
	SideMenuProvider,
	VolumeVideoProvider,
} from '../context';
import { ChildrenType } from '../types/components/ChildrenType';

export const Providers = ({ children }: ChildrenType) => {
	return (
		<>
			<SideMenuProvider>
				<PlayerVideoProvider>
					{/* <AcessCardContextProvider> */}
					<VolumeVideoProvider>
						<InformationsMoviesOrTVProvider>{children}</InformationsMoviesOrTVProvider>
					</VolumeVideoProvider>
					{/* </AcessCardContextProvider> */}
				</PlayerVideoProvider>
			</SideMenuProvider>
		</>
	);
};
