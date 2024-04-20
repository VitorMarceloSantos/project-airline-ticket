'use client';

import { useEffect, useState } from 'react';
import { SkeletonCard } from './SkeletonCard';
import { getWidthWindow } from '../functions/card/getWidthWindow';

export const SkeletonModal = () => {
	const NUMBER_THREE = 3;
	const [stateList, SetStateList] = useState(new Array(NUMBER_THREE).fill({}));

	useEffect(() => {
		const NUMBER_FOUR_HUNDRED = 430;
		const windowWidth = getWidthWindow();
		if (windowWidth <= NUMBER_FOUR_HUNDRED) SetStateList(new Array(1).fill({}));
	}, []);

	return (
		<section className='skeleton-card-without'>
			<section className='skeleton-card-ul'>
				<ul style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
					{stateList.map((index) => {
						return (
							<li key={index} style={{ margin: '0 .2rem' }}>
								<SkeletonCard />
							</li>
						);
					})}
				</ul>
			</section>
		</section>
	);
};
