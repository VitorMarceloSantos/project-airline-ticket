import { SideMenuType } from '@/app/types/components/SideMenuType';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSideMenuContext } from '@/app/context';
import { useRouter } from 'next/navigation';

export const createListItemCollapse = ({ values }: SideMenuType): React.ReactElement => {
	const { genres, openGenre } = values;
	const { handleStateChange } = useSideMenuContext();
	const router = useRouter();

	const redirectRouterSearchGenre = (paramRoute: string) => {
		router.push(paramRoute);
		handleStateChange(false);
	};

	return (
		<Collapse in={openGenre} timeout='auto' unmountOnExit>
			<List component='div' disablePadding>
				{genres.map((item, index) => (
					<ListItemButton
						sx={{ pl: 4 }}
						key={index}
						onClick={() => redirectRouterSearchGenre(`/search/${item.type}/${item.code}`)}
					>
						<ListItemIcon className='sidebar-icon'>
							<ArrowRightIcon />
						</ListItemIcon>
						<ListItemText primary={item.genre} />
					</ListItemButton>
				))}
			</List>
		</Collapse>
	);
};
