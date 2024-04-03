import { Skeleton } from "@mui/material";

export const SkeletonCard = () => {
	return (
		<Skeleton
			className='skeleton-card-movies-setting'
			variant='rectangular'
			sx={{ backgroundColor: '#333333', borderRadius: '.2rem', width: '16vw', height: '17.5vh' }}
		/>
	);
};
