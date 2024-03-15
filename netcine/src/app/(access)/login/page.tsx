import LoginAndCreate from '@/app/components/LoginAndCreate';
import { ValuesFormLogin } from '@/app/components/ValuesFormLogin';

export default function Login() {
	return <LoginAndCreate children={<ValuesFormLogin />} />;
}
