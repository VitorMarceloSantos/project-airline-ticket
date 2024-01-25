import { dataLanguages } from '../../data/dataLanguages';
import { CardLanguagesType } from '../../types/components/CardTypes';

export const filterLanguage = (language: string): CardLanguagesType => {
	return dataLanguages.find((languageData) => languageData.iso_639_1 === language) as CardLanguagesType;
};
