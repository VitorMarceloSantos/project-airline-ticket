import { LoadPageLocalStorage } from '@/app/components/LoadPageLocalStorage';

export default async function Page() {
	return <LoadPageLocalStorage value={{ localKey: 'movies_liked' }} />;
}