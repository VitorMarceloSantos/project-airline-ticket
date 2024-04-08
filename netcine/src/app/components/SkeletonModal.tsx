import { SkeletonCard } from './SkeletonCard';

export const SkeletonModal = () => {
	const newArray = new Array(3).fill({});

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
