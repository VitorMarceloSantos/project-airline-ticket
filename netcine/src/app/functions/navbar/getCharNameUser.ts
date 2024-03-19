export const getCharNameUser = (name: string) => {
	if (name.includes(' ')) {
		return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`.toUpperCase();
	}
	return `${name[0]}${name[1]}`.toUpperCase();
};
