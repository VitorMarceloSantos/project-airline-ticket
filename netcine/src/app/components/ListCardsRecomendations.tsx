'use client';

import Image from 'next/image';
import { CardBackBodyInformations } from './CardBackBodyInformations';
import ErroImagem from '@/app/images/errorVideo.png';
import { ListCardsRecomendationsType, RecomendationsMoviesOrTVsSuspenseType } from '@/app/types/components/ModalTypes';
import { lengthOverview } from '@/app/functions/modal/lengthOverview';
import { useEffect, useRef, useState } from 'react';
import { SkeletonModal } from './SkeletonModal';
import redCamCorrect from '@/app/images/redCamCorrect.png';

const CardRecomendation = ({ values }: RecomendationsMoviesOrTVsSuspenseType) => {
	const { movieOrTV, type, english_name, setList } = values;
	const URL_IMG =
		movieOrTV.poster_path === null ? ErroImagem : `https://image.tmdb.org/t/p/w500${movieOrTV.poster_path}`;

	return (
		<section className='card-header-recomendation'>
			<Image
				onLoad={() => setList((prevState) => [...prevState, 'true'])}
				className='card-recomendation-image'
				src={URL_IMG}
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

export const ListCardsRecomendations = ({ values }: ListCardsRecomendationsType) => {
	const { results, english_name, type } = values;
	const [listLoadImage, setListLoadImage] = useState<string[]>([]);
	const [isVisibleSkeleton, setIsVisibleSkeleton] = useState<boolean>(true);
	const listRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (listLoadImage.length === results.length) {
			listRef.current!.style.opacity = '1';
			setIsVisibleSkeleton(false);
		}
	}, [listLoadImage]);

	return (
		<article className='container-movies-tvs-recomendations'>
			{isVisibleSkeleton && <SkeletonModal />}
			<ul style={{ opacity: '0' }} ref={listRef}>
				{results.length !== 0 ? (
					results.map((item, index) => (
						<li key={index}>
							<CardRecomendation
								values={{
									movieOrTV: item,
									type,
									english_name,
									setList: setListLoadImage,
								}}
							/>
						</li>
					))
				) : (
					<section className='container-movie-notFound'>
						<Image
							className='img-movie-notFound'
							src={redCamCorrect}
							width={100}
							height={100}
							alt='Not Found Movies'
							priority={true}
						/>
						<h1>Nenhum Filme/Série encontrado.</h1>
					</section>
				)}
			</ul>
		</article>
	);
};
