import { Box, Skeleton } from '@mui/material';

export const SkeletonCarousel = () => {
	return (
		<section className='skeleton-card'>
			<section>
				<Skeleton sx={{ bgcolor: '#333333', fontSize: '1.3rem', marginBottom: '.7rem' }} variant='text' width='110px' />
			</section>

			{/* Fazer um forEach */}
			<section className='skeleton-card-movies'>
				<Skeleton className='skeleton-card-movies-setting' variant='rectangular' width={215} height={130} />
				<Skeleton className='skeleton-card-movies-setting' variant='rectangular' width={215} height={130} />
				<Skeleton className='skeleton-card-movies-setting' variant='rectangular' width={215} height={130} />
				<Skeleton className='skeleton-card-movies-setting' variant='rectangular' width={215} height={130} />
				<Skeleton className='skeleton-card-movies-setting' variant='rectangular' width={215} height={130} />
			</section>
		</section>
	);
};
