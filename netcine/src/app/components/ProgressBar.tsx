'use client';

import { ProgressBarType } from '@/app/types/components/ProgressBarTypes';
import { useEffect, useRef, useState } from 'react';
import { getWidthElement } from '@/app/functions/progressBar/getWindthElement';
import { getWidthWindow } from '../functions/card/getWidthWindow';

export const ProgressBar = ({ values }: ProgressBarType) => {
	const { progressBar, title } = values;
	const barTitle = useRef<HTMLHeadingElement>(null);
	const barLink = useRef<HTMLHeadingElement>(null);
	const [isVisible, setIsVisible] = useState<boolean>(true);
	const NUMBER_SEVEN_HUNDRED_THIRTY = 730;

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

	useEffect(() => {
		const valueWidth = getWidthWindow();
		valueWidth <= NUMBER_SEVEN_HUNDRED_THIRTY && setIsVisible(false);
	}, []);

	return (
		<section className='progress-bar'>
			<section className='progress-bar-title-container'>
				<h2 className='progress-bar-title' ref={barTitle} onMouseEnter={() => changeCssLink()}>
					{title}
				</h2>
				{isVisible && (
					<>
						<h2 className='progress-bar-link-1'>&gt;</h2>
						<h2 className='progress-bar-link-2' ref={barLink}>
							Ver tudo &gt;
						</h2>
					</>
				)}
			</section>
			<section className='progress-bar-carousel' ref={progressBar}></section>
		</section>
	);
};
