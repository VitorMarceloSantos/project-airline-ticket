import { SkeletonCard } from './SkeletonCard';

export const SkeletonCarouselWithOutTitle = () => {
	const NUMBER_SIX = 6;
	const newArray = new Array(NUMBER_SIX).fill({});

	return (
		<section className='skeleton-card-without'>
			<section className='skeleton-card-ul'>
				<ul>
					{newArray.map((index) => {
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
