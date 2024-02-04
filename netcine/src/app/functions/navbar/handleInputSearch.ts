import { handleInputSearchType } from '../../types/components/NavBarTypes';

export const handleInputSearch = ({ event, setTextInputSearch }: handleInputSearchType) => {
	const {
		target: { value },
	} = event;
	setTextInputSearch(value);
};
