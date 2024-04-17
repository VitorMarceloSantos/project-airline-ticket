declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: false; // removes breakpoint
		sm: false;
		md: false;
		lg: false;
		xl: false;
		mobile: true; // add breakpoint
		small_device: true;
		small_tablet: true;
		laptop: true;
		desktop: true;
		large_device: true;
	}
}

export const BreakPoints = () => ({
	breakpoints: {
		values: {
			mobile: 430,
			small_device: 801,
			small_tablet: 1201,
			laptop: 1440,
			desktop: 1921,
			large_device: 1921,
		},
	},
});
