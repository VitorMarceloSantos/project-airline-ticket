/* eslint-disable react/destructuring-assignment */
import { RequestInformationsAPI } from '../api/RequestInformationsAPI';
import Image from 'next/image';
import { ResultsType } from '../types/components/CarouselMoviesTypes';
import { CardBackBodyInformations } from './CardBackBodyInformations';
import ErroImagem from '../images/errorVideo.png';
import { MovieOrTVDataType } from '../types/api/RequestAPI';

type RecomendationsMoviesOrTVsType = {
	values: {
		type: string;
		movieOrTV: ResultsType;
		english_name: string;
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

const CardRecomendation = ({ values }: RecomendationsMoviesOrTVsType) => {
	const { movieOrTV, type, english_name } = values;
	const URL_IMG = `https://image.tmdb.org/t/p/w342${movieOrTV.poster_path}`;
	return (
		<section className='card-header-recomendation'>
			<Image
				className='card-recomendation-image'
				src={movieOrTV.poster_path === null ? ErroImagem : URL_IMG}
				width={300}
				height={180}
				alt={`${type === 'movie' ? movieOrTV?.title : movieOrTV?.name} - Back`}
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
