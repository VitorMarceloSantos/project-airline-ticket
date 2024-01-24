import { dataGenres } from '../data/dataGenres';
import { CardGenresType } from '../types/CardTypes';

const filterGenre = (genre: number) => {
	return dataGenres.find((genreData) => genreData.id === genre) as CardGenresType;
};

export const searchGenresMovie = (genresMovie: number[]) => {
	const genres: CardGenresType[] = [];

	genresMovie.forEach((genre) => {
		genres.push(filterGenre(genre));
	});

	return genres;
};
