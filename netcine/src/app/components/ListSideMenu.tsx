import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AddIcon from '@mui/icons-material/Add';
import netCine from '/public/images/netCine.png';
import { useCreateListItemCollapse } from '../functions/sideMenu/useCreateListItemCollapse';
import { useSideMenuContext } from '../context';
import { useRouter } from 'next/navigation';
import { ListSideMenuType } from '../types/components/SideMenuType';
import { listMoviesGenres, listTvsGenres } from '../constants/SideMenu';

export const ListSideMenu = ({ values }: ListSideMenuType) => {
	const { openGenreMovie, openGenreSerie, setOpenGenreMovie, setOpenGenreSerie } = values;
	const { handleStateChange } = useSideMenuContext();
	const router = useRouter();

	const redirectRouterSearchGenre = (paramRoute: string) => {
		router.push(paramRoute);
		handleStateChange(false);
	};
	return (
		<List>
			<ListItemButton onClick={() => handleStateChange(false)}>
				<ListItemIcon
					className='
        sidebar-icon'
					sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
				>
					<Image
						className='side-menu-logo-img'
						src={netCine}
						width={70}
						height={23}
						alt='Logo Mobile'
						priority={true}
					/>
					<CloseIcon />
				</ListItemIcon>
			</ListItemButton>
			<Divider
				orientation='horizontal'
				variant='middle'
				sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '1rem 0' }}
			/>
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
			{useCreateListItemCollapse({ values: { genres: listMoviesGenres, openGenre: openGenreMovie } })}
			<ListItemButton onClick={() => setOpenGenreSerie((prevState) => !prevState)}>
				<ListItemIcon className='sidebar-icon'>
					<LiveTvIcon />
				</ListItemIcon>
				<ListItemText primary='Series' />
				{openGenreSerie ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			{useCreateListItemCollapse({ values: { genres: listTvsGenres, openGenre: openGenreSerie } })}
			<Divider
				orientation='horizontal'
				variant='middle'
				sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '1rem 0' }}
			/>
			<ListItemButton onClick={() => redirectRouterSearchGenre('/liked')}>
				<ListItemIcon className='sidebar-icon'>
					<ThumbUpAltIcon />
				</ListItemIcon>
				<ListItemText primary='Favoritos' />
			</ListItemButton>
			<ListItemButton onClick={() => redirectRouterSearchGenre('/added')}>
				<ListItemIcon className='sidebar-icon'>
					<AddIcon />
				</ListItemIcon>
				<ListItemText primary='Adicionados' />
			</ListItemButton>
		</List>
	);
};
