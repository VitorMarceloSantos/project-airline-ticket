import { Skeleton } from '@mui/material';

export const SkeletonCarousel = () => {
	const newArray = new Array(4);

	return (
		<section className='skeleton-card'>
			<section>
				<Skeleton sx={{ bgcolor: '#333333', fontSize: '1.3rem', marginBottom: '.7rem' }} variant='text' width='110px' />
			</section>
			<section className='skeleton-card-movies'>
				<ul>
					{newArray.map(() => {
						return (
							<li>
								<Skeleton className='skeleton-card-movies-setting' variant='rectangular' width={215} height={130} />
							</li>
						);
					})}
				</ul>
			</section>
		</section>
	);
};
