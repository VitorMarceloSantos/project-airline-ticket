export const verifyQuantifyChar = (text: string): string => {
	if (text.length === 0) return 'Biografia Indisponível.';
	if (text.length > 550) {
		return text.substring(0, 545) + ' ...';
	}
	return text;
};
