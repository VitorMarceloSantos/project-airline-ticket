import { createTheme } from '@mui/material';

export const ThemeSideBar = createTheme({
	palette: {
		primary: {
			main: '#0F0F0F',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					border: '1px solid #FFFFFF',
					backgroundColor: 'transparent',
					boxShadow: 'none',
					color: '#FFFFFF',
					fontWeight: 'bold',
					marginTop: '.5rem',
					'&&:hover': { background: '#FFFFFF', color: 'black', transition: '.5s' },
				},
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					color: '#FFFFFF',
					fontWeight: 'bold',
					textShadow: '1px 1px 1px #000',
					'&&:hover': {
						backgroundColor: '#B3B3B3',
						color: 'black',
						transition: '.5s',
						textShadow: 'none',
						// Utilizando uma classe dentro do hover para mudar a cor do icone
						'.sidebar-icon': {
							color: 'black',
						},
					},
				},
			},
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					color: '#FFFFFF',
				},
			},
		},
	},
});
