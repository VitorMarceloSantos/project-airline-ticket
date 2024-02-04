export const stringAvatar = (name: string) => {
	return {
		sx: {
			bgcolor: '#66070E',
		},
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	};
};
