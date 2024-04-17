'use client';

import { useEffect, useState } from 'react';
import { FormValuesType } from '@/app/types/components/FormValuesType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { createFormSchemaLogin } from '@/app/validations/FormLogin';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormLogin } from './FormLogin';

export const ValuesFormLogin = () => {
	const INITIAL_FORMS_VALUES = { email: '', password: '' };
	const [formValues, setFormValues] = useState<FormValuesType>(INITIAL_FORMS_VALUES);
	const [isVisible, setIsVisible] = useState<string>('password');
	const [loadingForm, setLoadingForm] = useState<boolean>(false);
	const [isVisibleText, setIsVisibleText] = useState<string>('0');
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
		setFocus,
	} = useForm<FormValuesType>({
		resolver: joiResolver(createFormSchemaLogin, { allowUnknown: true }), // https://github.com/hapijs/joi/blob/v15.0.3/API.md#validatevalue-schema-options-callback
		defaultValues: { ...formValues },
	});

	useEffect(() => {
		setFocus('email');
	}, [setFocus]);

	const onSubmit: SubmitHandler<FormValuesType> = async (data, event) => {
		event?.preventDefault();
		setLoadingForm(true);
		const res = await signIn<'credentials'>('credentials', {
			...data,
			redirect: false,
		});

		if (res?.error) {
			console.log('Erro ao fazer login', res.error);
			setIsVisibleText('1');
		} else {
			router.push('/');
		}
		setLoadingForm(false);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormLogin
				values={{
					errors,
					formValues,
					isVisible,
					isVisibleText,
					loadingForm,
					register,
					setFormValues,
					setIsVisible,
				}}
			/>
		</form>
	);
};
