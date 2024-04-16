import LoginAndCreate from '@/app/components/LoginAndCreate';
import { ValuesFormLogin } from '@/app/components/ValuesFormLogin';

export default async function Login() {
	return (
		<LoginAndCreate>
			<ValuesFormLogin />
		</LoginAndCreate>
	);
}
