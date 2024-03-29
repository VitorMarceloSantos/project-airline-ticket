export const getWidthElement = (barTitle: HTMLHeadingElement): number => {
	return Math.round(barTitle.getBoundingClientRect().width as number);
};
