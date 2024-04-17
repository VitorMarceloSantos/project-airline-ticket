import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react';

export type GenresType = {
	genre: string;
	code: string;
	type: string;
};

export type SideMenuType = {
	values: {
		genres: GenresType[];
		openGenre: boolean;
	};
};

export type ListSideMenuType = {
	values: {
		setOpenGenreMovie: Dispatch<SetStateAction<boolean>>;
		setOpenGenreSerie: Dispatch<SetStateAction<boolean>>;
		openGenreMovie: boolean;
		openGenreSerie: boolean;
	};
};

export type NavBarSearchType = {
	values: {
		isActiveSearch: boolean;
		setIsActiveSearch: Dispatch<SetStateAction<boolean>>;
		inputSearch: RefObject<HTMLInputElement>;
		textInputSearch: string;
		setTextInputSearch: Dispatch<SetStateAction<string>>;
		handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
		children: React.ReactNode;
	};
};
