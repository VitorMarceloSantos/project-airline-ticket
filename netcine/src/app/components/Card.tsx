import Image from 'next/image';
import { CardType } from '../types/CardTypes';

export default async function Card({ movie }: CardType) {
	return (
		<>
			<Image
				src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
				width={220}
				height={180}
				alt={movie.title}
			/>
			{/* <h2>{`Nome: ${movie.title}`}</h2>
			<h2>{`Detalhes: ${movie.overview}`}</h2> */}
		</>
	);
}
