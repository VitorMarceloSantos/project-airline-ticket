import { ResultsType } from './CarouselMoviesTypes';

export type CardBackPeopleBodyType = {
	biography: string;
	birthday: string;
	deathday: string | null;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	place_of_birth: string;
	profile_path: string;
};

export type CardBackPeopleCardType = {
	values: {
		name: string;
		informations: CardBackPeopleBodyType;
		knowFor: ResultsType[];
	};
};
