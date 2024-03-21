import { Suspense } from "react";
import { ListCardsSearch } from "./ListCardsSearch";
import { PlayerVideoBannerURL } from "./PlayerVideoBannerURL";
import { SkeletonCarousel } from "./SkeletonCarousel";
import { randomVideo } from "../functions/PlayerVideo/randomVideo";
import { CardsGroupResultType } from "../types/components/CardsGroupResultTypes";

export const CardsGroupResult = ({ values }: CardsGroupResultType) => {
  const {verifyExistedPerson, type} = values
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
};
