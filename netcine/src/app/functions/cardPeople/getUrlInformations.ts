import { Dispatch, SetStateAction } from 'react';
import { RequestUrlPeoples } from '@/app/api/RequestUrlPeople';
import { GetUrlPeopleType } from '@/app/types/components/CardPeople';
import { INITIAL_CARD_PEOPLE } from '@/app/constants/cardPeople';
import { CardBackPeopleBodyType } from '@/app/types/components/CardBackPeopleBodyType';

export const isExistUrlInformations = async (
	setInformationsPeople: Dispatch<SetStateAction<CardBackPeopleBodyType>>,
	peopleId: number,
	informationsPeople: CardBackPeopleBodyType,
): Promise<void> => {
	informationsPeople === INITIAL_CARD_PEOPLE &&
		setInformationsPeople((await RequestUrlPeoples(peopleId)) as CardBackPeopleBodyType);
};

export const getUrPeople = ({ values }: GetUrlPeopleType): void => {
	const { peopleId, informationsPeople, setInformationsPeople } = values;
	isExistUrlInformations(setInformationsPeople, peopleId, informationsPeople);
	// setCardSelected(true);
};
