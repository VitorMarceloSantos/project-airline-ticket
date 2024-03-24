import { GetUrlPeopleType } from '@/app/types/components/CardPeople';
import { CardBackPeopleBodyType } from '@/app/types/components/CardBackPeopleBodyType';
import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { DataTypeMoviesAndTVs } from '@/app/types/api/RequestAPI';
import { InformationsPeoplesContextType } from '@/app/types/context/InformationsPeoplesType';
import { getMovieOrTVWithValidVideo } from './getMovieOrTVWithValidVideo';

const RequestAPIs = async (
	handleStateChangeInformationsPeoples: (newInformations: InformationsPeoplesContextType) => void,
	peopleId: number,
) => {
	const urlPeople = `https://api.themoviedb.org/3/person/${peopleId}?language=pt-BR`;
	const urlCast = `https://api.themoviedb.org/3/person/${peopleId}/combined_credits?language=pt-BR`;
	const dataResult = await RequestInformationsAPI<CardBackPeopleBodyType>(urlPeople);
	const { cast } = await RequestInformationsAPI<DataTypeMoviesAndTVs>(urlCast);
	const { movieOrTVRandom, urlMovieOrTVRandom } = await getMovieOrTVWithValidVideo(cast);
	handleStateChangeInformationsPeoples({
		informationPeople: dataResult,
		participationsInMoviesOrTV: cast,
		randomMovieOrTV: {
			url: urlMovieOrTVRandom,
			type: movieOrTVRandom.media_type as string,
			movieOrTV: movieOrTVRandom,
		},
	});
};

type isExistUrlInformationsType = {
	values: {
		peopleId: number;
		handleStateChangeInformationsPeoples: (newInformations: InformationsPeoplesContextType) => void;
	};
};

export const isExistUrlInformations = async ({ values }: isExistUrlInformationsType): Promise<void> => {
	const { handleStateChangeInformationsPeoples, peopleId } = values;
	RequestAPIs(handleStateChangeInformationsPeoples, peopleId);
};

export const getUrPeople = ({ values }: GetUrlPeopleType): void => {
	const { peopleId, handleStateChangeInformationsPeoples } = values;
	isExistUrlInformations({ values: { handleStateChangeInformationsPeoples, peopleId } });
};
