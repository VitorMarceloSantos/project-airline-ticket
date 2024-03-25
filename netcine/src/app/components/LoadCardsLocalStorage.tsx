import { Suspense } from 'react';
import { PlayerVideoBannerURL } from './PlayerVideoBannerURL';
import { SkeletonCarousel } from './SkeletonCarousel';
import { randomVideo } from '@/app/functions/PlayerVideo/randomVideo';
import { LoadCardsLocalStorageType } from '@/app/types/components/LoadCardsLocalStorageType';
import CardStorage from './CardStorage';

export const LoadCardsLocalStorage = ({ values }: LoadCardsLocalStorageType) => {
	const { storageCards } = values;
	const videoBanner = storageCards[randomVideo(storageCards.length - 1)];

	return (
		<>
			{storageCards.length !== 0 ? (
				<article className='list-cards'>
					<PlayerVideoBannerURL
						values={{
							type: videoBanner?.type,
							videoId: videoBanner.movie.id,
							img: videoBanner.movie.backdrop_path,
						}}
					/>
					<Suspense fallback={<SkeletonCarousel />}>
						<h2>Resultado:</h2>
						<ul className='carousel-card list-cards-search'>
							{storageCards.map((item, index) => {
								return (
									<li className='carousel-item card-center' key={`${item.movie.id}-${index}`}>
										<CardStorage
											values={{
												movie: item.movie,
												type: item.type,
												index,
												title: 'storage',
												genres: item.genres,
												languages: item.languages,
												urlMovie: item.urlMovie,
											}}
										/>
									</li>
								);
							})}
						</ul>
					</Suspense>
				</article>
			) : (
				<h1 style={{ color: 'white' }}>Nenhum Filme/Série foi adicionado.</h1>
			)}
		</>
	);
};
