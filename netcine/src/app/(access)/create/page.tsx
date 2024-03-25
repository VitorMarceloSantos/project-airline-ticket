import LoginAndCreate from '@/app/components/LoginAndCreate';
import { ValuesFormCreate } from '@/app/components/ValuesFormCreate';

export default async function Create() {
	return <LoginAndCreate children={<ValuesFormCreate />} />;
}
