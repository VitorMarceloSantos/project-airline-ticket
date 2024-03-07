import { RequestInformationsAPI } from '../../../../app/api/RequestInformationsAPI';
import { SkeletonCarousel } from '../../../components/SkeletonCarousel';
import { MovieOrTVDataType } from '../../../types/api/RequestAPI';
import { Suspense } from 'react';
import { ListCardsSearch } from '@/app/components/ListCardsSearch';
import { PlayerVideoBannerURL } from '@/app/components/PlayerVideoBannerURL';
import { randomVideo } from '@/app/functions/PlayerVideo/randomVideo';
import { defineURLSearch } from '@/app/functions/search/defineURLSearch';
import { excludePersonsList } from '@/app/functions/search/excludePersonsList';

export default async function Page({ params }: { params: { type: string; code: string } }) {
	const { code, type } = params;
	const urlSearch = defineURLSearch({ values: { code, type } });
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlSearch);
	const verifyExistedPerson = type === 'others' ? excludePersonsList(results) : results;
	const videoBanner = verifyExistedPerson[randomVideo(results.length - 1)];

	return (
		<article className='list-cards'>
			<PlayerVideoBannerURL
				values={{
					type: videoBanner.media_type as string,
					videoId: videoBanner.id,
					img: videoBanner.backdrop_path,
				}}
			/>
			<Suspense fallback={<SkeletonCarousel />}>
				<h2>Resultado:</h2>
				<ListCardsSearch values={{ results: verifyExistedPerson, type }} />
			</Suspense>
		</article>
	);
}
