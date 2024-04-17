import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Close } from '@mui/icons-material';
import { handleSearchIconOpen } from '@/app/functions/navbar/handleSearchIconOpen';
import { handleSearchIconClose } from '@/app/functions/navbar/handleSearchIconClose';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'next-auth/react';
import { NavBarSearchType } from '../types/components/SideMenuType';

export const NavBarSearch = ({ values }: NavBarSearchType) => {
	const {
		isActiveSearch,
		setIsActiveSearch,
		inputSearch,
		textInputSearch,
		setTextInputSearch,
		handleChange,
		children,
	} = values;
	return (
		<ul className='navbar-search'>
			<li className={`navbar-search-container ${isActiveSearch ? 'active-search-bar' : ''}`}>
				<IconButton
					className='navbar-search-container-icon'
					onClick={() => handleSearchIconOpen({ setIsActiveSearch, inputSearch })}
					sx={{
						color: 'rgba(255, 255, 255, 0.5)',
						'&:hover': {
							color: '#ffffffef',
						},
					}}
				>
					<SearchIcon style={{ fontSize: '1.75rem' }} />
				</IconButton>
				<section className='navbar-search-container-input'>
					<input
						type='text'
						placeholder='O que você procura?'
						ref={inputSearch}
						value={textInputSearch}
						onChange={(event) => handleChange(event)}
					/>
				</section>
				<section>
					<IconButton
						className='navbar-search-container-icon'
						onClick={() => handleSearchIconClose({ setIsActiveSearch, setTextInputSearch })}
					>
						<Close style={{ fontSize: '1.3rem' }} />
					</IconButton>
				</section>
			</li>
			<li>{children}</li>
			<li>
				<IconButton
					className='navbar-search-container-icon'
					sx={{
						color: 'rgba(255, 255, 255, 0.5)',
						'&:hover': {
							color: '#ffffffef',
						},
					}}
					onClick={() => signOut({ callbackUrl: '/login' })}
				>
					<LogoutIcon style={{ fontSize: '1.5rem' }} />
				</IconButton>
			</li>
		</ul>
	);
};
