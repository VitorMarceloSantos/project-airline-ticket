import { Skeleton } from '@mui/material';

export const SkeletonCarousel = () => {
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
			<section className='skeleton-card-movies'>
				<ul>
					{newArray.map((index) => {
						return (
							<li key={index} style={{ margin: '0 .2rem' }}>
								<Skeleton
									className='skeleton-card-movies-setting'
									variant='rectangular'
									sx={{ backgroundColor: '#333333', borderRadius: '.2rem', width: '25vw', height: '20vh' }}
								/>
							</li>
						);
					})}
				</ul>
			</section>
		</section>
	);
};
