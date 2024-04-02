import { Skeleton } from '@mui/material';
import { SkeletonCard } from './SkeletonCard';

export const SkeletonCarouselWithTitle = () => {
	const newArray = new Array(6).fill({});

	return (
		<section className='skeleton-card'>
			<section>
				<Skeleton
					sx={{ bgcolor: '#333333', fontSize: '1.3rem', marginBottom: '.7rem' }}
					variant='text'
					width='130px'
					height='35px'
				/>
			</section>
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
