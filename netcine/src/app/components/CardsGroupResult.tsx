import { Suspense } from 'react';
import { ListCardsSearch } from './ListCardsSearch';
import { PlayerVideoBannerURL } from './PlayerVideoBannerURL';
import { SkeletonCarousel } from './SkeletonCarousel';
import { randomVideo } from '@/app/functions/PlayerVideo/randomVideo';
import { CardsGroupResultType } from '@/app/types/components/CardsGroupResultTypes';

export const CardsGroupResult = ({ values }: CardsGroupResultType) => {
	const { verifyExistedPerson, type } = values;
	const numberRandom = randomVideo(verifyExistedPerson.length - 1);
	const videoBanner = verifyExistedPerson[numberRandom];
	return (
		<>
			{verifyExistedPerson.length !== 0 ? (
				<article className='list-cards'>
					<PlayerVideoBannerURL
						values={{
							type: videoBanner?.media_type !== undefined ? videoBanner?.media_type : type,
							videoId: videoBanner.id,
							img: videoBanner.backdrop_path,
							title: (videoBanner.media_type === 'movie' ? videoBanner?.title : videoBanner?.name) as string,
							overview: videoBanner.overview,
							index: numberRandom,
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
};
