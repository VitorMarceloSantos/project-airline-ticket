// import { CardBackBody } from '../../src/app/components/CardBackBody';
// import { movie } from '../../src/app/data/_test/movie';
// import { filterLanguage } from '../../src/app/functions/card/filterLanguageMovie';
// import { searchGenresMovie } from '../../src/app/functions/card/searchGenresMovie';
// import { CardGenresType, CardLanguagesType } from '../../src/app/types/components/CardTypes';
// import { render, screen } from '@testing-library/react';

// describe('should render <Card>', () => {
// 	it('Verify Informations Card', () => {
// 		const genres: CardGenresType[] = searchGenresMovie(movie.genre_ids);
// 		expect(genres).toEqual([
// 			{
// 				id: 18,
// 				name: 'Drama',
// 			},
// 			{
// 				id: 80,
// 				name: 'Crime',
// 			},
// 		]);
// 		const languages: CardLanguagesType = filterLanguage(movie.original_language);
// 		expect(languages).toEqual({
// 			iso_639_1: 'en',
// 			english_name: 'English',
// 			name: 'English',
// 		});

// 		render(<CardBackBody values={{ genres, languages, movie }} />);

// 		const informationsCard = screen.getAllByRole('paragraph');
// 		const QUANTIFY_PARAGRAPH = 4;
// 		expect(informationsCard.length).toBe(QUANTIFY_PARAGRAPH);

// 		const paragraphVoteAverage = screen.getByText('8.7');
// 		expect(paragraphVoteAverage.textContent).toBe(`${movie.vote_average.toFixed(1)}`);

// 		const paragraphRealeseDate = screen.getByText('1994');
// 		expect(paragraphRealeseDate.textContent).toBe(`${movie.release_date.split('-')[0]}`);

// 		const paragraphEnglishName = screen.getByText('English');
// 		expect(paragraphEnglishName.textContent).toBe(languages.english_name);

// 		const paragraphGenres = screen.getAllByRole('listitem');
// 		expect(paragraphGenres.length).toBe(2);
// 		paragraphGenres.forEach((genre, index) => {
// 			expect(genre.textContent?.trim()).toBe(genres[index].name.trim());
// 		});
// 	});
// });
