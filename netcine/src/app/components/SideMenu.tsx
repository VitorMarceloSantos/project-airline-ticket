'use client';

import { Box, Collapse, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChildrenType } from '../types/components/ChildrenType';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SideMenuType } from '../types/components/NavBarTypes';
import CloseIcon from '@mui/icons-material/Close';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useSideMenuContext } from '../context';

const CreateListItemCollapse = ({ values }: SideMenuType) => {
	const { genres, openGenre } = values;
	return (
		<Collapse in={openGenre} timeout='auto' unmountOnExit>
			<List component='div' disablePadding>
				{genres.map((item, index) => (
					<ListItemButton sx={{ pl: 4 }} key={index}>
						<ListItemIcon>
							<ArrowRightIcon />
						</ListItemIcon>
						<ListItemText primary={item} />
					</ListItemButton>
				))}
			</List>
		</Collapse>
	);
};

export const SideMenu: React.FC<ChildrenType> = ({ children }) => {
	// const [openMenu, setOpenMenu] = useState(true);
	const { stateSideMenu, handleStateChange } = useSideMenuContext();
	const [openGenreMovie, setOpenGenreMovie] = useState(false);
	const [openGenreSerie, setOpenGenreSerie] = useState(false);
	const listGenres = ['Ação', 'Comédia', 'Romance', 'Suspense', 'Ficção'];

	return (
		<>
			<Drawer open={stateSideMenu} variant='temporary'>
				<Box>
					<List>
						<ListItemButton onClick={() => handleStateChange(false)}>
							<ListItemIcon>
								<CloseIcon />
							</ListItemIcon>
						</ListItemButton>
						<Divider />
						<ListItemButton>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary='Home' />
						</ListItemButton>
						<ListItemButton onClick={() => setOpenGenreMovie((prevState) => !prevState)}>
							<ListItemIcon>
								<LocalMoviesIcon />
							</ListItemIcon>
							<ListItemText primary='Filmes' />
							{openGenreMovie ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
						{CreateListItemCollapse({ values: { genres: listGenres, openGenre: openGenreMovie } })}
						<ListItemButton onClick={() => setOpenGenreSerie((prevState) => !prevState)}>
							<ListItemIcon>
								<LiveTvIcon />
							</ListItemIcon>
							<ListItemText primary='Series' />
							{openGenreMovie ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
						{CreateListItemCollapse({ values: { genres: listGenres, openGenre: openGenreSerie } })}
					</List>
				</Box>
			</Drawer>
			{children}
		</>
	);
};
