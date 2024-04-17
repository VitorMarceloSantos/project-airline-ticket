'use client';

import Image from 'next/image';
import netCine from '/public/images/netCine.png';
import MenuIcon from '@mui/icons-material/Menu';
import { ChangeEvent, useRef, useState } from 'react';
import { useSideMenuContext } from '@/app/context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NavBarSearch } from './NavBarSearch';

export const NavBar = ({ children }: { children: React.ReactNode }) => {
	const inputSearch = useRef<HTMLInputElement>(null);
	const [isActiveSearch, setIsActiveSearch] = useState<boolean>(false);
	const [textInputSearch, setTextInputSearch] = useState<string>('');
	const { handleStateChange } = useSideMenuContext();
	const router = useRouter();
	const NUMBER_TWO_THOUSAND = 2000;

	function Debounce<Params extends unknown[]>(
		func: (...args: Params) => unknown,
		timeout: number,
	): (...args: Params) => void {
		const timer = useRef(null);
		return (...args: Params) => {
			clearTimeout(timer.current as unknown as NodeJS.Timeout);
			(timer.current as unknown as NodeJS.Timeout) = setTimeout(() => {
				func(...args);
			}, timeout);
		};
	}

	function requestRouter(value: string) {
		router.push(`/search/others/${value}`);
		setTextInputSearch('');
		setIsActiveSearch(false);
	}

	const debouncedRouter = Debounce(requestRouter, NUMBER_TWO_THOUSAND);

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
				<li className='navbar-list-mobile'>
					<Link href={'/movies'}>Filmes</Link>
				</li>
				<li className='navbar-list-mobile'>
					<Link href={'/tv'}>Séries</Link>
				</li>
			</ul>
			<section className='navbar-logo'>
				<Link href={'/'}>
					<Image src={netCine} width={190} height={50} alt='Logo NetCine' priority={true} />
				</Link>
			</section>
			<NavBarSearch
				values={{
					children,
					handleChange,
					inputSearch,
					isActiveSearch,
					setIsActiveSearch,
					setTextInputSearch,
					textInputSearch,
				}}
			/>
		</nav>
	);
};
