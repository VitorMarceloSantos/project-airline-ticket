export const lengthOverview = (overview: string): string => {
	if (overview.length === 0) return 'Descrição Indisponível.';
	const NUMBER_FORTY = 40;
	const NUMBER_TRIRTY = 30;
	const overviewSplit = overview.split(' ');
	const newOverview =
		overviewSplit.length > NUMBER_FORTY ? overviewSplit.slice(0, NUMBER_TRIRTY).join(' ').concat(' ...') : overview;
	return newOverview;
};
