export const lengthOverview = (overview: string, lengthOverview: number = 0): string => {
	if (overview.length === 0) return 'Descrição Indisponível.';
	const overviewSplit = overview.split(' ');
	if (lengthOverview === 0) {
		const NUMBER_FORTY = 40;
		const NUMBER_TRIRTY = 30;
		const IS_TRUE = overviewSplit.slice(0, NUMBER_TRIRTY).join(' ').concat(' ...');
		const newOverview = overviewSplit.length > NUMBER_FORTY ? IS_TRUE : overview;
		return newOverview;
	}
	return overviewSplit.length > lengthOverview
		? overviewSplit.slice(0, lengthOverview).join(' ').concat(' ...')
		: overview;
};
