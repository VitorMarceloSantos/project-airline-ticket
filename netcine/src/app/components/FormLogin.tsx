import { CircularProgress, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { FormLoginType } from '../types/components/FormValuesType';
import Image from 'next/image';
import Link from 'next/link';
import google from '/public/images/google.png';
import github from '/public/images/github.png';
import { handleChange, isVisibleFunction, loginProviders } from '../functions/formLogin/functionsFormLogin';

export const FormLogin = ({ values }: FormLoginType) => {
	const { register, formValues, loadingForm, setFormValues, errors, isVisible, setIsVisible, isVisibleText } = values;

	return (
		<>
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
					onChange={(event) => handleChange(event, setFormValues)}
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
						onChange={(event) => handleChange(event, setFormValues)}
					/>
					<IconButton
						className='container-informations-buttons-input-password-icon'
						aria-label='button-play'
						onClick={() => isVisibleFunction(setIsVisible)}
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
					{loadingForm ? <CircularProgress size={25} thickness={4} sx={{ color: '#ffffffef' }} /> : 'Entrar'}
				</button>
				<section className='container-text-error-login' style={{ opacity: `${isVisibleText}` }}>
					<p>Usário/Senha Inválidos.</p>
				</section>
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
		</>
	);
};
