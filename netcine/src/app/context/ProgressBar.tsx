/* eslint-disable complexity */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */

'use client';

import { createContext, useCallback, useState } from 'react';
import { ProgressBarContextType } from '../types/ContextProgressBar';

export const ProgressBarContext = createContext<ProgressBarContextType>({
	sliderContext: null,
	handlerSliderChange: () => {},
});

export const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
	const [sliderContext, setSliderContext] = useState<HTMLUListElement | null>(null);
	const handlerSliderChange = useCallback((newSlider: HTMLUListElement) => {
		console.log(`Context: ${newSlider}`);
		setSliderContext(newSlider);
	}, []);
	return (
		<ProgressBarContext.Provider value={{ sliderContext, handlerSliderChange }}>
			{children}
		</ProgressBarContext.Provider>
	);
};
