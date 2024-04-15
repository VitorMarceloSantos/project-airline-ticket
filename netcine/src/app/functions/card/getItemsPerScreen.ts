export const getItemsPerScreen = (windowWidth: number): number => {
	const NUMBER_SIX = 6;
	const NUMBER_ONE_THOUSAND_FOUR_HUNDRED = 1440;
	const NUMBER_FIVE = 5;
	const NUMBER_FOUR = 4;
	const NUMBER_SEVEN_HUNDRED_THIRTY = 730;
	const NUMBER_FOUR_HUNDRED_THIRTY = 430;
	const NUMBER_THREE = 3;
	const NUMBER_TWO = 2;
	let itemsPerScreen = 0;
	if (windowWidth > NUMBER_ONE_THOUSAND_FOUR_HUNDRED) {
		itemsPerScreen = NUMBER_SIX;
	} else if (windowWidth >= NUMBER_ONE_THOUSAND_FOUR_HUNDRED && windowWidth <= NUMBER_ONE_THOUSAND_FOUR_HUNDRED) {
		itemsPerScreen = NUMBER_FIVE;
	} else if (windowWidth >= NUMBER_SEVEN_HUNDRED_THIRTY && windowWidth < NUMBER_ONE_THOUSAND_FOUR_HUNDRED) {
		itemsPerScreen = NUMBER_FOUR;
	} else if (windowWidth < NUMBER_SEVEN_HUNDRED_THIRTY && windowWidth > NUMBER_FOUR_HUNDRED_THIRTY) {
		itemsPerScreen = NUMBER_THREE;
	} else {
		itemsPerScreen = NUMBER_TWO;
	}
	return itemsPerScreen;
};
