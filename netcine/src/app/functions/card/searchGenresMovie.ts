import { dataGenres } from '../../data/dataGenres';
import { CardGenresType } from '../../types/components/CardTypes';

const filterGenre = (genre: number): CardGenresType => {
	return dataGenres.find((genreData) => genreData.id === genre) as CardGenresType;
};

export const searchGenresMovie = (genresMovie: number[]): CardGenresType[] => {
	const genres: CardGenresType[] = [];

	genresMovie.forEach((genre) => {
		genres.push(filterGenre(genre));
	});

	return genres;
};
