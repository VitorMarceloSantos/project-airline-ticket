import Image from 'next/image';
import { LoadVideoType } from '../types/CardTypes';

export const LoadVideo = ({ values }: LoadVideoType) => {
	const { movie, urlMovie } = values;
	return (
		<div className='carousel-card-header'>
			{urlMovie === '' ? (
				<Image
					className='carousel-card-image'
					src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
					width={215}
					height={130}
					alt={movie.title}
				/>
			) : (
				<iframe src={urlMovie} className='carousel-card-back-video' width={215} height={130}></iframe>
			)}
		</div>
	);
};
