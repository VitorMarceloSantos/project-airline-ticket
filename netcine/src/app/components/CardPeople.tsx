import Image from 'next/image';
import { CardPeopleType } from '../types/components/CardTypes';
import { CardBackBody } from './CardBackBody';


export default function CardPeople({people}: CardPeopleType) {
	// const { movie, type } = values;
	// const [urlMovie, setUrlMovie] = useState<string>('');
	// const [cardSelected, setCardSelected] = useState<boolean>(true);
	// const genres: CardGenresType[] = searchGenresMovie(movie.genre_ids);
	// const languages = filterLanguage(movie.original_language);

	return (
		<section
			className='carousel-card'
			// onMouseEnter={() => getUrlVideo({ values: { movieId: movie.id, urlMovie, setCardSelected, setUrlMovie } })}
			// onMouseLeave={() => setCardSelected(false)}
		>
			<section className='carousel-card-front'>
				<section className='carousel-card-header'>
					<Image
						className='carousel-card-image'
						src={`https://image.tmdb.org/t/p/w342${people.profile_path}`}
						width={215}
						height={130}
						alt={`${people.name}`}
						priority={true}
					/>
				</section>
			</section>
			<section className='carousel-card-back'>
				
				{/* <CardBackBody values={{ movie, genres, languages, type }} /> */}
			</section>
		</section>
	);
}
