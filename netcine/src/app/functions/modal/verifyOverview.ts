import { lengthOverview } from "./lengthOverview";

export const verifyOverview = (text: string): string => {
	if (text.length === 0) return 'Descrição Indisponível.';
	return lengthOverview(text, 80)
};
