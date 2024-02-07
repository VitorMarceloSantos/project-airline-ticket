import { SideMenuType } from '../../types/components/SideMenuType';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const createListItemCollapse = ({ values }: SideMenuType) => {
	const { genres, openGenre } = values;
	return (
		<Collapse in={openGenre} timeout='auto' unmountOnExit>
			<List component='div' disablePadding>
				{genres.map((item, index) => (
					<ListItemButton sx={{ pl: 4 }} key={index}>
						<ListItemIcon className='sidebar-icon'>
							<ArrowRightIcon />
						</ListItemIcon>
						<ListItemText primary={item} />
					</ListItemButton>
				))}
			</List>
		</Collapse>
	);
};
