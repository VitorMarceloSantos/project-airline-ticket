import { RequestInformationsAPI } from '../../../../api/RequestInformationsAPI';
import { SkeletonCarousel } from '../../../../components/SkeletonCarousel';
import { MovieOrTVDataType } from '../../../../types/api/RequestAPI';
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
	const videoBanner = verifyExistedPerson[randomVideo(verifyExistedPerson.length - 1)];

	return (
		<>
			{verifyExistedPerson.length !== 0 ? (
				<article className='list-cards'>
					<PlayerVideoBannerURL
						values={{
							type: videoBanner?.media_type !== undefined ? videoBanner?.media_type : type,
							videoId: videoBanner.id,
							img: videoBanner.backdrop_path,
						}}
					/>
					<Suspense fallback={<SkeletonCarousel />}>
						<h2>Resultado:</h2>
						<ListCardsSearch values={{ results: verifyExistedPerson, type }} />
					</Suspense>
				</article>
			) : (
				<h1 style={{ color: 'white' }}>NÃO ECONTRADO</h1>
			)}
		</>
	);
}
