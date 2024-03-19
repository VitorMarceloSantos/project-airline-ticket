import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../css/app.css';
import { Providers } from '../providers';
import { NavBar } from '../components/NavBar';
import { Suspense } from 'react';
import { ModalMovies } from '../components/ModalMovies';
import { SideMenu } from '../components/SideMenu';
// import AuthProvider from '../providers/AuthProvider';
import { AvatarNavBar } from '../components/AvatarNavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NetMovies',
	description: 'NetMovies - Movies and Series',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-br'>
			<body className={inter.className}>
				{/* <AuthProvider> */}
					<Providers>
						<Suspense>
							<ModalMovies />
						</Suspense>
						<SideMenu>
							<NavBar children={<AvatarNavBar />} />
							{children}
						</SideMenu>
					</Providers>
				{/* </AuthProvider> */}
			</body>
		</html>
	);
}
