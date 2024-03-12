'use client';

import {
	InformationsMoviesOrTVProvider,
	ModalOpenCloseContextProvider,
	MovieOrTVAddedContextProvider,
	MovieOrTvLikedContextProvider,
	PlayerVideoProvider,
	SideMenuProvider,
	VolumeVideoProvider,
} from '../context';
import { ChildrenType } from '../types/components/ChildrenType';

export const Providers = ({ children }: ChildrenType) => {
	return (
		<>
			<SideMenuProvider>
				<MovieOrTVAddedContextProvider>
					<MovieOrTvLikedContextProvider>
						<PlayerVideoProvider>
							<ModalOpenCloseContextProvider>
								<VolumeVideoProvider>
									<InformationsMoviesOrTVProvider>{children}</InformationsMoviesOrTVProvider>
								</VolumeVideoProvider>
							</ModalOpenCloseContextProvider>
						</PlayerVideoProvider>
					</MovieOrTvLikedContextProvider>
				</MovieOrTVAddedContextProvider>
			</SideMenuProvider>
		</>
	);
};
