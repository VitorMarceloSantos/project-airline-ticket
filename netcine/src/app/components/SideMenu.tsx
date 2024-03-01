'use client';

import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChildrenType } from '../types/components/ChildrenType';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useSideMenuContext } from '../context';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeSideBar } from '../theme/ThemeSideMenu';
import { createListItemCollapse } from '../functions/sideMenu/createListItemCollapse';
import { listMoviesGenres, listTvsGenres } from '../constants/SideMenu';
import { useRouter } from 'next/navigation';

export const SideMenu: React.FC<ChildrenType> = ({ children }) => {
	const { stateSideMenu, handleStateChange } = useSideMenuContext();
	const [openGenreMovie, setOpenGenreMovie] = useState(false);
	const [openGenreSerie, setOpenGenreSerie] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (stateSideMenu === false) {
			setOpenGenreMovie(false);
			setOpenGenreSerie(false);
		}
	}, [stateSideMenu]);

	const redirectRouterSearchGenre = (paramRoute: string) => {
		router.push(paramRoute);
		handleStateChange(false);
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
							<ListItemButton onClick={() => redirectRouterSearchGenre('/')}>
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
							{createListItemCollapse({ values: { genres: listMoviesGenres, openGenre: openGenreMovie } })}
							<ListItemButton onClick={() => setOpenGenreSerie((prevState) => !prevState)}>
								<ListItemIcon className='sidebar-icon'>
									<LiveTvIcon />
								</ListItemIcon>
								<ListItemText primary='Series' />
								{openGenreSerie ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							{createListItemCollapse({ values: { genres: listTvsGenres, openGenre: openGenreSerie } })}
						</List>
					</Box>
				</Drawer>
			</ThemeProvider>
			{children}
		</>
	);
};
