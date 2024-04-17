import { FormValuesType } from '@/app/types/components/FormValuesType';
import { signIn } from 'next-auth/react';
import React, { Dispatch, SetStateAction } from 'react';

export const loginProviders = (provider: string) => {
	signIn(provider, { callbackUrl: '/' });
};

export const isVisibleFunction = (setIsVisible: Dispatch<SetStateAction<string>>) => {
	setIsVisible((prevState) => (prevState === 'password' ? 'text' : 'password'));
};

export const handleChange = (
	event: React.ChangeEvent<HTMLInputElement>,
	setFormValues: Dispatch<SetStateAction<FormValuesType>>,
) => {
	setFormValues((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
};
