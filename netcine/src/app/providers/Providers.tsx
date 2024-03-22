'use client';

import {
	InformationsMoviesOrTVProvider,
	InformationsPeoplesProvider,
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
									<InformationsPeoplesProvider>
										<InformationsMoviesOrTVProvider>{children}</InformationsMoviesOrTVProvider>
									</InformationsPeoplesProvider>
								</VolumeVideoProvider>
							</ModalOpenCloseContextProvider>
						</PlayerVideoProvider>
					</MovieOrTvLikedContextProvider>
				</MovieOrTVAddedContextProvider>
			</SideMenuProvider>
		</>
	);
};
