import { lengthOverview } from './lengthOverview';

export const verifyOverview = (text: string): string => {
	const NUMBER_EYGHTY = 80;
	if (text.length === 0) return 'Descrição Indisponível.';
	return lengthOverview(text, NUMBER_EYGHTY);
};
