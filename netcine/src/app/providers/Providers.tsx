'use client';

import {
	InformationsMoviesOrTVProvider,
	InformationsPeoplesProvider,
	ModalOpenCloseContextProvider,
	ModalOpenClosePeoplesContextProvider,
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
								<ModalOpenClosePeoplesContextProvider>
									<VolumeVideoProvider>
										<InformationsPeoplesProvider>
											<InformationsMoviesOrTVProvider>{children}</InformationsMoviesOrTVProvider>
										</InformationsPeoplesProvider>
									</VolumeVideoProvider>
								</ModalOpenClosePeoplesContextProvider>
							</ModalOpenCloseContextProvider>
						</PlayerVideoProvider>
					</MovieOrTvLikedContextProvider>
				</MovieOrTVAddedContextProvider>
			</SideMenuProvider>
		</>
	);
};
