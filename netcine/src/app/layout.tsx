import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './css/app.css';
import { Providers } from './providers';
import { NavBar } from './components/NavBar';
import { Suspense } from 'react';
import { ModalMovies } from './components/ModalMovies';
import { SideMenu } from './components/SideMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NetMovies',
	description: 'NetMovies - Movies and Series',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-br'>
			<body className={inter.className}>
				<Providers>
					<Suspense>
						<ModalMovies />
					</Suspense>
					<SideMenu>
						<NavBar />
						{children}
					</SideMenu>
				</Providers>
			</body>
		</html>
	);
}
