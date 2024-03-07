'use client';

import Image from 'next/image';
import netcine from '../images/netCine.png';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import { stringAvatar } from '../functions/navbar/stringAvatar';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import { useRef, useState } from 'react';
import { handleSearchIconOpen } from '../functions/navbar/handleSearchIconOpen';
import { handleInputSearch } from '../functions/navbar/handleInputSearch';
import { handleSearchIconClose } from '../functions/navbar/handleSearchIconClose';
import { useSideMenuContext } from '../context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const NavBar = () => {
	const inputSearch = useRef<HTMLInputElement>(null);
	const [isActiveSearch, setIsActiveSearch] = useState<boolean>(false);
	const [textInputSearch, setTextInputSearch] = useState<string>('');
	const { handleStateChange } = useSideMenuContext();
	const router = useRouter();
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
					<Image src={netcine} width={190} height={50} alt='Logo NetCine' priority={true} />
				</Link>
			</section>

			<ul className='navbar-search'>
				<li className={`navbar-search-container ${isActiveSearch ? 'active-search-bar' : ''}`}>
					<IconButton
						className='navbar-search-container-icon'
						onClick={() => handleSearchIconOpen({ setIsActiveSearch, inputSearch })}
					>
						<SearchIcon style={{ fontSize: '1.75rem' }} />
					</IconButton>
					<section className='navbar-search-container-input'>
						<input
							type='text'
							placeholder='O que você procura?'
							ref={inputSearch}
							value={textInputSearch}
							onChange={(event) => handleInputSearch({ event, setTextInputSearch, router })}
						/>
					</section>
					<section>
						<IconButton
							className='navbar-search-container-icon'
							onClick={() => handleSearchIconClose({ setIsActiveSearch, setTextInputSearch })}
						>
							<Close style={{ fontSize: '1.2rem' }} />
						</IconButton>
					</section>
				</li>
				<li>
					<Avatar {...stringAvatar('Vitor Marcelo')} />
				</li>
			</ul>
		</nav>
	);
};
