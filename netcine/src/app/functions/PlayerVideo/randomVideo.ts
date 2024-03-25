export const randomVideo = (maxNumber: number): number => {
	return Math.floor(Math.random() * (maxNumber - 0 + 1)) + 0;
};
