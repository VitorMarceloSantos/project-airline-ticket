import Image from 'next/image';
import { CardType } from '../types/CardTypes';

export default async function Card({ movie }: CardType) {
	return (
		<>
			<Image
				src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
				width={240}
				height={180}
				alt={movie.title}
				className='carousel-card'
			/>
		</>
	);
}
