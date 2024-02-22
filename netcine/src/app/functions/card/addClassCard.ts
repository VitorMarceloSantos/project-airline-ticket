import { AddClassCardType } from '@/app/types/components/CardTypes';

export const addClassCard = ({ values }: AddClassCardType) => {
	const { itemsPerScreen, listCards } = values;
	let left = 0;
	for (let index = 0; index < listCards.length; index += 1) {
		if (index === 0) {
			listCards[index].classList.add('card-left');
			left += itemsPerScreen;
		} else if (index === left - 1) {
			listCards[index].classList.add('card-rigth');
		} else if (index === left) {
			listCards[index].classList.add('card-left');
			left += itemsPerScreen;
		} else {
			listCards[index].classList.add('card-center');
		}
	}
};
