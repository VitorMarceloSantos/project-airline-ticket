import { ProgressBarType } from '../types/CarouselMoviesTypes';

export const ProgressBar = ({ values }: ProgressBarType) => {
	const { progressBar } = values;
	return (
		<section className='progress-bar'>
			<section className='progress-bar-title-container'>
				<h2 className='progress-bar-title'>Top Movies</h2>
				<h2 className='progress-bar-link-1'>&gt;</h2>
				<h2 className='progress-bar-link-2 animate__animated animate__fadeInLeft'>Ver tudo &gt;</h2>
			</section>
			<section className='progress-bar-carousel' ref={progressBar}></section>
		</section>
	);
};
