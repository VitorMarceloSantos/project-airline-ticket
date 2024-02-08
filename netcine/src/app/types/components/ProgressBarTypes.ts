import { RefObject } from 'react';

export type ProgressBarType = {
	values: {
		progressBar: RefObject<HTMLDivElement>;
		type: string;
	};
};
