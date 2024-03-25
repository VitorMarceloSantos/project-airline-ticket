'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import google from '/public/images/google.png';
import github from '/public/images/github.png';
import { FormValuesType } from '@/app/types/components/FormValuesType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { createFormSchemaLogin } from '@/app/validations/FormLogin';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CircularProgress, IconButton } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const ValuesFormLogin = () => {
	const INITIAL_FORMS_VALUES = { email: '', password: '' };
	const [formValues, setFormValues] = useState<FormValuesType>(INITIAL_FORMS_VALUES);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValuesType>({
		resolver: joiResolver(createFormSchemaLogin, { allowUnknown: true }), // https://github.com/hapijs/joi/blob/v15.0.3/API.md#validatevalue-schema-options-callback
		defaultValues: { ...formValues },
	});
	const [isVisible, setIsVisible] = useState<string>('password');
	const router = useRouter();
	const [loadingForm, setLoadingForm] = useState<boolean>(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
	};

	const onSubmit: SubmitHandler<FormValuesType> = async (data, event) => {
		event?.preventDefault();
		setLoadingForm(true);
		const res = await signIn<'credentials'>('credentials', {
			...data,
			redirect: false,
		});

		if (res?.error) {
			console.log('Erro ao fazer login', res.error);
		} else {
			router.push('/');
		}
		setLoadingForm(false);
	};

	const loginProviders = (provider: string) => {
		signIn(provider, { callbackUrl: '/' });
	};

	const isVisibleFunction = () => {
		setIsVisible((prevState) => (prevState === 'password' ? 'text' : 'password'));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2>Entrar</h2>
			<section className='container-informations-buttons'>
				<input
					{...register('email')}
					type='email'
					placeholder='Email Cadastrado'
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
					{loadingForm ? <CircularProgress /> : 'Entrar'}
				</button>
			</section>
			<section className='container-informations-providers'>
				<section className='container-informations-providers-google button-provider'>
					<div className='container-informations-providers-img'>
						<Image src={google} width={50} height={50} alt='Logo Google' />
					</div>
					<button onClick={() => loginProviders('google')}>Conecte com Google</button>
				</section>
				<section className='container-informations-providers-github button-provider'>
					<div className='container-informations-providers-img'>
						<Image src={github} width={50} height={50} alt='Logo GitHub' />
					</div>
					<button onClick={() => loginProviders('github')}>Conecte com GitHub</button>
				</section>
			</section>
			<h3>
				Novo por aqui?
				<Link href='/create'> Cadastre agora</Link>
			</h3>
		</form>
	);
};
