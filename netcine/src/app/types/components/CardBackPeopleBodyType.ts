import { ResultsType } from './CarouselMoviesTypes';

export type CardBackPeopleBodyType = {
	biography: string;
	birthday: string;
	deathday: string | null;
	gender: number;
	id: number;
	imdb_id: string;
	homepage: string;
	known_for_department: string;
	name: string;
	place_of_birth: string;
	profile_path: string;
};

export type CardBackPeopleCardType = {
	values: {
		name: string;
		knowFor: ResultsType[];
	};
};
