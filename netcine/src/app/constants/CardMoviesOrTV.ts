export const INITIAL_CARD_MOVIE_TV = {
	backdrop_path: '',
	genre_ids: [],
	id: 0,
	original_language: '',
	overview: '',
	popularity: 0,
	poster_path: '',
	release_date: '',
	first_air_date: '',
	title: '',
	name: '',
	video: false,
	vote_average: 0,
	vote_count: 0,
	media_type: '',
};

export const INITIAL_INFORMATIONS_MOVIES_TV = {
	movieOrTV: INITIAL_CARD_MOVIE_TV,
	genres: [],
	languages: {
		iso_639_1: '',
		english_name: '',
		name: '',
	},
	url: '',
	cardSelected: true,
	type: '',
};

export const INITIAL_MOVIE_OR_TV_ADDED = [
	{
		movie: INITIAL_CARD_MOVIE_TV,
		genres: [],
		languages: {
			iso_639_1: '',
			english_name: '',
			name: '',
		},
		type: '',
		urlParams: '',
	},
];
