'use client';

import { Box, Drawer } from '@mui/material';
import { ChildrenType } from '@/app/types/components/ChildrenType';
import { useEffect, useMemo, useState } from 'react';
import { useSideMenuContext } from '@/app/context';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeSideBar } from '@/app/theme/ThemeSideMenu';
import { BreakPoints } from '../theme/BreakPoints';
import { ListSideMenu } from './ListSideMenu';

export const SideMenu: React.FC<ChildrenType> = ({ children }) => {
	const { stateSideMenu, handleStateChange } = useSideMenuContext();
	const [openGenreMovie, setOpenGenreMovie] = useState(false);
	const [openGenreSerie, setOpenGenreSerie] = useState(false);

	useEffect(() => {
		if (stateSideMenu === false) {
			setOpenGenreMovie(false);
			setOpenGenreSerie(false);
		}
	}, [stateSideMenu]);

	const themeDisplayBreakPoints = useMemo(() => createTheme(BreakPoints()), []);
	const width_55 = {
		width: '55vw',
		height: '100%',
	};

	return (
		<>
			<ThemeProvider theme={ThemeSideBar}>
				<Drawer
					open={stateSideMenu}
					variant='temporary'
					onClose={() => handleStateChange(false)}
					sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
				>
					<Box
						sx={[
							{
								backgroundColor: ThemeSideBar.palette.primary.main,
								height: '100%',
								width: '20vw',
							},
							{ [themeDisplayBreakPoints.breakpoints.down('mobile')]: { ...width_55 } },
						]}
					>
						<ListSideMenu
							values={{
								openGenreMovie,
								openGenreSerie,
								setOpenGenreMovie,
								setOpenGenreSerie,
							}}
						/>
					</Box>
				</Drawer>
			</ThemeProvider>
			{children}
		</>
	);
};
