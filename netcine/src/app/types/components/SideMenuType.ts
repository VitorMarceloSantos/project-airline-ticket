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
