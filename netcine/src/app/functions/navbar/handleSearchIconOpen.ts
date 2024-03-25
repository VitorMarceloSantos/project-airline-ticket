import { handleSearchIconOpenType } from '@/app/types/components/NavBarTypes';

export const handleSearchIconOpen = ({ inputSearch, setIsActiveSearch }: handleSearchIconOpenType): void => {
	setIsActiveSearch(true);
	inputSearch.current?.focus();
};
