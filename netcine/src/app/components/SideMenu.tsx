'use client';

import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChildrenType } from '../types/components/ChildrenType';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useSideMenuContext } from '../context';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeSideBar } from '../theme/ThemeSideMenu';
import { toggleDrawer } from '../functions/sideMenu/toggleDrawer';
import { createListItemCollapse } from '../functions/sideMenu/createListItemCollapse';

export const SideMenu: React.FC<ChildrenType> = ({ children }) => {
	const { stateSideMenu, handleStateChange } = useSideMenuContext();
	const [openGenreMovie, setOpenGenreMovie] = useState(false);
	const [openGenreSerie, setOpenGenreSerie] = useState(false);
	const listGenres = ['Ação', 'Comédia', 'Romance', 'Suspense', 'Ficção'];

	return (
		<>
			<ThemeProvider theme={ThemeSideBar}>
				<Drawer
					open={stateSideMenu}
					variant='temporary'
					onClose={() => toggleDrawer(handleStateChange, setOpenGenreMovie, setOpenGenreSerie)}
					sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
				>
					<Box
						sx={{
							backgroundColor: ThemeSideBar.palette.primary.main,
							height: '100%',
							width: '25vw',
						}}
					>
						<List>
							<ListItemButton onClick={() => handleStateChange(false)}>
								<ListItemIcon className='sidebar-icon'>
									<CloseIcon />
								</ListItemIcon>
							</ListItemButton>
							<Divider />
							<ListItemButton>
								<ListItemIcon className='sidebar-icon'>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText primary='Home' />
							</ListItemButton>
							<ListItemButton onClick={() => setOpenGenreMovie((prevState) => !prevState)}>
								<ListItemIcon className='sidebar-icon'>
									<LocalMoviesIcon />
								</ListItemIcon>
								<ListItemText primary='Filmes' />
								{openGenreMovie ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							{createListItemCollapse({ values: { genres: listGenres, openGenre: openGenreMovie } })}
							<ListItemButton onClick={() => setOpenGenreSerie((prevState) => !prevState)}>
								<ListItemIcon className='sidebar-icon'>
									<LiveTvIcon />
								</ListItemIcon>
								<ListItemText primary='Series' />
								{openGenreSerie ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							{createListItemCollapse({ values: { genres: listGenres, openGenre: openGenreSerie } })}
						</List>
					</Box>
				</Drawer>
			</ThemeProvider>
			{children}
		</>
	);
};
