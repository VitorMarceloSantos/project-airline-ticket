export const lengthOverview = (overview: string, lengthOverview: number = 0): string => {
	if (overview.length === 0) return 'Descrição Indisponível.';
	const overviewSplit = overview.split(' ');
	if (lengthOverview === 0) {
		const NUMBER_FORTY = 40;
		const NUMBER_TRIRTY = 30;
		const newOverview =
			overviewSplit.length > NUMBER_FORTY ? overviewSplit.slice(0, NUMBER_TRIRTY).join(' ').concat(' ...') : overview;
		return newOverview;
	}
	return overviewSplit.length > lengthOverview
		? overviewSplit.slice(0, lengthOverview).join(' ').concat(' ...')
		: overview;
};
