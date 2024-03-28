export const verifyQuantifyChar = (text: string, quantify: number): string => {
	if (text.length === 0) return 'Biografia Indisponível.';
	if (text.length > quantify) {
		return text.substring(0, quantify - 5) + ' ...';
	}
	return text;
};
