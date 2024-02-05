import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChildrenType } from '../types/components/ChildrenType';
import { listIcons } from '../constants/iconsMaterialUI';

const CreateListItem = (name: string, component: JSX.Element) => {
	return (
		<>
			<ListItemIcon>{component}</ListItemIcon>
			<ListItemText primary={name} />
		</>
	);
};

export const SideMenu: React.FC<ChildrenType> = ({ children }) => {
	return (
		<>
			<Drawer open={true} variant='temporary'>
				<Box flex={1}>
					<List>
						{listIcons.map((item, index) => (
							<ListItemButton key={index}>{CreateListItem(item.name, item.component)}</ListItemButton>
						))}
					</List>
				</Box>
				<Divider />
				{/* Generos: Ação, Comédia, Romance, Suspense, Ficção */}
			</Drawer>
			{children}
		</>
	);
};
