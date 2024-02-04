import { handleSearchIconOpenType } from '../../types/components/NavBarTypes';

export const handleSearchIconOpen = ({ inputSearch, setIsActiveSearch }: handleSearchIconOpenType) => {
	setIsActiveSearch(true);
	inputSearch.current?.focus();
};
