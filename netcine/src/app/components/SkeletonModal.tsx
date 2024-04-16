import { SkeletonCard } from './SkeletonCard';

export const SkeletonModal = () => {
	const NUMBER_THREE = 3;
	const newArray = new Array(NUMBER_THREE).fill({});

	return (
		<section className='skeleton-card-without'>
			<section className='skeleton-card-ul'>
				<ul style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
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
