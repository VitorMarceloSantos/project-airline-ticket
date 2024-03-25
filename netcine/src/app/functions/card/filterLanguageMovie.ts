import { dataLanguages } from '@/app/data/dataLanguages';
import { CardLanguagesType } from '@/app/types/components/CardTypes';

export const filterLanguage = (language: string): CardLanguagesType => {
	return dataLanguages.find((languageData) => languageData.iso_639_1 === language) as CardLanguagesType;
};
