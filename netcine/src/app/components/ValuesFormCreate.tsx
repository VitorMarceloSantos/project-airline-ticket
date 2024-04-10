'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FormValuesType } from '@/app/types/components/FormValuesType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { createFormSchemaCreate } from '@/app/validations/FormCreate';
import { CircularProgress, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from 'next/navigation';

export const ValuesFormCreate = () => {
	const INITIAL_FORMS_VALUES = { email: '', password: '', name: '' };
	const [formValues, setFormValues] = useState<FormValuesType>(INITIAL_FORMS_VALUES);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValuesType>({
		resolver: joiResolver(createFormSchemaCreate, { allowUnknown: true }), // https://github.com/hapijs/joi/blob/v15.0.3/API.md#validatevalue-schema-options-callback
		defaultValues: { ...formValues },
	});
	const [isVisible, setIsVisible] = useState<string>('password');
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
	};
	const router = useRouter();
	const [loadingForm, setLoadingForm] = useState<boolean>(false);

	const onSubmit: SubmitHandler<FormValuesType> = async (data, event) => {
		event?.preventDefault();
		setLoadingForm(true);
		const request = await fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-type': 'aplication/json',
			},
			body: JSON.stringify(data),
		});
		await request.json();
		if (!request.ok) {
			console.log('Erro no Post-Users');
		} else {
			router.push('/login');
		}
		setLoadingForm(false);
	};

	const isVisibleFunction = () => {
		setIsVisible((prevState) => (prevState === 'password' ? 'text' : 'password'));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2>Cadastrar</h2>
			<section className='container-informations-buttons'>
				<input
					{...register('name')}
					type='text'
					placeholder='Nome'
					id='name'
					name='name'
					value={formValues.name}
					disabled={loadingForm}
					onChange={handleChange}
				/>
				{errors.name && <p>{errors.name?.message}</p>}
				<input
					{...register('email')}
					type='email'
					placeholder='Email'
					id='email'
					name='email'
					value={formValues.email}
					disabled={loadingForm}
					onChange={handleChange}
				/>
				{errors.email && <p>{errors.email?.message}</p>}
				<section className='container-informations-buttons-input-password'>
					<input
						{...register('password')}
						type={isVisible}
						placeholder='Senha'
						id='password'
						name='password'
						value={formValues.password}
						disabled={loadingForm}
						onChange={handleChange}
					/>
					<IconButton
						className='container-informations-buttons-input-password-icon'
						aria-label='button-play'
						onClick={() => isVisibleFunction()}
						sx={{
							backgroundColor: 'transparent',
							color: '$color-titles-buttons',
							borderRadius: '0',
							width: '10%',
							position: 'absolute',
							right: '0',
							'&:hover': {
								color: '#a49c9c',
							},
						}}
					>
						{isVisible === 'password' ? (
							<VisibilityOffIcon className='container-informations-buttons-input-password-icon-color' />
						) : (
							<VisibilityIcon className='container-informations-buttons-input-password-icon-color' />
						)}
					</IconButton>
				</section>
				{errors.password && <p>{errors.password?.message}</p>}
				<button type='submit' className='button-submit'>
					{loadingForm ? <CircularProgress /> : 'Cadastrar'}
				</button>
			</section>
			<h3>
				<Link href='/login'>Login</Link>
			</h3>
		</form>
	);
};
