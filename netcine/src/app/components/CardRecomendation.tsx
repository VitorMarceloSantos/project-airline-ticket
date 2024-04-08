import Image from 'next/image';
import { CardRecomendationType } from '@/app/types/components/CardRecomendationType';
import ErroImagem from '@/app/images/errorVideo.png';
import { CardBackBodyInformations } from './CardBackBodyInformations';
import { lengthOverview } from '@/app/functions/modal/lengthOverview';

export const CardRecomendation = ({ values }: CardRecomendationType) => {
	const { movieOrTV, setList } = values;
	const URL_IMG =
		movieOrTV.poster_path === null ? ErroImagem : `https://image.tmdb.org/t/p/w500${movieOrTV.poster_path}`;

	return (
		<section className='card-header-recomendation'>
			<Image
				onLoad={() => setList((prevState) => [...prevState, 'true'])}
				className='card-recomendation-image'
				src={URL_IMG}
				width={500}
				height={500}
				alt={`${movieOrTV.media_type === 'movie' ? movieOrTV?.title : movieOrTV?.name} - Back`}
				priority={true}
			/>
			<section className='card-header-recomendation-informations'>
				<CardBackBodyInformations
					values={{ english_name: movieOrTV.original_language, movie: movieOrTV, type: movieOrTV.media_type as string }}
				/>
				<p className='card-header-recomendation-informations-overview'>{lengthOverview(movieOrTV.overview)}</p>
			</section>
		</section>
	);
};
