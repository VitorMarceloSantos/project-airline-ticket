// import { Dispatch, SetStateAction } from 'react';

export type ProgressBarContextType = {
	sliderContext: HTMLUListElement | null;
	handlerSliderChange: (newLister: HTMLUListElement) => void;
};
