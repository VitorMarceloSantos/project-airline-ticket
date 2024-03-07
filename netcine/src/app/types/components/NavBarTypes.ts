import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react';

export type handleInputSearchType = {
	event: ChangeEvent<HTMLInputElement>;
	setTextInputSearch: Dispatch<SetStateAction<string>>;
	router: AppRouterInstance;
};

export type handleSearchIconCloseType = {
	setIsActiveSearch: Dispatch<SetStateAction<boolean>>;
	setTextInputSearch: Dispatch<SetStateAction<string>>;
};
export type handleSearchIconOpenType = {
	setIsActiveSearch: Dispatch<SetStateAction<boolean>>;
	inputSearch: RefObject<HTMLInputElement>;
};
