'use client';

import { RecomendationsPeoplesType } from '@/app/types/components/CardRecomendationType';
import { CardRecomendation } from './CardRecomendation';
import { useEffect, useRef, useState } from 'react';
import { SkeletonModal } from './SkeletonModal';

export default function RecomendationsPeoples({ values }: RecomendationsPeoplesType) {
	const { participationsInMoviesOrTV } = values;
	const [listLoadImage, setListLoadImage] = useState<string[]>([]);
	const [isVisibleSkeleton, setIsVisibleSkeleton] = useState<boolean>(true);
	const listRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (listLoadImage.length === participationsInMoviesOrTV.length) {
			listRef.current!.style.opacity = '1';
			setIsVisibleSkeleton(false);
		}
	}, [listLoadImage]);

	return (
		<article className='container-movies-tvs-recomendations'>
			{isVisibleSkeleton && <SkeletonModal />}
			<ul style={{ opacity: '0' }} ref={listRef}>
				{participationsInMoviesOrTV.map((item, index) => (
					<li key={index}>
						<CardRecomendation values={{ movieOrTV: item, setList: setListLoadImage}} />
					</li>
				))}
			</ul>
		</article>
	);
}
