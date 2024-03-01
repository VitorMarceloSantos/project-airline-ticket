export type GenresType = {
	genre: string;
	code: number;
	type: string;
};

export type SideMenuType = {
	values: {
		genres: GenresType[];
		openGenre: boolean;
	};
};
