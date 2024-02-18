import { Dispatch, SetStateAction } from 'react';
import { GetUrlPeopleType } from '@/app/types/components/CardPeople';
import { INITIAL_CARD_PEOPLE } from '@/app/constants/cardPeople';
import { CardBackPeopleBodyType } from '@/app/types/components/CardBackPeopleBodyType';
import { ResultsType } from '@/app/types/components/CarouselMoviesTypes';
import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { DataTypeMoviesAndTVs } from '@/app/types/api/RequestAPI';

const RequestAPIs = async (
	setInformationsPeople: Dispatch<SetStateAction<CardBackPeopleBodyType>>,
	setKnowFor: Dispatch<SetStateAction<ResultsType[]>>,
	peopleId: number,
) => {
	const urlPeople = `https://api.themoviedb.org/3/person/${peopleId}?language=pt-BR'`;
	const dataResult = await RequestInformationsAPI<CardBackPeopleBodyType>(urlPeople);
	setInformationsPeople(dataResult);

	// FAzer a requisição do setKnowFor quando o usuario for entrar na parte onde a setinha está

	const urlCast = `https://api.themoviedb.org/3/person/${peopleId}/combined_credits?language=pt-BR`;
	const { cast } = await RequestInformationsAPI<DataTypeMoviesAndTVs>(urlCast);
	setKnowFor(cast);
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
};
