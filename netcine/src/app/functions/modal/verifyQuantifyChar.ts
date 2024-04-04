export const verifyQuantifyChar = (text: string, quantify: number): string => {
	if (text.length === 0) return 'Biografia Indisponível.';
	if (text.length > quantify) {
		return text.substring(0, quantify - 5) + ' ...';
	}
	return text;
};

export const verifyQuantifyCharTitle = (text: string, quantify: number): string => {
	if (text === undefined) return 'Título Indisponível.'
	const textSplit = text.split(' ')
	if (textSplit.length > quantify) {
		return textSplit.slice(0, quantify).join(' ')
	}
	return text;
};

