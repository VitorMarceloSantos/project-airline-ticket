export const getItemsPerScreen = (windowWidth: number): number => {
	const NUMBER_ONE_THOUSAND_TWO_HUNDRED = 1200;
	const NUMBER_SIX = 6;
	const NUMBER_NIVE_HUNDRED_NINETY = 990;
	const NUMBER_FOUR = 4;
	const NUMBER_SEVEN_HUNDRED_THIRTY = 730;
	const NUMBER_THREE = 3;
	let itemsPerScreen = 0;
	if (windowWidth >= NUMBER_ONE_THOUSAND_TWO_HUNDRED) {
		itemsPerScreen = NUMBER_SIX;
	} else if (windowWidth >= NUMBER_NIVE_HUNDRED_NINETY && windowWidth < NUMBER_ONE_THOUSAND_TWO_HUNDRED) {
		itemsPerScreen = NUMBER_FOUR;
	} else if (windowWidth >= NUMBER_SEVEN_HUNDRED_THIRTY && windowWidth < NUMBER_NIVE_HUNDRED_NINETY) {
		itemsPerScreen = NUMBER_THREE;
	} else {
		itemsPerScreen = 2;
	}
	return itemsPerScreen;
};
