'use client';

import { ProgressBarType } from '@/app/types/components/ProgressBarTypes';
import { useRef } from 'react';
import { getWidthElement } from '@/app/functions/progressBar/getWindthElement';

export const ProgressBar = ({ values }: ProgressBarType) => {
	const { progressBar, title } = values;
	const barTitle = useRef<HTMLHeadingElement>(null);
	const barLink = useRef<HTMLHeadingElement>(null);

	const changeCssLink = () => {
		const widthElement: number = getWidthElement(barTitle?.current as HTMLHeadingElement);

		barLink.current?.animate(
			{
				opacity: [0, 1],
				left: [`calc(( ${widthElement} * 1px))`, `calc(( ${widthElement} * 1px) + 3.5vw)`],
			},
			{
				fill: 'forwards',
				duration: 1000,
				iterations: 1,
			},
		);
	};

	return (
		<section className='progress-bar'>
			<section className='progress-bar-title-container'>
				<h2 className='progress-bar-title' ref={barTitle} onMouseEnter={() => changeCssLink()}>
					{title}
				</h2>
				<h2 className='progress-bar-link-1'>&gt;</h2>
				<h2 className='progress-bar-link-2' ref={barLink}>
					Ver tudo &gt;
				</h2>
			</section>
			<section className='progress-bar-carousel' ref={progressBar}></section>
		</section>
	);
};
