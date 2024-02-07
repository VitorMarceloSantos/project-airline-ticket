import { Dispatch, SetStateAction } from 'react';

export const toggleDrawer = (
	handleStateChange: (newState: boolean) => void,
	setOpenGenreMovie: Dispatch<SetStateAction<boolean>>,
	setOpenGenreSerie: Dispatch<SetStateAction<boolean>>,
) => {
	setOpenGenreMovie(false);
	setOpenGenreSerie(false);
	handleStateChange(false);
};
