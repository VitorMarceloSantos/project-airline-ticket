import { Dispatch, SetStateAction } from 'react';
import { RequestUrlPeoples } from '@/app/api/RequestUrlPeople';
import { GetUrlPeopleType } from '@/app/types/components/CardPeople';
import { INITIAL_CARD_PEOPLE } from '@/app/constants/cardPeople';
import { CardBackPeopleBodyType } from '@/app/types/components/CardBackPeopleBodyType';
import { ResultsType } from '@/app/types/components/CarouselMoviesTypes';
import { RequestPeopleMoviesAndTVs } from '@/app/api/RequestPeopleMoviesAndTVs';

const RequestAPIs = async (
	setInformationsPeople: Dispatch<SetStateAction<CardBackPeopleBodyType>>,
	setKnowFor: Dispatch<SetStateAction<ResultsType[]>>,
	peopleId: number,
) => {
	setInformationsPeople((await RequestUrlPeoples(peopleId)) as CardBackPeopleBodyType);


	// FAzer a requisição do setKnowFor quando o usuario for entrar na parte onde a setinha está


	
	setKnowFor(await RequestPeopleMoviesAndTVs(peopleId));
};

export const isExistUrlInformations = async (
	setInformationsPeople: Dispatch<SetStateAction<CardBackPeopleBodyType>>,
	peopleId: number,
	informationsPeople: CardBackPeopleBodyType,
	setKnowFor: Dispatch<SetStateAction<ResultsType[]>>,
): Promise<void> => {
	informationsPeople === INITIAL_CARD_PEOPLE && RequestAPIs(setInformationsPeople, setKnowFor, peopleId);
};

export const getUrPeople = ({ values }: GetUrlPeopleType): void => {
	const { peopleId, informationsPeople, setInformationsPeople, setKnowFor } = values;
	isExistUrlInformations(setInformationsPeople, peopleId, informationsPeople, setKnowFor);
	// setCardSelected(true);
};
