import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import Image from 'next/image';
import { CardBackBodyInformations } from './CardBackBodyInformations';
import ErroImagem from '@/app/images/errorVideo.png';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';
import { RecomendationsMoviesOrTVsType } from '@/app/types/components/ModalTypes';
import { lengthOverview } from '@/app/functions/modal/lengthOverview';

const CardRecomendation = ({ values }: RecomendationsMoviesOrTVsType) => {
	const { movieOrTV, type, english_name } = values;
	const URL_IMG = `https://image.tmdb.org/t/p/w500${movieOrTV.poster_path}`;

	return (
		<section className='card-header-recomendation'>
			<Image
				className='card-recomendation-image'
				src={movieOrTV.poster_path === null ? ErroImagem : URL_IMG}
				width={500}
				height={500}
				alt={`${type === 'movie' ? movieOrTV?.title : movieOrTV?.name}`}
				priority={true}
			/>
			<section className='card-header-recomendation-informations'>
				<CardBackBodyInformations values={{ english_name, movie: movieOrTV, type }} />
				<p className='card-header-recomendation-informations-overview'>{lengthOverview(movieOrTV.overview)}</p>
			</section>
		</section>
	);
};

export default async function RecomendationsMoviesOrTVs({ values }: RecomendationsMoviesOrTVsType) {
	const { movieOrTV, type, english_name } = values;
	const urlRecomendations = `https://api.themoviedb.org/3/${type}/${movieOrTV.id}/similar?language=en-US&page=1`;
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlRecomendations);

	return (
		<article className='container-movies-tvs-recomendations'>
			<ul>
				{results.map((item, index) => (
					<li key={index}>
						<CardRecomendation values={{ movieOrTV: item, type, english_name }} />
					</li>
				))}
			</ul>
		</article>
	);
}
