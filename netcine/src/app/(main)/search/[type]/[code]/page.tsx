import { RequestInformationsAPI } from '@/app/api/RequestInformationsAPI';
import { MovieOrTVDataType } from '@/app/types/api/RequestAPI';
import { defineURLSearch } from '@/app/functions/search/defineURLSearch';
import { excludePersonsList } from '@/app/functions/search/excludePersonsList';
import { CardsGroupResult } from '@/app/components/CardsGroupResult';
import { randomVideo } from '@/app/functions/PlayerVideo/randomVideo';

export default async function Page({ params }: { params: { type: string; code: string } }) {
	const { code, type } = params;
	const urlSearch = defineURLSearch({ values: { code, type } });
	const { results } = await RequestInformationsAPI<MovieOrTVDataType>(urlSearch);
	const verifyExistedPerson = type === 'others' ? excludePersonsList(results) : results;
	const numberRandom = randomVideo(verifyExistedPerson.length - 1);

	return <CardsGroupResult values={{ verifyExistedPerson, type, numberRandom }} />;
}
