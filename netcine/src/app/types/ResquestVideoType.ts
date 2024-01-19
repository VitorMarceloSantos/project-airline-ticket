export type DataVideoType = {
	id: number;
	results: ResultVideoType[];
};

export type ResultVideoType = {
	key: string;
	site: string;
	size: number;
	official: boolean;
	id: string;
};

export type GetDataVideoType = {
	key: string;
	site: string;
};
