import { ProgressBarType } from '../types/CarouselMoviesTypes';

export const ProgressBar = ({ values }: ProgressBarType) => {
	const { progressBar } = values;
	return (
		<div className='progress-bar'>
			<div className='progress-bar-title-container'>
				<h3 className='progress-bar-title'>Top Movies</h3>
				<h3 className='progress-bar-link-1'>&gt;</h3>
				<h3 className='progress-bar-link-2 animate__animated animate__fadeInLeft'>Ver tudo &gt;</h3>
			</div>
			<div className='progress-bar-carousel' ref={progressBar}></div>
		</div>
	);
};
