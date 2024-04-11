import { Skeleton } from '@mui/material';

export const SkeletonVideoOrImage = () => {
	return (
		<Skeleton
			className='skeleton-card-movies-setting'
			variant='rectangular'
			sx={{ backgroundColor: '#333333', width: '100vw', height: '100vh' }}
		/>
	);
};
