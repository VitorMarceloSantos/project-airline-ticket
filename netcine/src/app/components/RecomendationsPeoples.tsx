import Image from 'next/image';
import { ResultsType } from '../types/components/CarouselMoviesTypes';
import { CardBackBodyInformations } from './CardBackBodyInformations';
import ErroImagem from '../images/errorVideo.png';


// Exportar funções e Types

type RecomendationsPeoplesType = {
	values: {
		participationsInMoviesOrTV: ResultsType[];
	};
};

type CardRecomendationType = {
	values: {
		movieOrTV: ResultsType;
	};
};

const lengthOverview = (overview: string): string => {
	const NUMBER_FORTY = 40;
	const NUMBER_TRIRTY = 30;
	const overviewSplit = overview.split(' ');
	const newOverview =
		overviewSplit.length > NUMBER_FORTY ? overviewSplit.slice(0, NUMBER_TRIRTY).join(' ').concat(' ...') : overview;
	return newOverview;
};

const CardRecomendation = ({ values }: CardRecomendationType) => {
	const { movieOrTV } = values;
	const URL_IMG = `https://image.tmdb.org/t/p/w342${movieOrTV.poster_path}`;
	return (
		<section className='card-header-recomendation'>
			<Image
				className='card-recomendation-image'
				src={movieOrTV.poster_path === null ? ErroImagem : URL_IMG}
				width={300}
				height={180}
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
export default function RecomendationsPeoples({ values }: RecomendationsPeoplesType) {
	const { participationsInMoviesOrTV } = values;

	return (
		<article className='container-movies-tvs-recomendations'>
			<ul>
				{participationsInMoviesOrTV.map((item, index) => (
					<li key={index}>
						<CardRecomendation values={{ movieOrTV: item }} />
					</li>
				))}
			</ul>
		</article>
	);
}
