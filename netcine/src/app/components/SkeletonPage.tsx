import { SkeletonCarouselWithTitle } from './SkeletonCarouselWithTitle';

export const SkeletonPage = () => {
	const NUMBER_FIVE = 5;
	const newArray = new Array(NUMBER_FIVE).fill({});
	return (
		<ul style={{ marginTop: '8vh' }}>
			{newArray.map((index) => {
				return (
					<li key={index} style={{ margin: '2rem .2rem' }}>
						<SkeletonCarouselWithTitle />
					</li>
				);
			})}
		</ul>
	);
};
