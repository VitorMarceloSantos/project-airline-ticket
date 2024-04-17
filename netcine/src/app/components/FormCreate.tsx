import { FormCreateType } from '@/app/types/components/FormValuesType';
import Link from 'next/link';
import { CircularProgress, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const FormCreate = ({ values }: FormCreateType) => {
	const { register, formValues, setFormValues, loadingForm, errors, isVisible, setIsVisible } = values;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
	};

	const isVisibleFunction = () => {
		setIsVisible((prevState) => (prevState === 'password' ? 'text' : 'password'));
	};

	return (
		<>
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
			<h3 id='login'>
				<Link href='/login'>Login</Link>
			</h3>
		</>
	);
};
