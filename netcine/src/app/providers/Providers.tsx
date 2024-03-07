'use client';

import {
	InformationsMoviesOrTVProvider,
	ModalOpenCloseContextProvider,
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
					<ModalOpenCloseContextProvider>
						<VolumeVideoProvider>
							<InformationsMoviesOrTVProvider>{children}</InformationsMoviesOrTVProvider>
						</VolumeVideoProvider>
					</ModalOpenCloseContextProvider>
				</PlayerVideoProvider>
			</SideMenuProvider>
		</>
	);
};
