import Image from 'next/image';
import { CardType } from '../types/CardTypes';

export default async function Card({ movie }: CardType): Promise<JSX.Element> {
	return (
		<div>
			<Image
				src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
				width={215}
				height={130}
				alt={movie.title}
				className='carousel-card'
			/>
		</div>
	);
}
