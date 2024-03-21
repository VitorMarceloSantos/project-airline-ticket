export const isExistLocalStorage = (localKey: string) => {
	return localStorage.getItem(localKey) !== undefined ? true : false;
};
