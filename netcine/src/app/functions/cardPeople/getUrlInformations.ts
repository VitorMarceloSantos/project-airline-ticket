import { GetUrlPeopleType } from '@/app/types/components/CardPeople';
import { INITIAL_CARD_PEOPLE } from '@/app/constants/cardPeople';
import { CardBackPeopleBodyType } from '@/app/types/components/CardBackPeopleBodyType';
import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { DataTypeMoviesAndTVs } from '@/app/types/api/RequestAPI';
import { InformationsPeoplesContextType } from '@/app/types/context/InformationsPeoplesType';

const RequestAPIs = async (
	handleStateChangeInformationsPeoples: (newInformations: InformationsPeoplesContextType) => void,
	peopleId: number,
) => {
	const urlPeople = `https://api.themoviedb.org/3/person/${peopleId}?language=pt-BR`;
	const urlCast = `https://api.themoviedb.org/3/person/${peopleId}/combined_credits?language=pt-BR`;
	const dataResult = await RequestInformationsAPI<CardBackPeopleBodyType>(urlPeople);
	const { cast } = await RequestInformationsAPI<DataTypeMoviesAndTVs>(urlCast);
	handleStateChangeInformationsPeoples({ informationPeople: dataResult, participationsInMoviesOrTV: cast });
};

type isExistUrlInformationsType = {
	values: {
		peopleId: number;
		handleStateChangeInformationsPeoples: (newInformations: InformationsPeoplesContextType) => void;
	};
};

export const isExistUrlInformations = async ({ values }: isExistUrlInformationsType): Promise<void> => {
	const { handleStateChangeInformationsPeoples, peopleId} = values;
	RequestAPIs(handleStateChangeInformationsPeoples, peopleId);
};

export const getUrPeople = ({ values }: GetUrlPeopleType): void => {
	const { peopleId, handleStateChangeInformationsPeoples } = values;
	isExistUrlInformations({ values: { handleStateChangeInformationsPeoples, peopleId } });
};
