export const isExistLocalStorage = (localKey: string): boolean => {
	return localStorage.getItem(localKey) !== undefined ? true : false;
};
