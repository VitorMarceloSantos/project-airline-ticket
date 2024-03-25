import { INITIAL_CARD_MOVIE_TV } from './CardMoviesOrTV';

export const INITIAL_CARD_PEOPLE = {
	biography: '',
	birthday: '',
	deathday: null,
	gender: 0,
	id: 0,
	known_for_department: '',
	name: '',
	place_of_birth: '',
	profile_path: '',
	homepage: '',
	imdb_id: '',
};

export const INITIAL_INFORMATIONS_PEOPLE = {
	informationPeople: INITIAL_CARD_PEOPLE,
	participationsInMoviesOrTV: [],
	randomMovieOrTV: { url: '', type: '', movieOrTV: INITIAL_CARD_MOVIE_TV },
};
