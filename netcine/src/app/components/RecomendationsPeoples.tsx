import { RecomendationsPeoplesType } from '@/app/types/components/CardRecomendationType';
import { CardRecomendation } from './CardRecomendation';

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
