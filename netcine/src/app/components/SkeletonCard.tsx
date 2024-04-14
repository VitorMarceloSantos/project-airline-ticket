'use client';
import { Skeleton, createTheme } from '@mui/material';
import { useMemo } from 'react';
import { BreakPoints } from '../theme/BreakPoints';

export const SkeletonCard = () => {
	const themeDisplayBreakPoints = useMemo(() => createTheme(BreakPoints()), []);
	const width_small_tablet = {
		width: '26vw',
		height: '21vh'
	};
	return (
		<Skeleton
			className='skeleton-card-movies-setting'
			variant='rectangular'
			sx={[{ backgroundColor: '#333333', borderRadius: '.2rem', width: '17.5vw', height: '18.5vh' }, {
				[themeDisplayBreakPoints.breakpoints.down('small_tablet')]: { ...width_small_tablet } }]}
		/>
	);
};
