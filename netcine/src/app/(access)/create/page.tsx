import LoginAndCreate from '@/app/components/LoginAndCreate';
import { ValuesFormCreate } from '@/app/components/ValuesFormCreate';

export default function Create() {
	return <LoginAndCreate children={<ValuesFormCreate />} />;
}
