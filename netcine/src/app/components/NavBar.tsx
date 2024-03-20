'use client';

import Image from 'next/image';
import netCine from '/public/images/netCine.png';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { handleSearchIconOpen } from '../functions/navbar/handleSearchIconOpen';
import { handleSearchIconClose } from '../functions/navbar/handleSearchIconClose';
import { useSideMenuContext } from '../context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'next-auth/react';

export const NavBar = ({ children }: { children: React.ReactNode }) => {
	const inputSearch = useRef<HTMLInputElement>(null);
	const [isActiveSearch, setIsActiveSearch] = useState<boolean>(false);
	const [textInputSearch, setTextInputSearch] = useState<string>('');
	const { handleStateChange } = useSideMenuContext();
	const router = useRouter();

	function debounce<Params extends any[]>(func: (...args: Params) => any, timeout: number): (...args: Params) => void {
		let timer = useRef(null);
		return (...args: Params) => {
			clearTimeout(timer.current as unknown as NodeJS.Timeout);
			(timer.current as unknown as NodeJS.Timeout) = setTimeout(() => {
				func(...args);
			}, timeout);
		};
	}

	function requestRouter(value: string) {
		router.push(`/search/others/${value}`);
	}

	const debouncedRouter = debounce(requestRouter, 2000);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value },
		} = event;
		setTextInputSearch(value);
		if (value.length !== 0) debouncedRouter(value);
	};

	return (
		<nav className='navbar'>
			<ul className='navbar-list navbar-buttons'>
				<li>
					<MenuIcon onClick={() => handleStateChange(true)} />
				</li>
				<li>
					<Link href={'/movies'}>Filmes</Link>
				</li>
				<li>
					<Link href={'/tv'}>Séries</Link>
				</li>
			</ul>
			<section className='navbar-logo'>
				<Link href={'/'}>
					<Image src={netCine} width={190} height={50} alt='Logo NetCine' priority={true} />
				</Link>
			</section>
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
		</nav>
	);
};
